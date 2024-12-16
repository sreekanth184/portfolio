import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaGitAlt, FaDocker, FaJira } from 'react-icons/fa';

function Skills() {
  const frontend = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-teal-500" /> },
    { name: 'Redux', icon: <FaReact className="text-purple-500" /> },
    { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-indigo-500" /> },
  ];

  const backend = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <FaNodeJs className="text-gray-800" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
  ];

  const database = [
    { name: 'MongoDB', icon: <FaDatabase className="text-green-500" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
  ];

  const tools = [
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Jira', icon: <FaJira className="text-blue-600" /> },
  ];

  return (
    <div id="skills" className="bg-white py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
            {frontend.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-8">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
            {backend.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-8">Database & Cloud</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
            {database.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-8">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                {tool.icon}
                <span className="mt-2">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
