import React from 'react';
import { ExternalLink, Github, Layout, Code2 } from 'lucide-react';

function Projects() {
  const projects = [
    {
      name: 'DCInfrasight',
      description: 'A full-stack solution for infrastructure management.',
      type: 'Full Stack',
      tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      name: 'THS_X Twitter App',
      description: 'A modern Twitter-like app built for efficient task-based social interactions.',
      type: 'Full Stack',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      name: 'GitHub Search Engine',
      description: 'Frontend project to search and filter GitHub repositories.',
      type: 'Frontend',
      tags: ['React', 'GitHub API', 'Tailwind CSS'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      name: 'Ecom',
      description: 'Frontend application for online shopping.',
      type: 'Frontend',
      tags: ['React', 'Express', 'PostgreSQL', 'Redis'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  const getProjectIcon = (type) => {
    switch (type) {
      case 'Full Stack':
        return <Layout className="w-5 h-5" />;
      case 'Frontend':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          {/* <div className="flex items-center gap-4 mb-2">
            <div className="h-px bg-blue-600 w-8"></div>
            <span className="text-blue-600 font-medium">Latest Work</span>
          </div> */}
          <h2 className="text-4xl text-center font-bold text-gray-900">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 "
            >
              {/* Project Preview Area */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <img 
                  src={`/api/placeholder/400/320`}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                    {getProjectIcon(project.type)}
                  </span>
                  <span className="text-sm font-medium text-blue-600">{project.type}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300"></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;