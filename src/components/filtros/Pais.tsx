import { Input } from "@/components/ui/input";

export default function Pais(){
    return(
        <div className="flex flex-col gap-2 ">
            <label className="font-bold">Pais</label>
            <Input placeholder="Pais"></Input>
        </div>
    )
}