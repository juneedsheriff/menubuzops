'use client';

import { useSettings } from '@/providers/settings-provider';
import { Demo1LightSidebarPage } from './components/demo1';
 
export default function Page() {
  const { settings } = useSettings();

  if (settings?.layout === 'demo') {
    return <Demo1LightSidebarPage />;
  } 
}
