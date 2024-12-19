import { Ban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AutoExclusionCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Auto-exclusion</CardTitle>
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
  )
}