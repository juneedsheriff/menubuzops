import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SettingsProvider } from '@/providers/settings-provider';
import { TooltipsProvider } from '@/providers/tooltips-provider';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';
import { I18nProvider } from '@/providers/i18n-provider';
import { ModulesProvider } from '@/providers/modules-provider';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

import '@mantine/core/styles.css';
import '@/css/styles.css';
import '@/components/keenicons/assets/styles.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Metronic',
    default: 'Metronic', // a default is required when creating a template
  }
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'antialiased flex h-full text-base text-foreground bg-background',
          inter.className,
        )}
      >
        <QueryProvider>
          <SettingsProvider>
            <ThemeProvider>
              <MantineProvider>
                <I18nProvider>
                  <TooltipsProvider>
                    <ModulesProvider>
                      <Suspense>{children}</Suspense>
                      <Toaster />
                    </ModulesProvider>
                  </TooltipsProvider>
                </I18nProvider>
              </MantineProvider>
            </ThemeProvider>
          </SettingsProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
