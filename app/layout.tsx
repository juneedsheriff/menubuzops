import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';
import { ThemeProvider } from '@/providers/theme-provider';
import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

import '@mantine/core/styles.css';
import '@/css/styles.css';
import '@/components/Buzopsicons/assets/styles.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Buzops',
    default: 'Buzops', // a default is required when creating a template
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
        <ThemeProvider>
          <MantineProvider>
            <Suspense>{children}</Suspense>
            <Toaster />
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
