import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Country = {
  cca3: string;
  name: { common: string; official: string };
  flags: { svg: string; png: string; alt: string };
  region: string;
  population: number;
  capital?: string[];
};
export default function Card({ posts }: { posts: Country }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-royal-blue-200 hover:bg-royal-blue-250 rounded-md p-10 flex flex-col items-center gap-2 border border-royal-blue-100 shadow-md shadow-royal-blue-400 cursor-pointer w-60 aspect-video">
          <div className="relative w-40 aspect-[3/2]">
            <Image
              className="object-cover rounded-md border border-royal-blue-100 shadow-md shadow-royal-blue-400"
              src={posts.flags.png}
              fill
              alt={posts.flags.alt || `Bandera de ${posts.name.common}`}
            />
          </div>
          <h2 className="font-bold text-center">{posts.name.common}</h2>
          <p>{posts.region}</p>
          <p>{posts.population}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="text-royal-blue-900">
        <DialogHeader>
          <DialogTitle>{posts.name.official}</DialogTitle>
        </DialogHeader>
         <div className="flex items-start gap-4">
          <div className="relative w-28 aspect-[3/2]">
            <Image
              src={posts.flags.png}
              alt={posts.flags.alt || ""}
              fill
              className="rounded-md border border-neutral-300 shadow-md shadow-neutral-300"
              
            />
          </div>
          <div className="space-y-1 text-sm">
            <div><strong>Capital:</strong> {posts.capital?.[0] ?? "Sin capital"}</div>
            <div><strong>Región:</strong> {posts.region}</div>
            <div><strong>Población:</strong> {posts.population.toLocaleString()}</div>
           
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
