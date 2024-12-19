import { Wallet, Timer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DepositPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Dépôt d'argent</h1>
      <Card>
        <CardHeader>
          <CardTitle>Dépôt d'argent</CardTitle>
          <CardDescription>
            Choisissez votre méthode de dépôt préférée
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4 cursor-pointer hover:bg-accent">
              <div className="flex flex-col items-center space-y-2">
                <Wallet className="h-8 w-8" />
                <p className="font-medium">Carte bancaire</p>
                <p className="text-sm text-muted-foreground">Dépôt instantané</p>
              </div>
            </Card>
            <Card className="p-4 cursor-pointer hover:bg-accent">
              <div className="flex flex-col items-center space-y-2">
                <Timer className="h-8 w-8" />
                <p className="font-medium">Virement bancaire</p>
                <p className="text-sm text-muted-foreground">2-3 jours ouvrés</p>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}