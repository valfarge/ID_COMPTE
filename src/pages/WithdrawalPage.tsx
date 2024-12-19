import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WithdrawalForm } from "@/components/withdrawal/WithdrawalForm"
import { WithdrawalHistory } from "@/components/withdrawal/WithdrawalHistory"
import { useToast } from "@/hooks/use-toast"

interface Withdrawal {
  id: string
  date: string
  amount: number // Changed to number
  status: "En cours" | "Traité" | "Annulé"
  method: string
}

export function WithdrawalPage() {
  const { toast } = useToast()
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([
    {
      id: "1",
      date: "15/04/2024",
      amount: 500,
      status: "Traité",
      method: "Virement bancaire"
    },
    {
      id: "2",
      date: "01/04/2024",
      amount: 1000,
      status: "Traité",
      method: "Virement bancaire"
    }
  ])

  const [balance, setBalance] = useState(1250.50)

  const handleNewWithdrawal = (amount: number) => {
    const newWithdrawal: Withdrawal = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("fr-FR"),
      amount: amount, // Store as number
      status: "En cours",
      method: "Virement bancaire"
    }
    
    setWithdrawals([newWithdrawal, ...withdrawals])
    setBalance(prev => prev - amount)
  }

  const handleCancelWithdrawal = (id: string) => {
    const withdrawal = withdrawals.find(w => w.id === id)
    if (!withdrawal || withdrawal.status !== "En cours") return

    setWithdrawals(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, status: "Annulé" }
      }
      return w
    }))

    setBalance(prev => prev + withdrawal.amount)

    toast({
      title: "Retrait annulé",
      description: "Le montant a été recrédité sur votre compte.",
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Retirer mon argent</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Retrait d'argent</CardTitle>
          <CardDescription>
            Retirez vos gains vers votre compte bancaire
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WithdrawalForm 
            availableBalance={balance}
            onWithdraw={handleNewWithdrawal}
          />
        </CardContent>
      </Card>

      <WithdrawalHistory 
        withdrawals={withdrawals}
        onCancelWithdrawal={handleCancelWithdrawal}
      />
    </div>
  )
}