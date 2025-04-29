'use client'; // Add this since we're using state

import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/Sidebar';
import DashboardNavbar from '@/components/dashboard/Navbar';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Navbar with toggle button */}
      <div className="md:hidden">
        <DashboardNavbar 
          isMobile={true} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        />
      </div>
      
      {/* Mobile Sidebar (conditionally rendered) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="relative flex flex-col w-64 h-full bg-white">
            <DashboardSidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>
      
      <div className="flex-1 flex flex-col">
        {/* Desktop Navbar
        <div className="hidden md:block">
          <DashboardNavbar />
        </div> */}
        
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}