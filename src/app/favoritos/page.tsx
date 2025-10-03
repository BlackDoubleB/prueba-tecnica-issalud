import Client from "./client";
import { getCountries } from "@/lib/countries";

export default async function Favoritos() {
  const dataApi = await getCountries();

  return <Client dataApi={dataApi}></Client>;
}
