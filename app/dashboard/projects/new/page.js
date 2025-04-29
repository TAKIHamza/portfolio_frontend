// dashboard/projects/new/page.js
'use client';

import { useState } from 'react';
import { addProject } from '@/services/project'; // Service for adding project
import { motion } from 'framer-motion';

export default function AddProjectPage() {
  const [project, setProject] = useState({
    title: '',
    description: '',
    technologies: '',
    github_url: '',
    live_url: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject(project);
    // Handle post-submit actions (e.g., redirect or success message)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
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
          placeholder="Description"
        />
        <input
          type="text"
          value={project.technologies}
          onChange={(e) => setProject({ ...project, technologies: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Technologies"
        />
        <input
          type="url"
          value={project.github_url}
          onChange={(e) => setProject({ ...project, github_url: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="GitHub URL"
        />
        <input
          type="url"
          value={project.live_url}
          onChange={(e) => setProject({ ...project, live_url: e.target.value })}
          className="p-2 border rounded-lg w-full"
          placeholder="Live URL"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Add Project
        </button>
      </form>
    </motion.div>
  );
}
