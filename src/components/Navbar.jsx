import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaReact, FaNodeJs, FaDatabase, FaHome, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // state for toggling the menu
  const menu = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        
        {/* Hamburger Icon for Mobile View */}
        <div className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </div>

        {/* Menu Links */}
        <ul className={`md:flex md:space-x-6 ${menuOpen ? 'flex flex-col space-y-4 absolute top-16 left-0 w-full bg-white p-4 shadow-lg lg:flex-row lg:static lg:p-0 lg:space-y-0' : 'hidden'}`}>
          {menu.map((list, index) => (
            <li key={index}>
              <Link
                to={list.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-teal-500 flex items-center"
                onClick={() => setMenuOpen(false)} // Close menu after selecting an item
              >
                {list === 'Home' && <FaHome className="mr-2" />}
                {list === 'Contact' && <FaEnvelope className="mr-2" />}
                {list}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
