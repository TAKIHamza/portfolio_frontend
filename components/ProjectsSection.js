"use client"
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/projects/`);
        setProjects(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section   className=" min-h-screen px-2">
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
      <section className=" bg-transparent min-h-screen px-2">
        
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
        <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14 pt-3">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:cursor-pointer"
            >
              <div className="flex flex-row justify-center aspect-w-16 aspect-h-12">
                <Image
                  alt={project.title}
                  className="w-32 h-40 transition-transform group-hover:scale-105"
                  height="225"
                  src={project.image || '/next.svg'} // Fallback to next.svg if no image
                  width="400"
                />
              </div>
              <Link href={`/project/${project.id}`}>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm line-clamp-2">{project.description}</p>
                  {project.technologies && (
                    <p className="text-xs mt-2">
                      <span className="font-semibold">Tech:</span> {project.technologies}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}