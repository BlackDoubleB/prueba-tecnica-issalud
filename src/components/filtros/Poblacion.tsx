import { Input } from "@/components/ui/input";

export default function Poblacion() {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">Población</label>
      <div className="flex gap-2">
        <Input placeholder="Min"></Input>
        <Input placeholder="Max"></Input>
      </div>
    </div>
  );
}
