import React from 'react';
import { Building2, Calendar, CircleDot } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'Analyst II Infrastructure Services',
      company: 'DXC Technology',
      duration: 'June 2022 – Present',
      responsibilities: [
        'Addressed and resolved abends in batch jobs (daily, weekly, monthly), ensuring timely processing and minimal downtime.',
        'Optimized system performance by monitoring CPU usage and streamlining batch job execution.',
        'Contributed to converting Excel-based systems into real-time dashboards using WebSockets and React, improving data visualization.'], 
      skills: [
        'JCL','Mainframe','JavaScript', 'React.js', 'WebSockets'
      ],
    },
    {
      title: 'Intern',
      company: 'DXC Technology',
      duration: 'Feb 2022 – June 2022',
      responsibilities: [
        'Trained in mainframe engineering, including batch processing, resolving abends, and system performance optimization.',
        'Gained foundational knowledge in full-stack development by contributing to real-world projects.'
      ],
      skills: [
         'Mainframe'
      ],
    },
    {
      title: 'Full Stack MERN Bootcamp',
      company: 'The Hacking School',
      duration: 'June 2024 – Present',
      responsibilities: [
        'Built responsive web applications using React, Tailwind CSS, and JavaScript for the frontend.',
        'Developed RESTful APIs using Node.js and Express.js for backend services.',
        'Managed MongoDB databases for efficient data storage and performance optimization.',
        'Improved application performance through lazy loading, code splitting, and caching, reducing load times by 30%.',
        'Implemented secure authentication mechanisms using JWT and bcrypt to ensure data security.',
        'Utilized Docker and Jenkins for building and deploying containerized applications.'
      ],
      skills: [
        'React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Docker', 'Jenkins'
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4">
            Professional <span className="text-orange-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className=" rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="border-b-2 border-orange-500/20 pb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-orange-500" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600">
                        <CircleDot className="w-3 h-3 mt-1 flex-shrink-0 text-orange-500" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm bg-white border border-orange-500/20 text-gray-700 hover:bg-orange-50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
