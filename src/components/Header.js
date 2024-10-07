import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../CSS/Header.css";
import { FaBars, FaSearch } from 'react-icons/fa';
import Loader from './Loader';


function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const searchRef = useRef(null);

  const location = useLocation(); // Access current location for routing

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Handle search bar close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll event to change header padding or background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show loader on page load and on route changes
  useEffect(() => {
    // Show the loader when the route changes or the component first mounts
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false); // Hide the loader after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location]);

  // Determine which links to show based on the current route
  const showLimitedLinks = location.pathname === '/AboutUs' || location.pathname === '/Contact';

  return (
    <>
      {loading && <Loader />} {/* Show loader only when loading is true */}
      {!loading && (
        <section
          id="section_1"
          className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-200' : 'py-2 bg-white'}`}
        >
          <div className="nav py-30">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-2 mr-4 ml-4">
                {/* Logo */}
                <div className="logo-image w-1/6">
                  <NavLink to="/">
                    <img
                      src="./Assets/Imgs/template-example-08.jpg"
                      alt="Logo"
                      className="w-80 h-auto outline-none rounded-md"
                    />
                  </NavLink>
                </div>

                {/* Navbar */}
                <div className="main_bar flex items-center">
                  <nav className="nav-con mr-5">
                    <ul
                      className={`nav-links flex-col fixed bg-white w-full right-0 top-16 transition-transform duration-300 ease-in-out ${isMenuActive ? 'translate-x-0' : 'translate-x-full'
                        } md:relative md:flex md:flex-row md:space-x-4 md:translate-x-0 md:top-0 md:bg-transparent`}
                    >
                      <li>
                        <NavLink to="/" activeClassName="text-blue-500" exact>
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/AboutUs" activeClassName="text-blue-500">
                          About
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/services" activeClassName="text-blue-500">
                          Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/portfolio" activeClassName="text-blue-500">
                          Portfolio
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Contact" activeClassName="text-blue-500">
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </nav>

                  {/* Search Bar with Icon */}
                  <div className="search d-flex align-items-center relative left-0" ref={searchRef}>
                    <FaSearch className="mr-2 cursor-pointer" onClick={toggleSearch} />
                    <input
                      type="text"
                      className={`search-f transition-all duration-100 ease-in-out absolute right-0 mt-3 transform ${isSearchVisible ? 'w-80 opacity-100' : 'w-0 opacity-0'
                        } bg-gray-200 rounded-lg py-2 px-4 outline-none`}
                      placeholder="Search..."
                    />
                  </div>
                </div>

                <div>
                  <NavLink to={"/Login"} className={"font-bold"}>
                   Logout
                  </NavLink>
                </div>

                {/* Hamburger Icon */}
                <div
                  id={'ham-burger'}
                  className="hamburger cursor-pointer p-2 hover:bg-gray-200 rounded-full"
                  onClick={toggleMenu}
                >
                  <FaBars size={17} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Header;
