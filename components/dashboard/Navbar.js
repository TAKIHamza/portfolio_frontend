'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiBell, FiSearch, FiUser } from 'react-icons/fi';

export default function Navbar({ isMobile = false, onMenuClick }) {
  const [isClient, setIsClient] = useState(false);
  

  useEffect(() => {
    setIsClient(true);
  }, []);

 
  if (!isClient) {
    return null;
  }

  return (
    <motion.div 
      className="bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-10"
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      {isMobile && (
        <button 
          onClick={onMenuClick} // Use the passed handler
          className="p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <FiMenu className="text-xl" />
        </button>
      )}
      <div className="flex items-center space-x-4">
        {!isMobile && (
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 relative rounded-lg hover:bg-gray-100">
          <FiBell className="text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <FiUser />
          </div>
          {!isMobile && (
            <span className="hidden md:inline text-sm font-medium">Admin</span>
          )}
        </div>
        
       
      </div>
    </motion.div>
  );
}