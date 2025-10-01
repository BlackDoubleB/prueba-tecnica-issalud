export type Country = {
  cca3: string;
  name: { common: string; official: string };
  flags: { svg: string; png: string; alt: string };
  region: string;
  population: number;
  capital?: string[];
};
