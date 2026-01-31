'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_MEGA } from '@/config/menu.config';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function MegaMenu() {
  const pathname = usePathname();

  const linkClass = `
    text-[13px] font-semibold tracking-tight
    text-muted-foreground
    rounded-full px-3 py-1.5
    hover:text-foreground hover:bg-muted/60
    focus:text-foreground focus:bg-muted/60
    data-[active=true]:text-foreground data-[active=true]:bg-muted
    data-[state=open]:text-foreground data-[state=open]:bg-muted
  `;

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(linkClass, 'flex flex-row items-center gap-2')}
            data-active={
              MENU_MEGA.some((item) =>
                item.path
                  ? item.path === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.path)
                  : false,
              ) || undefined
            }
          >
            Quick Access
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <div className="min-w-[320px] rounded-lg border border-border bg-background p-4 shadow-lg">
             
              <div className="mt-3 grid grid-cols-2 gap-2">
                {MENU_MEGA.map((link) => (
                  <NavigationMenuLink key={link.title} asChild>
                    <Link
                      href={link.path || '#'}
                      className="flex items-center gap-2 rounded-md px-2 py-2 text-[13px] text-foreground hover:bg-muted"
                    >
                      {link.icon && (
                        <link.icon className="size-4 text-muted-foreground" />
                      )}
                      <span className="truncate">{link.title}</span>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
