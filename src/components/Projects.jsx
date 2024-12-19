import React from 'react';
import { ExternalLink, Github, Layout, Code2 } from 'lucide-react';
import github from '../assets/images/Github.png'
import dcinfrasight from '../assets/images/Dcinfrasight.png'
import ecom from '../assets/images/Ecom.png'
import ths from '../assets/images/Ths.png'

function Projects() {
  const projects = [
    {
      name: 'DCInfrasight',
      description: 'A full-stack solution for infrastructure management.',
      type: 'Full Stack',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io','Express.js', 'AWS'],
      image: dcinfrasight,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      name: 'THS_X Twitter App',
      description: 'A modern Twitter-like app built for efficient task-based social interactions.',
      type: 'Full Stack',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: ths,
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
      image: github,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      name: 'Ecom',
      description: 'Frontend application for online shopping.',
      type: 'Frontend',
      tags: ['JavaScript', 'React.js', 'Context API', 'Tailwind CSS'],
      image: ecom,
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
    <section id="projects" className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Project Preview Area */}
              <div className="sm-lg:h-44 md:h-56 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full  md:object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 bg-orange-100 text-orange-500 rounded-md">
                    {getProjectIcon(project.type)}
                  </span>
                  <span className="text-sm font-medium text-orange-500">{project.type}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-gray-600 text-sm rounded-full border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
