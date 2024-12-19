import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { UserNav } from "./UserNav"
import { BettingHistory } from "./BettingHistory"
import { Upload, Wallet, Timer, Ban } from "lucide-react"

export function Dashboard() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Mon Espace</h2>
        </div>
        <Tabs defaultValue="bets" className="space-y-4">
          <TabsList>
            <TabsTrigger value="bets">Mes Paris</TabsTrigger>
            <TabsTrigger value="documents">Mes Documents</TabsTrigger>
            <TabsTrigger value="deposit">Dépôt</TabsTrigger>
            <TabsTrigger value="limits">Limites</TabsTrigger>
          </TabsList>
          <TabsContent value="bets" className="space-y-4">
            <BettingHistory />
          </TabsContent>
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Mes Documents</CardTitle>
                <CardDescription>
                  Gérez vos documents d'identité et bancaires
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-4 border-2 border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-primary">
                    <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Pièce d'identité</p>
                  </Card>
                  <Card className="p-4 border-2 border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-primary">
                    <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Justificatif de domicile</p>
                  </Card>
                  <Card className="p-4 border-2 border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-primary">
                    <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">RIB</p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="deposit">
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
          </TabsContent>
          <TabsContent value="limits">
            <Card>
              <CardHeader>
                <CardTitle>Mes limites de jeu</CardTitle>
                <CardDescription>
                  Gérez vos limites pour jouer de manière responsable
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Limites de dépôt</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Limite hebdomadaire:</p>
                        <p className="text-2xl font-bold">500€</p>
                        <div className="h-2 bg-secondary rounded-full">
                          <div className="h-2 bg-primary rounded-full" style={{width: "60%"}}></div>
                        </div>
                        <p className="text-sm text-muted-foreground">300€ utilisés cette semaine</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Auto-exclusion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Ban className="h-5 w-5 text-destructive" />
                          <p className="text-sm">Aucune période d'auto-exclusion active</p>
                        </div>
                        <Button variant="outline" className="w-full">
                          Configurer une période d'auto-exclusion
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}