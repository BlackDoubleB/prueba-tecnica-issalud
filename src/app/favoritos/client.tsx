"use client";
import Card from "@/components/ui/card";
import { Country } from "@/lib/types";
import { useMemo } from "react";
import { useFavorites } from "@/store/favorites";
import Link from "next/link";

export default function Client({ dataApi }: { dataApi: Country[] }) {
  const dataFavoritos = useFavorites((f) => f.items);
  const filtroFavoritos = useMemo<Country[]>(
    () => dataApi.filter((c) => dataFavoritos.includes(c.name.common)),
    [dataApi, dataFavoritos]
  );

  return (
    <div className="  min-h-screen w-full">
      <h1 className="text-4xl py-5 font-bold">Paises Favoritos</h1>
      <div className="flex flex-wrap gap-10">
        {filtroFavoritos.length === 0 ? (
          <div className="bg-royal-blue-200 rounded-md p-16 flex flex-col justify-center items-center gap-2 border border-royal-blue-100 shadow-md shadow-royal-blue-400 cursor-pointer w-60">
            Sin resultados.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"
                />
              </g>
            </svg>
          </div>
        ) : (
          filtroFavoritos.map((x) => (
            <div key={x.cca3 ?? x.name.common}>
              <Card paises={x} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
