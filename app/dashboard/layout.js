// app/dashboard/layout.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DashboardShell from '@/components/dashboard/DashboardShell';

export default function DashboardLayout({ children }) {
  const token = cookies().get('auth_token')?.value;

  if (!token) {
    redirect('/login');
  }

  return <DashboardShell>{children}</DashboardShell>;
}
