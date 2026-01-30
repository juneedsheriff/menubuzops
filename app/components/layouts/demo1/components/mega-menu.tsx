'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_MEGA } from '@/config/menu.config';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export function MegaMenu() {
  const pathname = usePathname();

  const linkClass = `
    text-sm text-secondary-foreground font-medium 
    hover:text-primary hover:bg-transparent 
    focus:text-primary focus:bg-transparent 
    data-[active=true]:text-primary data-[active=true]:bg-transparent 
    data-[state=open]:text-primary data-[state=open]:bg-transparent
  `;

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-0">
        {MENU_MEGA.map((item) => {
          if (!item.path) {
            return null;
          }
          const isActive =
            item.path === '/'
              ? pathname === '/'
              : pathname.startsWith(item.path);
          return (
            <NavigationMenuItem key={item.path}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.path}
                  className={cn(linkClass, 'flex items-center gap-2')}
                  data-active={isActive || undefined}
                >
                  {item.icon && <item.icon className="size-4" />}
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
