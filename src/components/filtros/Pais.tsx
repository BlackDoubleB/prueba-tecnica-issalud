"use client"
import { Input } from "@/components/ui/input";
type Props = {
  nombrePais: string;
  setNombrePais: (v: string) => void;
};
export default function Pais({ nombrePais, setNombrePais }: Props){
   
    console.log("Pais", nombrePais);
    return(
        <div className="flex flex-col gap-2 ">
            <label className="font-bold">Pais</label>
            <Input placeholder="Pais" value={nombrePais} onChange={e => setNombrePais(e.target.value)}></Input>
        </div>
    )
}