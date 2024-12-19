import { Upload } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DocumentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Mes Documents</h1>
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
    </div>
  )
}