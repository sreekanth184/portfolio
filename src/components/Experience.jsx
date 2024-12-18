import React from 'react';
import { BriefcaseIcon, CalendarIcon, ArrowRightIcon } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      title: 'Analyst II Infrastructure Services',
      company: 'DXC Technology',
      duration: 'June 2022 – Present',
      responsibilities: [
        'Developed dynamic, scalable web applications using React.js, Node.js, Express.js, and MongoDB, delivering seamless full-stack solutions.',
        'Optimized performance with lazy loading, code splitting, and efficient database queries, reducing application load times by 40%.',
        'Implemented and integrated RESTful APIs, enabling secure and efficient data exchange between client and server.',
        'Designed responsive, intuitive user interfaces using Tailwind CSS and modern UI/UX principles, enhancing user engagement and accessibility.',
        'Collaborated in Agile teams, participating in sprint planning, code reviews, and version control using Git.',
        'Utilized Docker and Jenkins for building and deploying containerized applications.',
      ],
      skills: ['JavaScript','React.js', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'Git', 'REST APIs', 'Tailwind CSS']
    },
    {
      title: 'Intern',
      company: 'DXC Technology',
      duration: 'Feb 2022 – June 2022',
      responsibilities: [
        'Created responsive web pages using HTML, CSS, and JavaScript during a hands-on internship.',
        'Gained foundational knowledge in full-stack development by contributing to real-world projects.',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
  ];

  return (
    <section id="experience" className="py-24 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          {/* <div className="flex items-center gap-4 mb-2">
            <div className="h-px bg-blue-600 w-8"></div>
            <span className="text-blue-600 font-medium">Career Path</span>
          </div> */}
          <h2 className="text-4xl text-center font-bold text-gray-900">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className=""></div>
              
              <div className="relative bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <BriefcaseIcon className="w-5 h-5 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <ArrowRightIcon className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-gray-300">|</span>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Contributions</h4>
                    <ul className="grid gap-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex group/item">
                          <div className="mr-4 mt-1.5">
                            <div className="h-2 w-2 rounded-full bg-blue-600 group-hover/item:scale-125 transition-transform"></div>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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