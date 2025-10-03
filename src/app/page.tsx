import PanelFiltros from "@/components/filtros/PanelFiltros";
import { getCountries } from "@/lib/countries";

export default async function Home() {
  const dataApi = await getCountries();
  return (
        <PanelFiltros dataApi={dataApi}></PanelFiltros>
  );
}
