import PanelFiltros from "@/components/filtros/PanelFiltros";

export default async function Home() {
  let data = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital')
  let posts = await data.json()
  return (
        <PanelFiltros posts={posts}></PanelFiltros>
  );
}
