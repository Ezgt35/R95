import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const Project: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  liveUrl, 
  repoUrl 
}) => {
  return (
    <div className="group bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1 bg-red-600 text-white text-sm rounded flex items-center hover:bg-red-700 transition-colors duration-300"
              >
                Live Demo
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            )}
            {repoUrl && (
              <a 
                href={repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1 bg-neutral-800 text-white text-sm rounded flex items-center hover:bg-neutral-700 transition-colors duration-300"
              >
                Code
                <Github className="ml-1 h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-neutral-800 dark:text-white mb-2">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A professional portfolio website showcasing my work and skills as a web developer.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'TailwindCSS', 'TypeScript', 'Vite'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Admin dashboard for managing products, orders, and customers for an online store.',
      image: 'https://images.pexels.com/photos/6956503/pexels-photo-6956503.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Weather App',
      description: 'Weather application providing current conditions and forecasts for locations worldwide.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'API', 'CSS', 'HTML'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Application for organizing and tracking personal and team tasks and projects.',
      image: 'https://images.pexels.com/photos/6192336/pexels-photo-6192336.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Firebase', 'TailwindCSS'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Recipe Finder',
      description: 'Web application for discovering and saving recipes based on available ingredients.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'API', 'CSS', 'HTML'],
      liveUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Blog Platform',
      description: 'Full-stack blog platform with user authentication and content management.',
      image: 'https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      repoUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-neutral-800 dark:text-white font-serif">
          <span className="text-red-600">My</span> Projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work and personal projects. Each project represents different 
          skills and technologies I've worked with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;