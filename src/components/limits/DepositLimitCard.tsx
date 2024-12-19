import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LimitSlider } from "./LimitSlider"

interface DepositLimitCardProps {
  value: number
  onChange: (value: number) => void
}

export function DepositLimitCard({ value, onChange }: DepositLimitCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Limites de dépôt</CardTitle>
        <CardDescription>
          Définissez le montant maximum que vous pouvez déposer par semaine
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LimitSlider
          value={value}
          onChange={onChange}
          max={2000}
          step={50}
          label="Limite hebdomadaire"
        />
      </CardContent>
    </Card>
  )
}