import React from 'react';

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
    },
    {
      title: 'Intern',
      company: 'DXC Technology',
      duration: 'Feb 2022 – June 2022',
      responsibilities: [
        'Created responsive web pages using HTML, CSS, and JavaScript during a hands-on internship.',
        'Gained foundational knowledge in full-stack development by contributing to real-world projects.',
      ],
    },
  ];

  return (
    <div id="experience" className="bg-white py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-6 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 shadow-md py-6 px-4 rounded-lg text-left">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-600">{exp.company} | {exp.duration}</p>
              <ul className="list-disc list-inside mt-4 text-sm text-gray-800 space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
