import {
  Activity,
  Calendar,
  CreditCard,
  FileText,
  LayoutGrid,
   Monitor,
  Plug,
  Settings,
  Share2,
   ShoppingCart,
  UserCircle,
  UserPlus,
  Users,
} from 'lucide-react';
import { type MenuConfig } from './types';

const DASHBOARD_ITEMS = [{ title: 'Light Sidebar', path: '/' }];

export const MENU_SIDEBAR: MenuConfig = [
  {
    title: 'Dashboard',
    icon: LayoutGrid,
 
  },
  {
    title: 'Calendar',
    path: '#',
    icon: Calendar,
  },
  {
    title: 'Subscribers',
    path: '#',
    icon: Users,
  },
  {
    title: 'Prospects',
    path: '#',
    icon: UserCircle,
  },
 
 
  {
    title: 'Point of Sales',
    path: '#',
    icon: ShoppingCart,
  },
  {
    title: 'Affiliate Channel',
    path: '#',
    icon: Share2,
  },
  {
    title: 'Business Setup',
    path: '#',
    icon: Settings,
    children: [
      { title: 'Staff', path: '#' },
      { title: 'Membership Types', path: '#' },
      { title: 'Appointment Types', path: '#' },
      { title: 'One-on-One (Pre-set)', path: '#' },
      { title: 'Group Class', path: '#' },
      { title: 'Packages', path: '#' },
      { title: 'Add-Ons', path: '#' },
      { title: 'Coupons', path: '#' },
      { title: 'Forms (PreLaunch)', path: '#' },
      { title: 'Notifications', path: '#' },
      { title: 'Agreements', path: '#' },
      { title: 'Online Go Live', path: '#' },
      { title: 'Business Profile', path: '#' },
      { title: 'Settings', path: '#' },
    ],
  },
  {
    title: 'Reports',
    path: '#',
    icon: FileText,
  },
  {
    title: 'Integrations',
    path: '#',
    icon: Plug,
    children: [
      
      { title: 'Payment Gateway', path: '#' },
      { title: 'Third-party integration', path: '#' },
      { title: 'Check-In System', path: '#' },
      { title: 'Sync Calendars', path: '#' },
    ],
  },

 

];

export const MENU_SIDEBAR_CUSTOM: MenuConfig = MENU_SIDEBAR;

export const MENU_MEGA: MenuConfig = [
  { title: 'Add New Client', path: '#', icon: UserPlus },
  
  { title: 'Live Check-Ins', path: '#', icon: Activity },
  { title: 'Kiosk', path: '#', icon: Monitor },
  { title: 'One Time Charge', path: '#', icon: CreditCard },

];

export const MENU_MEGA_MOBILE: MenuConfig = MENU_MEGA;

 

export const MENU_ROOT: MenuConfig = [
  {
    title: 'Dashboards',
    icon: LayoutGrid,
    rootPath: '/',
    path: '/',
    childrenIndex: 0,
  },
];