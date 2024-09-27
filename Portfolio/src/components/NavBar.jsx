import React from 'react';
import logo from "../assets/sk-logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const NavBar = () => {
  return (
    <div>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <img className='mx-10 w-10' src={logo} style={{ height: "60px", width: "100px" }} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/sushant-kumar-b425071b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/susshhiiiii" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/sushant.kumar___/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://leetcode.com/u/susshhiiiii/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
          <a href="https://www.codechef.com/users/susshhiiiii" target="_blank" rel="noopener noreferrer">
            <SiCodechef />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
