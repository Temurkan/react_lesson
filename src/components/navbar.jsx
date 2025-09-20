import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between px-6 py-3 items-center'>
        <Link to='/' className='text-2xl font-mono'>
          live<span className='text-cyan-300 m-0'>.</span>
        </Link>
        <div className='flex gap-5'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/services'>Services</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
