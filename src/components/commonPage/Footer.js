import React from 'react';
import './Footer.css';
import footerData from './FooterData';
import youtubeIcon from '../images/footer/icons/youtube.png';
import instagramIcon from '../images/footer/icons/ins.png';
import linkedinIcon from '../images/footer/icons/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <footer className="bg-gray-900 text-white ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#24262b] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Subscribe</span> to stay updated on our latest programs
        </h1>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Sign up
          </button>
        </div>
      </div>

      </footer>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              {footerData.company.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>support</h4>
            <ul>
              {footerData.support.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.youtube.com/"  target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="Youtube" /></a>
              <a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;