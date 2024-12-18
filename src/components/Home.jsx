// Home Component
import React from "react";
import profile from "../assets/images/profile.jpg";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      id="home"
      className="bg-white text-gray-800 h-screen grid grid-cols-1 md:grid-cols-2 items-center px-6"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Hi all, I'm <span className="text-orange-500">Sreekanth Reddy</span>{" "}
          <span>👋</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          A passionate Full Stack Software Developer 🚀 <br />
          Experienced in building Web and Mobile applications using
          <span className="font-semibold"> JavaScript</span>,{" "}
          <span className="font-semibold">ReactJS</span>,{" "}
          <span className="font-semibold">NodeJS</span>, and{" "}
          <span className="font-semibold">React Native</span>, along with other
          cool libraries and frameworks.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-start gap-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-orange-500 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            CONTACT ME
          </Link>
          <a
            href="/assets/sreekanth-FD-Resume.pdf"  // Use relative path directly
            download
            className="bg-white hover:bg-gray-100 text-purple-600 font-semibold px-6 py-3 border border-purple-600 rounded-lg shadow-lg"
          >
            DOWNLOAD MY RESUME
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={profile}
          alt="Profile"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 border-4 border-teal-500 shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
