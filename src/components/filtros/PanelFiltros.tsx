import Card from "../ui/card";
import Pais from "./Pais";
import Poblacion from "./Poblacion";
import Region from "./Region";
type Country = {
  cca3: string;
  name: { common: string; official: string };
  flags: { svg: string; png: string; alt: string };
  region: string;
  population: number;
  capital?: string[];
};
export default function PanelFiltros({ posts }: { posts: Country[] }) {
  return (
    <div>
      <h1 className="text-4xl py-5 font-bold">Paises</h1>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5 w-fit rounded-md p-5 h-fit bg-royal-blue-200 border border-royal-blue-100 shadow-md shadow-royal-blue-400">
          <Pais></Pais>
          <Region></Region>
          <Poblacion></Poblacion>
        </div>
        <div className="flex flex-wrap gap-10 flex-1">
          {posts.map(function (x) {
            return <Card posts={x} key={x.cca3 ?? x.name.common}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}
