"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Orden } from "@/lib/types";
import { Button } from "@nextui-org/react";

type Props = {
  orden: Orden;
  setOrden: (v: Orden) => void;
};

export default function OrdenarPais({ orden, setOrden }: Props) {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <label className="font-bold">Ordenar por</label>
      <div className="flex items-center gap-2 w-52">
        <Select value={orden} onValueChange={setOrden}>
          <SelectTrigger>
            <SelectValue placeholder="Pais" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Pais (A-Z)</SelectItem>
            <SelectItem value="desc">Pais (Z-A)</SelectItem>
          </SelectContent>
        </Select>
        <button
          className=" bg-gray-200 border border-royal-blue-100 hover:bg-gray-200 duration-200 ease-in-out cursor-pointer p-2.5 rounded-md shadow-md shadow-royal-blue-400 text-xs hover:text-royal-blue-500"
          type="button"
          onClick={() => setOrden("")}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
}
