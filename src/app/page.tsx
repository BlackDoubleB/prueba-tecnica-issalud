import PanelFiltros from "@/components/filtros/PanelFiltros";

export default async function Home() {
  const data = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital')
  const dataApi = await data.json()
  return (
        <PanelFiltros dataApi={dataApi}></PanelFiltros>
  );
}
