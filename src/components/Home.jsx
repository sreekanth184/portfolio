import React from "react";
import profile from "../assets/images/profile.jpg";
import { Link } from "react-scroll";
import { ArrowRight, Download } from "lucide-react";

function Home() {
  return (
    <div
      id="home"
      className="bg-white text-gray-800 min-h-screen flex items-center px-4"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4 md:py-0">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border ">
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
            <span className="text-gray-400 text-sm font-medium">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Hi all, I'm <span className="text-orange-500">Sreekanth</span>{" "}
            <span className="wave">👋</span>
          </h1>

          <p className="md:text-lg text-gray-700 leading-relaxed">
            A passionate Full Stack Software Developer 🚀 <br />
            Experienced in building scalable web applications with{" "}
            <span className="font-medium">JavaScript</span>,{" "}
            <span className="font-medium">ReactJS</span>, and{" "}
            <span className="font-medium">NodeJS</span>, delivering high-quality
            solutions with modern frameworks.
          </p>
          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-normal ">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-orange-500 hover:bg-orange-600 inline-flex items-center justify-center text-white text-sm md:text-base px-3 py-1.5 md:px-6 md:py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl gap-2"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/assets/sreekanth-FD-Resume.pdf"
              download
              className="bg-white outline-none hover:bg-gray-50 inline-flex items-center justify-center text-orange-500 border-2 border-orange-500 text-sm md:text-base px-3 py-1.5 md:px-6 md:py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center md:justify-end py-4 md:py-0 px-8">
          <div className="relative group">
            <img
              src={profile}
              alt="Profile"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-orange-500 shadow-2xl shadow-gray-400 transition-shadow duration-300 group-hover:shadow-gray-600"
            />
            {/* Optional: Add a gradient overlay or background element */}
            <div className="absolute -z-10 top-4 right-4 w-full h-full rounded-full bg-orange-200 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
