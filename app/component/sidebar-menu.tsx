'use client';

import { JSX, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { MenuConfig, MenuItem } from '@/config/types';
import { cn } from '@/lib/utils';
import {
  AccordionMenu,
  AccordionMenuClassNames,
  AccordionMenuGroup,
  AccordionMenuItem,
  AccordionMenuLabel,
  AccordionMenuSub,
  AccordionMenuSubContent,
  AccordionMenuSubTrigger,
} from '@/components/ui/accordion-menu';
import { Badge } from '@mantine/core';

export function SidebarMenu() {
  const pathname = usePathname();

  const getItemValue = (
    item: MenuItem,
    index: number,
    level: number,
    scope: string,
  ) => {
    const rawPath = item.path && item.path !== '#' ? item.path : '';
    const safeTitle = (item.title || scope)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');
    return rawPath || `${scope}-${level}-${index}-${safeTitle}`;
  };

  // Memoize matchPath to prevent unnecessary re-renders
  const matchPath = useCallback(
    (path: string): boolean =>
      path === pathname || (path.length > 1 && pathname.startsWith(path)),
    [pathname],
  );

  // Global classNames for consistent styling
  const classNames: AccordionMenuClassNames = {
    root: 'lg:ps-1 space-y-3 text-left',
    group: 'gap-px text-left',
    label:
      'uppercase text-left text-sm font-medium text-muted-foreground/70 pt-2.25 pb-px',
    separator: '',
    item: 'h-8 text-left justify-start text-[14px] hover:bg-transparent text-accent-foreground hover:text-primary data-[selected=true]:text-primary data-[selected=true]:bg-muted data-[selected=true]:font-medium',
    sub: 'text-left',
    subTrigger:
      'h-8 text-left justify-start text-[13px] hover:bg-transparent text-accent-foreground hover:text-primary data-[selected=true]:text-primary data-[selected=true]:bg-muted data-[selected=true]:font-medium',
    subContent: 'py-0 text-left',
    indicator: '',
  };

  const buildMenu = (items: MenuConfig): JSX.Element[] => {
    return items.map((item: MenuItem, index: number) => {
      if (item.heading) {
        return buildMenuHeading(item, index);
      } else if (item.disabled) {
        return buildMenuItemRootDisabled(item, index);
      } else {
        return buildMenuItemRoot(item, index);
      }
    });
  };

  const buildMenuItemRoot = (item: MenuItem, index: number): JSX.Element => {
    const value = getItemValue(item, index, 0, 'root');
    if (item.children) {
      return (
        <AccordionMenuSub key={index} value={value}>
          <AccordionMenuSubTrigger className="text-[14px] font-medium">
            {item.icon && <item.icon data-slot="accordion-menu-icon" />}
            <span
              data-slot="accordion-menu-title"
              className="text-[14px] font-medium"
            >
              {item.title}
            </span>
          </AccordionMenuSubTrigger>
          <AccordionMenuSubContent
            type="single"
            collapsible
            parentValue={value}
            className="ps-6"
          >
            <AccordionMenuGroup>
              {buildMenuItemChildren(item.children, 1)}
            </AccordionMenuGroup>
          </AccordionMenuSubContent>
        </AccordionMenuSub>
      );
    } else {
      return (
        <AccordionMenuItem
          key={index}
          value={value}
          className="text-[14px] font-medium"
        >
          <Link
            href={item.path || '#'}
            className="flex w-full items-center justify-start gap-2 text-left"
          >
            {item.icon && <item.icon data-slot="accordion-menu-icon" />}
            <span
              data-slot="accordion-menu-title"
              className="text-[14px] font-medium"
            >
              {item.title}
            </span>
          </Link>
        </AccordionMenuItem>
      );
    }
  };

  const buildMenuItemRootDisabled = (
    item: MenuItem,
    index: number,
  ): JSX.Element => {
    const value = getItemValue(item, index, 0, 'disabled');
    return (
      <AccordionMenuItem
        key={index}
        value={value}
        className="text-sm font-medium"
      >
        {item.icon && <item.icon data-slot="accordion-menu-icon" />}
        <span data-slot="accordion-menu-title" className="text-[14px]">
          {item.title}
        </span>
        {item.disabled && (
          <Badge variant="secondary" size="sm" className="ms-auto me-[-10px]">
            Soon
          </Badge>
        )}
      </AccordionMenuItem>
    );
  };

  const buildMenuItemChildren = (
    items: MenuConfig,
    level: number = 0,
  ): JSX.Element[] => {
    return items.map((item: MenuItem, index: number) => {
      if (item.disabled) {
        return buildMenuItemChildDisabled(item, index, level);
      } else {
        return buildMenuItemChild(item, index, level);
      }
    });
  };

  const buildMenuItemChild = (
    item: MenuItem,
    index: number,
    level: number = 0,
  ): JSX.Element => {
    const value = getItemValue(item, index, level, 'child');
    if (item.children) {
      return (
        <AccordionMenuSub key={index} value={value}>
          <AccordionMenuSubTrigger className="text-[13px]">
            {item.collapse ? (
              <span className="text-muted-foreground">
                <span className="hidden [[data-state=open]>span>&]:inline">
                  {item.collapseTitle}
                </span>
                <span className="inline [[data-state=open]>span>&]:hidden">
                  {item.expandTitle}
                </span>
              </span>
            ) : (
              item.title
            )}
          </AccordionMenuSubTrigger>
          <AccordionMenuSubContent
            type="single"
            collapsible
            parentValue={value}
            className={cn(
              'ps-4',
              !item.collapse && 'relative',
              !item.collapse && (level > 0 ? '' : ''),
            )}
          >
            <AccordionMenuGroup>
              {buildMenuItemChildren(
                item.children,
                item.collapse ? level : level + 1,
              )}
            </AccordionMenuGroup>
          </AccordionMenuSubContent>
        </AccordionMenuSub>
      );
    } else {
      return (
        <AccordionMenuItem key={index} value={value} className="text-[13px]">
          <Link href={item.path || '#'} className="text-left text-[13px]">
            {item.title}
          </Link>
        </AccordionMenuItem>
      );
    }
  };

  const buildMenuItemChildDisabled = (
    item: MenuItem,
    index: number,
    level: number = 0,
  ): JSX.Element => {
    const value = getItemValue(item, index, level, 'disabled-child');
    return (
      <AccordionMenuItem key={index} value={value} className="text-[13px]">
        <span data-slot="accordion-menu-title">{item.title}</span>
        {item.disabled && (
          <Badge variant="secondary" size="sm" className="ms-auto me-[-10px]">
            Soon
          </Badge>
        )}
      </AccordionMenuItem>
    );
  };

  const buildMenuHeading = (item: MenuItem, index: number): JSX.Element => {
    return <AccordionMenuLabel key={index}>{item.heading}</AccordionMenuLabel>;
  };

  return (
    <div className="buzops-scrollable-y-hover flex grow shrink-0 py-5 px-5 lg:max-h-[calc(100vh-5.5rem)]">
      <AccordionMenu
        selectedValue={pathname}
        matchPath={matchPath}
        type="single"
        collapsible
        classNames={classNames}
      >
        {buildMenu(MENU_SIDEBAR)}
      </AccordionMenu>
    </div>
  );
}
