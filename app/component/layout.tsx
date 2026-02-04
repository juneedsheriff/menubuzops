'use client';

import { ReactNode, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Footer } from './footer';
import { Header } from './header';
 import { Sidebar } from './sidebar';

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isMobile = useIsMobile();

  useEffect(() => {
    const bodyClass = document.body.classList;

    bodyClass.add('demo1');
    bodyClass.add('sidebar-fixed');
    bodyClass.add('header-fixed');

    const timer = setTimeout(() => {
      bodyClass.add('layout-initialized');
    }, 1000);

    return () => {
      bodyClass.remove('demo1');
      bodyClass.remove('sidebar-fixed');
      bodyClass.remove('header-fixed');
      bodyClass.remove('layout-initialized');
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!isMobile && <Sidebar />}

      <div className="wrapper flex grow flex-col">
        <Header />

        <main className="grow pt-5" role="content">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
