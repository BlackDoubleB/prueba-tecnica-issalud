import { Input } from "@/components/ui/input";
type Props = {
  min: number;
  max: number;
  setMin: (v: number) => void;
  setMax: (v: number) => void;
};
export default function Poblacion({ min, max, setMin, setMax }: Props) {
  function handleChange(valor: string, setFn: (v: number) => void) {
    if (valor.startsWith("-")) {
      setFn(0);
      return;
    }
    const n = Number(valor);
    setFn(Number.isFinite(n) ? n : 0);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold">Población</label>
      <div className="flex gap-2">
        <Input
          placeholder="Min"
          min={0}
          step="1"
          inputMode="numeric"
          pattern="[0-9]*"
          type="number"
          value={min === 0 ? "" : min.toString()}
          onChange={(e) => handleChange(e.currentTarget.value, setMin)}
        ></Input>
        <Input
          placeholder="Max"
          min={0}
          step="1"
          inputMode="numeric"
          pattern="[0-9]*"
          type="number"
          value={max === 0 ? "" : max.toString()}
          onChange={(e) => handleChange(e.currentTarget.value, setMax)}
        ></Input>
      </div>
    </div>
  );
}
