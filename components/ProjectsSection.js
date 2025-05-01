"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects/`);
        setProjects(response.data);
        
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects");
        setLoading(false);
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen px-2">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 pt-3">
            Projects
          </h2>
          <div className="flex justify-center">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-sky-700 animate-spin absolute"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-transparent min-h-screen px-2">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 pt-3">
            Projects
          </h2>
          <div className="flex justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-transparent min-h-screen px-2">
      <div className="container px-4 md:px-6">
        <motion.h2 
          className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 pt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex flex-row justify-center aspect-w-16 aspect-h-12">
                <Image
                  alt={project.title}
                  className="w-full h-44 p-1 object-cover transition-transform group-hover:scale-105"
                  height="225"
                  src={project.thumbnail}
                  width="500"
                />
              </div>
              <Link href={`/project/${project.id}`}>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <motion.h3 
                    className="text-lg font-bold"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm line-clamp-2"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  {project.technologies && (
                    <motion.p 
                      className="text-xs mt-2"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="font-semibold">Tech:</span> {project.technologies}
                    </motion.p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}