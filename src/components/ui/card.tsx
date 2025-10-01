import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Country } from "@/lib/types";


export default function Card({ paises }: { paises: Country }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-royal-blue-200 hover:bg-royal-blue-250 rounded-md p-10 flex flex-col items-center gap-2 border border-royal-blue-100 shadow-md shadow-royal-blue-400 cursor-pointer w-60 aspect-video">
          <div className="relative w-40 aspect-[3/2]">
            <Image
              className="object-cover rounded-md border border-royal-blue-100 shadow-md shadow-royal-blue-400"
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
            <div><strong>Capital:</strong> {paises.capital?.[0] ?? "Sin capital"}</div>
            <div><strong>Región:</strong> {paises.region}</div>
            <div><strong>Población:</strong> {paises.population.toLocaleString()}</div>
           
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
