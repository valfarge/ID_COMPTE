import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AutoExclusionPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Auto-exclusion</h1>
      <Card>
        <CardHeader>
          <CardTitle>Configurer une période d'auto-exclusion</CardTitle>
          <CardDescription>
            Choisissez une période pendant laquelle vous ne pourrez pas accéder à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Durée de l'auto-exclusion</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez une durée" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">24 heures</SelectItem>
                <SelectItem value="7d">7 jours</SelectItem>
                <SelectItem value="30d">30 jours</SelectItem>
                <SelectItem value="90d">90 jours</SelectItem>
                <SelectItem value="180d">6 mois</SelectItem>
                <SelectItem value="365d">1 an</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="pt-4">
            <Button variant="destructive" className="w-full">
              Confirmer l'auto-exclusion
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}