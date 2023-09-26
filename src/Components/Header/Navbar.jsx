import { NavLink } from "react-router-dom";
import './nav.css'

const Navbar = () => {
  const link = (<>
  <NavLink to='/home'>Home</NavLink>
  <NavLink to='/donation'>Donation</NavLink>
  <NavLink to='/statistics'>Statistics</NavLink>
  </>
  )
  const logLink = (<>
            <a className="normal-case text-xl"><img className="w-40" src="https://i.ibb.co/NKb4vNf/Logo.png" alt="" /></a>
  </>)
  return (
    <div>
        <div className="navbar bg-[#9a989800] py-3 md:py-5 justify-between items-center max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                {link}
            </ul>
          </div>
          
          <div className="hidden lg:flex">
          {logLink}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[19px] max-w-6xl gap-8 px-1">
          {link}
          </ul>
        </div>
          <div className="flex w-32 lg:hidden mr-6">
          {logLink}
          </div>
      </div>
    </div>
  );
};

export default Navbar;
