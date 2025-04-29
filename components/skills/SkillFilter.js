'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  FaCode, 
  FaServer, 
  FaTools, 
  FaLayerGroup 
} from 'react-icons/fa';

export default function SkillFilter({ initialFilter, onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    onFilterChange(activeFilter);
  }, [activeFilter, onFilterChange]);

  const filters = [
    { id: 'all', label: 'All', icon: <FaLayerGroup className="mr-2" /> },
    { id: 'frontend', label: 'Frontend', icon: <FaCode className="mr-2" /> },
    { id: 'backend', label: 'Backend', icon: <FaServer className="mr-2" /> },
    { id: 'tool', label: 'Tools', icon: <FaTools className="mr-2" /> }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter.id)}
          className={`flex items-center rounded-full px-4 py-2 text-sm font-medium ${
            activeFilter === filter.id
              ? filter.id === 'all'
                ? 'bg-gray-800 text-white'
                : filter.id === 'frontend'
                ? 'bg-emerald-600 text-white'
                : filter.id === 'backend'
                ? 'bg-purple-600 text-white'
                : 'bg-amber-600 text-white'
              : filter.id === 'all'
              ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              : filter.id === 'frontend'
              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
              : filter.id === 'backend'
              ? 'bg-purple-100 text-purple-800 hover:bg-purple-200'
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          }`}
        >
          {filter.icon}
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
}