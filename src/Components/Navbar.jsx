import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [height, setHeight] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setHeight(true);
            } else {
                setHeight(false);
            }
        })
    }, []) 

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    const [styleDisplay, setStyleDisplay] = useState({ display: "block" });

    useEffect(() => {
        setTimeout(() => {
            setStyleDisplay({ display: "none" });
        })
    }, [])

    return (
        <div className="navbar" id="nav" style={{height: height ? '60px' : '100px'}}>
        <div className="container">
            <nav>
                <div className="logo">
                    <Link to='/'>
                        Backpacker
                    </Link>
                </div>
                <div className={isActive ? "nav-list fadeIn" : "nav-list fadeOut"} style={{display: isActive ? "block" : styleDisplay}}>
                    <ul>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? "active" : ""}>
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/experience' className={({ isActive }) => isActive ? "active" : ""}>
                                Our experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/destinations' className={({ isActive }) => isActive ? "active" : ""}>
                                Destinations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? "active" : ""}>
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </div>
  
                {/* Hamburger menu */}
  
                <div className="hamburger" onClick={handleToggle}>
                    <button className={isActive ? "opened" : ""} id="hamburger">
                        <svg viewBox="0 0 100 100">
                          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                          <path className="line line2" d="M 20,50 H 80" />
                          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                      </button>
                </div>
            </nav>
        </div>
      </div>
    );
}

export default Navbar;