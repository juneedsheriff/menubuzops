'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SidebarHeader } from './sidebar-header';
import { SidebarMenu } from './sidebar-menu';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'sidebar bg-background lg:border-e lg:border-border lg:fixed lg:top-0 lg:bottom-0 lg:z-20 lg:flex flex-col items-stretch shrink-0',
        pathname.includes('dark-sidebar') && 'dark',
      )}
    >
      <SidebarHeader />
      <div className="sidebar-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        <div className="w-(--sidebar-default-width)">
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
}
