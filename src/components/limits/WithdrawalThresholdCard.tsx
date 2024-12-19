import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LimitSlider } from "./LimitSlider"

interface WithdrawalThresholdCardProps {
  value: number
  onChange: (value: number) => void
}

export function WithdrawalThresholdCard({ value, onChange }: WithdrawalThresholdCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seuil de retrait automatique</CardTitle>
        <CardDescription>
          Vos gains seront automatiquement retirés lorsqu'ils dépassent ce montant
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LimitSlider
          value={value}
          onChange={onChange}
          max={5000}
          step={100}
          label="Seuil de retrait"
        />
      </CardContent>
    </Card>
  )
}