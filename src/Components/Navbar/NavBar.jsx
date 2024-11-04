import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const NavBar = () => {
  const location = useLocation();
  const isAbsolute = location.pathname === '/statistics' || location.pathname === '/dashboard';

  return (
    <div className="relative w-full">
      <div className={`navbar w-10/12 mx-auto my-10 flex items-center ${isAbsolute ? 'relative   text-black' : 'absolute top-0 left-0 right-0'} justify-between z-10`}>
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'underline ]' : '')}>Home</NavLink></li>
              <li><NavLink to="/statistics" className={({ isActive }) => (isActive ? 'underline' : '')}>Statistics</NavLink></li>
              <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'underline' : '')}>Dashboard</NavLink></li>
            </ul>
          </div>
          <NavLink to="/" className={`btn btn-ghost text-4xl  font-bold ${ isAbsolute ? ' text-black' : 'text-white' }` }>Gadget Heaven</NavLink>
        </div>

        <div className={`flex-grow hidden lg:flex justify-center  ${ isAbsolute ? ' text-black' : 'text-white' }` } >
          <ul className="menu text-xl menu-horizontal px-1 space-x-4">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'underline text-White ' : '')}>Home</NavLink></li>
            <li><NavLink to="/statistics" className={({ isActive }) => (isActive ? 'underline s' : '')}>Statistics</NavLink></li>
            <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'underline tex-[#a342f3]' : '')}>Dashboard</NavLink></li>
          </ul>
        </div>

        <div className="flex gap-5">
          <NavLink to="/cart" className= {` {bg-white p-2 text-3xl rounded-full ${ isAbsolute ? ' border-2 p-2' : 'text-black bg-white'} `}><IoCartOutline />
          </NavLink>
          <NavLink to="/contact" className={` {bg-white p-3 text-2xl rounded-full ${ isAbsolute ? ' border-2 p-2' : 'text-black bg-white'}`}><FaRegHeart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
