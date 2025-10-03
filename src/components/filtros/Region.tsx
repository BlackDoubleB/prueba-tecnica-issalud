"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  setNombreRegion: (v: string) => void;
  nombreRegion : string
  filtradosRegion: string[];
};

export default function Region({
  setNombreRegion,
  nombreRegion,
  filtradosRegion,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">Region</label>
      <Select  value={nombreRegion} onValueChange={setNombreRegion}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filtrar" />
        </SelectTrigger>
        <SelectContent>
          {filtradosRegion.map((region) => (
            <SelectItem
              value={region}
              key={region}
              >
              {region}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
