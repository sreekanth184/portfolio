import React from 'react';

function About() {
  return (
    <div id="about" className=" py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            A software engineer with 2.5 years of experience in building scalable, efficient, and
            user-friendly web applications. Proficient in full-stack development and passionate about
            solving real-world problems through technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  B.Tech in Computer Science
                </li>
                {/* Add more education details if needed */}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Interests</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Web Development
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Frontend & Backend Development
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  DevOps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;