// dashboard/skills/new/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { createSkill } from '@/services/skill'; // Service to create a new skill

export default function NewSkillPage() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('frontend'); // Default to frontend
  const [proficiency, setProficiency] = useState(80); // Default proficiency

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSkill({ name, category, proficiency });
    window.location.href = '/dashboard/skills'; // Redirect to skills list
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Add New Skill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded-lg w-full"
          placeholder="Skill Name"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg w-full"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="tool">Tool</option>
        </select>
        <input
          type="number"
          value={proficiency}
          onChange={(e) => setProficiency(e.target.value)}
          className="p-2 border rounded-lg w-full"
          placeholder="Proficiency (%)"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Save Skill
        </button>
      </form>
    </motion.div>
  );
}
