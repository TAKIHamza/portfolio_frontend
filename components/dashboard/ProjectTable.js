// components/ProjectTable.js
'use client';

import { motion } from 'framer-motion';
import { deleteProject } from '../services/project'; // Service for deleting project

export default function ProjectTable({ projects }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="overflow-x-auto shadow-md border-b border-gray-200"
    >
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-left">Technologies</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <motion.tr 
              key={project.id}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.3 }}
            >
              <td className="px-6 py-4">{project.title}</td>
              <td className="px-6 py-4">{project.technologies}</td>
              <td className="px-6 py-4">
                <button onClick={() => deleteProject(project.id)} className="text-red-600 hover:text-red-800">
                  Delete
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
