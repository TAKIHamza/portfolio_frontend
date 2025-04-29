'use client';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { FiMeh } from 'react-icons/fi';

export default function SkillsGrid({ skills, filter = 'all' }) {
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  if (filteredSkills.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-full text-center py-12"
      >
        <div className="inline-flex flex-col items-center">
          <FiMeh className="w-12 h-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-500">
            No skills found {filter !== 'all' ? `in ${filter} category` : ''}
          </h3>
          <p className="text-gray-400 mt-2">
            Try selecting a different filter
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSkills.map((skill) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </div>
  );
}