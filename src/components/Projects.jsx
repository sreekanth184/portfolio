// Projects Component
import React from 'react';
// import dcInfrasightImg from '../assets/images/dcinfrasight.jpg';
// import githubSearchImg from '../assets/images/githubsearch.jpg';
// import thsAppImg from '../assets/images/thsapp.jpg';
// import twitterAppImg from '../assets/images/twitterapp.jpg';

function Projects() {
  const projects = [
    {
      name: 'DCInfrasight',
      description: 'A full-stack solution for infrastructure management.',
      type: 'Full Stack',
      // image: dcInfrasightImg || 'https://via.placeholder.com/150',
    },
    {
      name: 'GitHub Search Engine',
      description: 'Frontend project to search and filter GitHub repositories.',
      type: 'Frontend',
      // image: githubSearchImg || 'https://via.placeholder.com/150',
    },
    {
      name: 'THs_X App',
      description: 'A complete full-stack application for task management.',
      type: 'Full Stack',
      // image: thsAppImg || 'https://via.placeholder.com/150',
    },
    {
      name: 'THS_X Twitter App',
      description: 'A modern Twitter-like app built for efficient task-based social interactions.',
      type: 'Full Stack',
      // image: twitterAppImg || 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div id="projects" className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md py-6 px-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              {/* <img src={project.image} alt={project.name} className="rounded-md mb-4 w-full h-40 object-cover" /> */}
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <span className="text-xs text-teal-500 mt-2 inline-block">{project.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
