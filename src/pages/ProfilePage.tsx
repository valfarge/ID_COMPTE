import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Mon Profil</h1>
      <Card>
        <CardHeader>
          <CardTitle>Informations personnelles</CardTitle>
          <CardDescription>
            Gérez vos informations personnelles et préférences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nom</label>
              <Input defaultValue="Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Prénom</label>
              <Input defaultValue="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Téléphone</label>
              <Input defaultValue="+33 6 12 34 56 78" />
            </div>
          </div>
          <Button className="mt-4">Sauvegarder les modifications</Button>
        </CardContent>
      </Card>
    </div>
  )
}