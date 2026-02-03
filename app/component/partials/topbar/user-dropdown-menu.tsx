import { ReactNode } from 'react';
import Link from 'next/link';
import {
  BetweenHorizontalStart,
  Coffee,
  CreditCard,
  FileText,
  Moon,
  Settings,
  Shield,
  User,
  UserCircle,
  Users,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';

export function UserDropdownMenu({ trigger }: { trigger: ReactNode }) {
  const { theme, setTheme } = useTheme();
  const userName = 'Guest';
  const userEmail = 'guest@example.com';

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" side="bottom" align="end">
        {/* Header */}
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <img
              className="w-9 h-9 rounded-full border border-border"
              src={'/media/avatars/300-2.png'}
              alt="User avatar"
            />
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-sm text-mono hover:text-primary font-semibold"
              >
                {userName}
              </Link>
              <Link
                href="mailto:c.fisher@gmail.com"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                {userEmail}
              </Link>
            </div>
          </div>
       
        </div>

        <DropdownMenuSeparator />

        {/* Menu Items */}
    
        <DropdownMenuItem asChild>
          <Link href="/" className="flex items-center gap-2">
            <User />
            My Profile
          </Link>
        </DropdownMenuItem>
       
        <DropdownMenuItem asChild>
          <Link href="/" className="flex items-center gap-2">
            <CreditCard />
            Billing
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/" className="flex items-center gap-2">
            <Shield />
            Change Password
          </Link>
        </DropdownMenuItem>

  

        {/* Footer */}
        <DropdownMenuItem
          className="flex items-center gap-2"
          onSelect={(event) => event.preventDefault()}
        >
          <Moon />
          <div className="flex items-center gap-2 justify-between grow">
            Dark Mode
            <Switch
              size="sm"
              checked={theme === 'dark'}
              onCheckedChange={handleThemeToggle}
            />
          </div>
        </DropdownMenuItem>
        <div className="p-2 mt-1">
          <Button variant="outline" size="sm" className="w-full">
            Sign out
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
