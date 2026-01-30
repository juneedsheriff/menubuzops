import {
  AlertCircle,
  Captions,
  Coffee,
  FileQuestion,
  HelpCircle,
  LayoutGrid,
  Share2,
  Star,
} from 'lucide-react';
import { type MenuConfig } from './types';

const DASHBOARD_ITEMS = [{ title: 'Light Sidebar', path: '/' }];

export const MENU_SIDEBAR: MenuConfig = [
  {
    title: 'Dashboards',
    icon: LayoutGrid,
    children: DASHBOARD_ITEMS,
  },
];

export const MENU_SIDEBAR_CUSTOM: MenuConfig = MENU_SIDEBAR;

export const MENU_SIDEBAR_COMPACT: MenuConfig = [
  {
    title: 'Dashboards',
    icon: LayoutGrid,
    children: DASHBOARD_ITEMS,
  },
];

export const MENU_MEGA: MenuConfig = [{ title: 'Home', path: '/' }];

export const MENU_MEGA_MOBILE: MenuConfig = MENU_MEGA;

export const MENU_HELP: MenuConfig = [
  {
    title: 'Getting Started',
    icon: Coffee,
    path: 'https://Buzopsthemes.com/Buzops/tailwind/docs/getting-started/installation',
  },
  {
    title: 'Support Forum',
    icon: AlertCircle,
    children: [
      {
        title: 'All Questions',
        icon: FileQuestion,
        path: 'https://devs.Buzopsthemes.com',
      },
      {
        title: 'Popular Questions',
        icon: Star,
        path: 'https://devs.Buzopsthemes.com/popular',
      },
      {
        title: 'Ask Question',
        icon: HelpCircle,
        path: 'https://devs.Buzopsthemes.com/question/create',
      },
    ],
  },
  {
    title: 'Licenses & FAQ',
    icon: Captions,
    path: 'https://Buzopsthemes.com/Buzops/tailwind/docs/getting-started/license',
  },
  {
    title: 'Documentation',
    icon: FileQuestion,
    path: 'https://Buzopsthemes.com/Buzops/tailwind/docs',
  },
  { separator: true },
  { title: 'Contact Us', icon: Share2, path: 'https://Buzopsthemes.com/contact' },
];

export const MENU_ROOT: MenuConfig = [
  {
    title: 'Dashboards',
    icon: LayoutGrid,
    rootPath: '/',
    path: '/',
    childrenIndex: 0,
  },
];