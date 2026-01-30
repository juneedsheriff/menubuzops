'use client';

import { Demo1Layout } from '../components/layouts/demo1/layout';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Demo1Layout>{children}</Demo1Layout>;
}
