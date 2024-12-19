import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const bets = [
  {
    id: "1",
    date: "14/04/2024",
    match: "PSG vs Marseille",
    bet: "PSG Gagnant",
    amount: "50€",
    status: "Gagné",
    gain: "+150€"
  },
  {
    id: "2", 
    date: "13/04/2024",
    match: "Lyon vs Monaco",
    bet: "Plus de 2.5 buts",
    amount: "30€", 
    status: "Perdu",
    gain: "-30€"
  },
]

export function BettingHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption>Historique de vos paris</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Match</TableHead>
            <TableHead>Pari</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Gain/Perte</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bets.map((bet) => (
            <TableRow key={bet.id}>
              <TableCell>{bet.date}</TableCell>
              <TableCell>{bet.match}</TableCell>
              <TableCell>{bet.bet}</TableCell>
              <TableCell>{bet.amount}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  bet.status === "Gagné" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {bet.status}
                </span>
              </TableCell>
              <TableCell className={`text-right ${
                bet.gain.startsWith("+") 
                  ? "text-green-600" 
                  : "text-red-600"
              }`}>
                {bet.gain}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}