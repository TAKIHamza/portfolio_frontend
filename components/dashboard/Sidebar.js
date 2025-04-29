'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiFolder, 
  FiCode, 
  FiUser, 
  FiMail, 
  FiSettings,
  FiLogOut
} from 'react-icons/fi';
import { logout } from '@/services/auth';




export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    console.log('Logged out');
    logout()
    router.push('/login');
  };
  const navItems = [
    { href: "/dashboard", icon: <FiHome />, label: "Overview" },
    { href: "/dashboard/projects", icon: <FiFolder />, label: "Projects" },
    { href: "/dashboard/skills", icon: <FiCode />, label: "Skills" },
    { href: "/dashboard/profile", icon: <FiUser />, label: "Profile" },
    { href: "/dashboard/contact", icon: <FiMail />, label: "Messages" },
    { href: "/dashboard/settings", icon: <FiSettings />, label: "Settings" },
  ];

  return (
    <motion.div 
      className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col h-screen fixed md:sticky top-0"
      initial={{ x: -300 }} 
      animate={{ x: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 p-2">
        <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${pathname === item.href ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto p-2">
        <button 
        onClick={handleLogout}
        className="flex items-center w-full p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
          <FiLogOut className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </motion.div>
  );
}