"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Country } from "@/lib/types";
import { useFavorites } from "@/store/favorites";
import { useEffect, useState } from "react";

type Props = {
  paises: Country;
};

export default function Card({ paises }: Props) {
  const nombre = paises.name.common;
  // selectores
  const isFav = useFavorites((s) => s.has(nombre));
  const toggle = useFavorites((s) => s.toggle);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="relative h-full w-fit">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-royal-blue-200 hover:bg-royal-blue-250 rounded-md p-10 flex flex-col items-center gap-2 border border-royal-blue-100 shadow-md shadow-royal-blue-400 w-60 h-full">
            <div className="relative w-40 aspect-[3/2]">
              <Image
                className="cursor-pointer object-cover rounded-md border border-royal-blue-100 shadow-md shadow-royal-blue-400"
                src={paises.flags.png}
                fill
                alt={paises.flags.alt || `Bandera de ${paises.name.common}`}
              />
            </div>
            <h2 className="font-bold text-center">{paises.name.common}</h2>
            <p>{paises.region}</p>
            <p>{paises.population}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="text-royal-blue-900">
          <DialogHeader>
            <DialogTitle>{paises.name.official}</DialogTitle>
          </DialogHeader>
          <div className="flex items-start gap-4">
            <div className="relative w-28 aspect-[3/2]">
              <Image
                src={paises.flags.png}
                alt={paises.flags.alt || ""}
                fill
                className="rounded-md border border-neutral-300 shadow-md shadow-neutral-300"
              />
            </div>
            <div className="space-y-1 text-sm">
              <div>
                <strong>Capital:</strong> {paises.capital?.[0] ?? "Sin capital"}
              </div>
              <div>
                <strong>Región:</strong> {paises.region}
              </div>
              <div>
                <strong>Población:</strong> {paises.population.toLocaleString()}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <button
        type="button"
        className="absolute top-0 right-1 p-2 bg-royal-blue-800 rounded-b-md cursor-pointer"
        onClick={() => toggle(nombre)}
        aria-pressed={isFav}
        title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        <svg
          className={`${isFav ? " text-yellow-400 " : " text-gray-100  "}
        `}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17.562 21.56a1 1 0 0 1-.465-.116L12 18.764l-5.097 2.68a1 1 0 0 1-1.45-1.053l.973-5.676l-4.124-4.02a1 1 0 0 1 .554-1.705l5.699-.828l2.549-5.164a1.04 1.04 0 0 1 1.793 0l2.548 5.164l5.699.828a1 1 0 0 1 .554 1.705l-4.124 4.02l.974 5.676a1 1 0 0 1-.985 1.169Z"
          />
        </svg>
      </button>
    </div>
  );
}
