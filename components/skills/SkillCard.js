'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SkillCard({ skill }) {
  const getCategoryColor = (category) => {
    const baseClasses = "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset";
    console.log(skill.image)
    switch (category) {
      case "frontend":
        return `${baseClasses} bg-emerald-50 text-emerald-700 ring-emerald-600/10`;
      case "backend":
        return `${baseClasses} bg-purple-50 text-purple-700 ring-purple-600/10`;
      case "tool":
        return `${baseClasses} bg-amber-50 text-amber-700 ring-amber-600/10`;
      default:
        return `${baseClasses} bg-gray-50 text-gray-700 ring-gray-600/10`;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-4 pb-0 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-md overflow-hidden border">
          <img  
              src={skill.image || "/placeholder.svg"} 
              alt={skill.name} 
              fill
              sizes="64px"
              className="object-fill p-2" 
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{skill.name}</h3>
            <span className={`mt-1 ${getCategoryColor(skill.category)}`}>
              {skill.category}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mt-2">
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600">Proficiency</span>
            <span className="text-sm font-medium">{skill.proficiency}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${skill.proficiency}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}