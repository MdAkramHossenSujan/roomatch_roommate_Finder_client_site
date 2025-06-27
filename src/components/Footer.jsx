import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import logo from '../assets/rooms/roommates.png'
const Footer = () => {
  return (
    <footer className="footer  sm:footer-horizontal dark:bg-neutral-900 bg-neutral-700 text-neutral-content grid-rows-2 p-10">
      <nav className="flex flex-col items-start gap-2">
        <img
          src={logo}
          className="w-16 h-auto md:w-20 lg:w-24"
        />
        <h6 className="footer-title">Roommate Services</h6>
        <a className="link link-hover">Find Roommate</a>
        <a className="link link-hover">Roommate Matching</a>
        <a className="link link-hover">Security & Verification</a>
        <a className="link link-hover">Rental Assistance</a>
      </nav>


      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center gap-2">
          <FaTwitter /> Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center gap-2">
          <FaInstagram /> Instagram
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center gap-2">
          <FaFacebook /> Facebook
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center gap-2">
          <FaGithub /> GitHub
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Explore</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Enterprise</a>
        <a className="link link-hover">Security</a>
        <a className="link link-hover">Pricing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Apps</h6>
        <a className="link link-hover">Mac</a>
        <a className="link link-hover">Windows</a>
        <a className="link link-hover">iPhone</a>
        <a className="link link-hover">Android</a>
      </nav>
    </footer>
  );
};

export default Footer;