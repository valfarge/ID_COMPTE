import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LimitSlider } from "./LimitSlider"

interface BettingLimitCardProps {
  value: number
  onChange: (value: number) => void
}

export function BettingLimitCard({ value, onChange }: BettingLimitCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Limite de mise hebdomadaire</CardTitle>
        <CardDescription>
          Définissez le montant maximum que vous pouvez miser par semaine
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LimitSlider
          value={value}
          onChange={onChange}
          max={1000}
          step={25}
          label="Limite de mise"
        />
      </CardContent>
    </Card>
  )
}