import { useNavigate } from 'react-router-dom'
import {
  Cloud,
  ChevronDown,
  LogOut,
  User,
  Wallet,
  Timer,
  Ban,
  CreditCard
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserNav() {
  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Mon Compte</span>
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              john.doe@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate('/profile')}>
            <User className="mr-2 h-4 w-4" />
            <span>Mon espace perso</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/documents')}>
            <Cloud className="mr-2 h-4 w-4" />
            <span>Mes documents</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/deposit')}>
            <Wallet className="mr-2 h-4 w-4" />
            <span>Déposer de l'argent</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/withdrawal')}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Retirer mon argent</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/limits')}>
            <Timer className="mr-2 h-4 w-4" />
            <span>Limites de jeu</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/auto-exclusion')}>
            <Ban className="mr-2 h-4 w-4" />
            <span>Auto-exclusion</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}