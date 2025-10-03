export async function getCountries() {
  const data = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital"
  );
  const dataApi = await data.json();
  return dataApi;
}
