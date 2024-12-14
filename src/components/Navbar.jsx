import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    let menu = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];
    
    return (
        <nav className="border max-w-lg mx-auto">
            <ul className="list-none flex justify-between items-center">
                {menu.map((list, index) => (
                    <li key={index}>
                        <Link to={`${list.toLowerCase().replace(/\s+/g, '-')}`} smooth={true} duration={500} offset={-30} className='cursor-pointer'>
                            {list}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
