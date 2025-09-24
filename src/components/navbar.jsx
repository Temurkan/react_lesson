import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between px-6 py-3 items-center'>
        <Link to='/' className='text-2xl font-mono'>
          live<span className='text-cyan-300 m-0'>.</span>
        </Link>
        <div className='flex gap-5'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? "border-b-2 border-cyan-300" : "border-b-0"
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? "border-b-2 border-cyan-300" : "border-b-0"
            }
          >
            About
          </NavLink>
          <NavLink
            to='/services'
            className={({ isActive }) =>
              isActive ? "border-b-2 border-cyan-300" : "border-b-0"
            }
          >
            Services
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? "border-b-2 border-cyan-300" : "border-b-0"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
