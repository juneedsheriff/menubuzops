'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronFirst } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function SidebarHeader() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setIsCollapsed(document.body.classList.contains('sidebar-collapse'));
  }, []);

  const handleToggleClick = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      const bodyClass = document.body.classList;
      if (next) {
        bodyClass.add('sidebar-collapse');
      } else {
        bodyClass.remove('sidebar-collapse');
      }
      return next;
    });
  };

  return (
    <div className="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0">
      <Link href="/">
        <div className="dark:hidden">
          <img
            src={toAbsoluteUrl('/media/app/default-logo.png')}
            className="default-logo h-[32px] max-w-none"
            alt="Default Logo"
          />
          <img
            src={toAbsoluteUrl('/media/app/mini-logo.png')}
            className="small-logo h-[32px] max-w-none"
            alt="Mini Logo"
          />
        </div>
        <div className="hidden dark:block">
          <img
            src={toAbsoluteUrl('/media/app/default-logo-dark.png')}
            className="default-logo h-[32px] max-w-none"
            alt="Default Dark Logo"
          />
          <img
            src={toAbsoluteUrl('/media/app/mini-logo.png')}
            className="small-logo h-[32px] max-w-none"
            alt="Mini Logo"
          />
        </div>
      </Link>
      <Button
        onClick={handleToggleClick}
        size="sm"
        mode="icon"
        variant="outline"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className={cn(
          'size-7 absolute start-full top-2/4 rtl:translate-x-2/4 -translate-x-2/4 -translate-y-2/4',
          isCollapsed ? 'ltr:rotate-180' : 'rtl:rotate-180',
        )}
      >
        <ChevronFirst className="size-4!" />
      </Button>
    </div>
  );
}
