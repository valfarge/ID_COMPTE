import { Slider } from "@/components/ui/slider"

interface LimitSliderProps {
  value: number
  onChange: (value: number) => void
  max: number
  step: number
  label: string
}

export function LimitSlider({ value, onChange, max, step, label }: LimitSliderProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{value}€</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        max={max}
        step={step}
        className="w-full"
      />
    </div>
  )
}