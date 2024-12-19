import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { DepositLimitCard } from "@/components/limits/DepositLimitCard"
import { BettingLimitCard } from "@/components/limits/BettingLimitCard"
import { WithdrawalThresholdCard } from "@/components/limits/WithdrawalThresholdCard"
import { AutoExclusionCard } from "@/components/limits/AutoExclusionCard"

export function LimitsPage() {
  const [depositLimit, setDepositLimit] = useState(500)
  const [bettingLimit, setBettingLimit] = useState(200)
  const [withdrawalThreshold, setWithdrawalThreshold] = useState(1000)

  const handleSave = () => {
    toast({
      title: "Limites mises à jour",
      description: "Vos nouvelles limites de jeu ont été enregistrées.",
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6">Limites de jeu</h1>
      <div className="space-y-6">
        <DepositLimitCard value={depositLimit} onChange={setDepositLimit} />
        <BettingLimitCard value={bettingLimit} onChange={setBettingLimit} />
        <WithdrawalThresholdCard value={withdrawalThreshold} onChange={setWithdrawalThreshold} />
        <AutoExclusionCard />
        <Button onClick={handleSave} className="w-full">
          Sauvegarder les modifications
        </Button>
      </div>
    </div>
  )
}