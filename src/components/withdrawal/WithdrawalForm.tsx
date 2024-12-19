import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

interface WithdrawalFormProps {
  availableBalance: number
  onWithdraw: (amount: number) => void
}

export function WithdrawalForm({ availableBalance, onWithdraw }: WithdrawalFormProps) {
  const [amount, setAmount] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const withdrawalAmount = Number(amount)
    if (withdrawalAmount > availableBalance) {
      toast({
        title: "Montant invalide",
        description: "Le montant demandé dépasse votre solde disponible.",
        variant: "destructive"
      })
      return
    }

    if (withdrawalAmount < 10) {
      toast({
        title: "Montant invalide",
        description: "Le montant minimum de retrait est de 10€.",
        variant: "destructive"
      })
      return
    }

    onWithdraw(withdrawalAmount)
    toast({
      title: "Demande de retrait envoyée",
      description: `Votre demande de retrait de ${amount}€ a été enregistrée.`
    })
    setAmount("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm text-muted-foreground">Solde disponible</span>
          <span className="font-medium">{availableBalance.toFixed(2)}€</span>
        </div>
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium">
            Montant à retirer
          </label>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="10"
            step="0.01"
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Demander le retrait
      </Button>
    </form>
  )
}