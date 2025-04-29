'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import { getSkill, updateSkill } from '@/services/skill';

export default function EditSkillPage() {
  const [skill, setSkill] = useState(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    async function fetchSkill() {
      if (id) {
        const skillData = await getSkill(id);
        setSkill(skillData);
      }
    }
    fetchSkill();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateSkill(id, skill);
    router.push('/dashboard/skills');
  };

  if (!skill) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Edit Skill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={skill.name}
          onChange={(e) => setSkill({ ...skill, name: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Skill Name"
        />
        <select
          value={skill.category}
          onChange={(e) => setSkill({ ...skill, category: e.target.value })}
          className="p-2 border rounded-lg w-full"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="tool">Tool</option>
        </select>
        <input
          type="number"
          value={skill.proficiency}
          onChange={(e) => setSkill({ ...skill, proficiency: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Proficiency (%)"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </motion.div>
  );
}
