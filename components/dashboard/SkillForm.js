// components/SkillForm.js
'use client';

import { useState } from 'react';
import { addSkill } from '@/services/skill'; // Service for skill API call
import { motion } from 'framer-motion';

export default function SkillForm({ skill }) {
  const [newSkill, setNewSkill] = useState(skill || { name: '', category: '', proficiency: 80, image: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSkill(newSkill); // Call the backend to add/update skill
    // Handle post-submit actions (e.g., redirect or success message)
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Add Skill</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Skill Name"
        />
        <input
          type="text"
          value={newSkill.category}
          onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Category (Frontend, Backend, Tool)"
        />
        <input
          type="number"
          value={newSkill.proficiency}
          onChange={(e) => setNewSkill({ ...newSkill, proficiency: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Proficiency (0 to 100)"
        />
        <input
          type="file"
          onChange={(e) => setNewSkill({ ...newSkill, image: e.target.files[0] })}
          className="p-2 border rounded-lg w-full"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
          Save Skill
        </button>
      </div>
    </motion.form>
  );
}
