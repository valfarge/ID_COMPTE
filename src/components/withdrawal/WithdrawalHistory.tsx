import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type WithdrawalStatus = "En cours" | "Traité" | "Annulé"

interface Withdrawal {
  id: string
  date: string
  amount: number
  status: WithdrawalStatus
  method: string
}

interface WithdrawalHistoryProps {
  withdrawals: Withdrawal[]
  onCancelWithdrawal: (id: string) => void
}

export function WithdrawalHistory({ withdrawals, onCancelWithdrawal }: WithdrawalHistoryProps) {
  const getStatusStyle = (status: WithdrawalStatus) => {
    switch (status) {
      case "En cours":
        return "bg-yellow-100 text-yellow-800"
      case "Traité":
        return "bg-green-100 text-green-800"
      case "Annulé":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historique des retraits</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Historique de vos derniers retraits</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Méthode</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {withdrawals.map((withdrawal) => (
              <TableRow key={withdrawal.id}>
                <TableCell>{withdrawal.date}</TableCell>
                <TableCell>{withdrawal.amount.toFixed(2)}€</TableCell>
                <TableCell>{withdrawal.method}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${getStatusStyle(withdrawal.status)}`}>
                    {withdrawal.status}
                  </span>
                </TableCell>
                <TableCell>
                  {withdrawal.status === "En cours" && (
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onCancelWithdrawal(withdrawal.id)}
                    >
                      Annuler
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}