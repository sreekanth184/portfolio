import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaGitAlt, FaDocker, FaJira, FaGithub, FaLinux, FaBootstrap } from 'react-icons/fa';
import { SiNginx } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiJenkins } from "react-icons/si";  // Jenkins icon
import { FaAngular } from 'react-icons/fa';  // Angular icon
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiVercelFill } from "react-icons/ri";

function Skills() {
  const frontend = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'React.js', icon: <FaReact className="text-teal-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
   { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Redux', icon: <FaReact className="text-purple-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-indigo-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Bootstrap', icon: <FaCss3Alt className="text-info text-5xl group-hover:scale-110 transition-transform duration-300" /> },
  ];

  const backend = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Express.js', icon: <FaNodeJs className="text-gray-800 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'MongoDB', icon: <FaDatabase className="text-green-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },

  ];

  const devOps = [
    { name: 'AWS', icon: <FaAws className="text-orange-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Linux', icon: <FaLinux className="text-black text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Nginx', icon: <SiNginx className="text-green-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Jenkins', icon: <SiJenkins className="text-orange-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Vercel', icon: <RiVercelFill className="text-purple-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
  ];

  const tools = [
    { name: 'Jira', icon: <FaJira className="text-blue-600 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
    { name: 'VSCode', icon: <VscVscode className="text-blue-500 text-5xl group-hover:scale-110 transition-transform duration-300" /> },
  ];

  return (
    <div id="skills" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Technical Skills
        </h2>
        
        <div className="grid gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 inline-block pb-2 border-b-2 border-teal-500">
              Frontend Development
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
              {frontend.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  {skill.icon}
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 inline-block pb-2 border-b-2 border-green-500">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {backend.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  {skill.icon}
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 inline-block pb-2 border-b-2 border-blue-500">
              DevOps
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
              {devOps.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  {skill.icon}
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 inline-block pb-2 border-b-2 border-blue-500">
              Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
              {tools.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  {skill.icon}
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
