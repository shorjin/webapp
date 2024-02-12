import React, { useState } from 'react';
import './NavBar.css'
import CompanyLogo from '../images/nav/company_logo.png';


function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsButtonOpen(!isButtonOpen);
  };

  return (
    // hero section
    <section id="NavBar">
      {/* hero container */}
      <div className=" max-w-6xl mx-auto px-6 py-12">
          {/* menu logo container */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* logo */}
          <a href="/">
          <img src={CompanyLogo} alt="Logo" />
          </a>
          {/* menu */}
          <div className={`hidden md:flex md:space-x-8 ${isMobileMenuOpen ? 'md:hidden' : ''}`}>


            <div className="group">
              <a href="/about">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/news">In the News</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/programs" >Programs</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="/contact">Contact</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="./join-our-team">Join Our Team</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="./donation">Donation</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a
              href="./login"
              className ="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md  hover:bg-black"
              >Login
              </a>

          </div>

        </div>
          {/* hamburger button */}

            <button
              id="menu-btn"
              type="button"
              className={`z-40 block hamburger md:hidden focus:outline-none ${isButtonOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>

        </nav>

        {/* mobile menu */}
        {isMobileMenuOpen && (
      <div className="mobile-menu md:hidden">
        <div className="absolute top-0 bottom-0 left-0 flex  flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
          <a href="/about" className="hover:text-pink-500">About</a>
          <a href="/programs" className="hover:text-pink-500">Programs</a>
          <a href="/contact" className="hover:text-pink-500">Contact</a>
          <a href="./join-our-team" className="hover:text-pink-500">Join Our Team</a>
          <a href="./donation" className="hover:text-pink-500">Donation</a>
          <a href="./login" className="hover:text-pink-500">Login</a>
          </div>
        </div>)}


      </div>
    </section>
  );
}

export default NavBar;