'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { deleteSkill } from '@/services/skill';

export default function SkillList({ skills }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="mb-4">
        <Link href="/dashboard/skills/new">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Add New Skill
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto shadow-md border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <motion.tr
                key={skill.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4">{skill.name}</td>
                <td className="px-6 py-4">{skill.category}</td>
                <td className="px-6 py-4">
                  <Link href={`/dashboard/skills/${skill.id}/edit`}>
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  </Link>
                  <button
                    onClick={() => deleteSkill(skill.id)}
                    className="text-red-600 hover:text-red-800 ml-4"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
