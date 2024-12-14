import React from 'react';
import profile from '../assets/images/profile.jpg';

function Home() {
  return (
    <>
      <div className="grid grid-cols-5  mt-4" id='home'>
        <div className="col-span-3 relative">
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4">
            <h1>Front End Developer</h1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={profile} className="h-full w-full" alt="Profile" />
        </div>
      </div>
    </>
  );
}

export default Home;
