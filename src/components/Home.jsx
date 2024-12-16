import React from 'react';
import profile from '../assets/images/profile.jpg';

function Home() {
  return (
    <div id="home" className="bg-white text-gray-800 h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold animate-bounce">Sreekanth Reddy</h1>
      <p className="mt-4 text-xl font-light">
        Full Stack Developer with 2.5+ years of experience in React.js, Node.js, and cloud technologies, delivering scalable and efficient solutions.
      </p>
      <img
        src={profile}
        alt="Profile"
        className="rounded-full w-40 h-40 border-4 border-teal-500 mt-6 shadow-lg"
      />
    </div>
  );
}

export default Home;