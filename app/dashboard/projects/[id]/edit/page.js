// dashboard/projects/[id]/edit/page.js
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { getProject, updateProject } from '../../../services/project'; // Service to get and update a project

export default function EditProjectPage() {
  const [project, setProject] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchProject() {
      if (id) {
        const projectData = await getProject(id);
        setProject(projectData);
      }
    }
    fetchProject();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProject(id, project);
    router.push('/dashboard/projects'); // Redirect to the project list
  };

  if (!project) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Edit Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Project Title"
        />
        <textarea
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Project Description"
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
