import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = <></>;

  return (
    <div className="navbar bg-base-100 px-0  md:py-5 lg:px-20">
      <div className="md:navbar-start pl-2 md:px-6 lg:px-0 w-full flex justify-between items-center">
        <Link to="/" className=" text-xl font-semibold">
          Doctors Portal
        </Link>

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            className="menu menu-compact bg-white dropdown-content -left-14 mt-3  shadow rounded-box w-32 mr-10"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/signup">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden md:flex md:mr-5 lg:mr-0">
        <ul className="flex gap-2 items-center">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2 hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/appointment"
            >
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/reviews"
            >
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base  px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/contact"
            >
              Contact US
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-accent text-white px-3 py-2 rounded-md"
                  : "text-base px-3 py-2  hover:bg-accent hover:text-white rounded-md duration-100"
              }
              to="/Login"
            >
              Login
            </NavLink>
          </li>
          {/* {user?.email ? (
            <>
              <li>
                <Link
                  className="md:text-base  hover:text-orange duration-100"
                  to="/reviews"
                >
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
                  to="/addservice"
                >
                  Add service
                </Link>
              </li>
              <button
                onClick={handleLogOut}
                className="border-2 border-orange px-4 py-2 text-orange font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <li>
              <Link
                className="md:text-base lg:text-lg font-semibold hover:text-orange duration-100"
                to="/signup"
              >
                Sign up
              </Link>
            </li>
          )} */}
        </ul>
        {/* {user?.photoURL ? (
          <div className="avatar">
            <div className="w-14 rounded-full ml-4">
              <img src={user?.photoURL} alt={user?.name} />
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-12  pl-1 rounded-full ml-4">
              <FaRegUserCircle className="text-3xl mt-[9px]" />
            </div>
          </div>
        )} */}
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default Navbar;

// <div className="navbar bg-base-100">
//   <div className="md:navbar-start w-full flex justify-between items-center">
//     <Link to="/" className="btn btn-ghost normal-case text-xl">
//       daisyUI
//     </Link>

//     <div className="dropdown">
//       <label tabIndex={0} className="btn btn-ghost md:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </label>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//       >
//         <li>
//           <a>Item 1</a>
//         </li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li>
//               <a>Submenu 1</a>
//             </li>
//             <li>
//               <a>Submenu 2</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a>Item 3</a>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div className="navbar-end hidden md:flex ">
//     <ul className="flex gap-6 items-center">
//       <li>
//         <a>Item 1</a>
//       </li>
//       <li>
//         <a>jsds</a>
//       </li>
//       <li>
//         <a>Item 3</a>
//       </li>
//     </ul>
//   </div>
//   {/* <div className="navbar-end">
//           <a className="btn">Button</a>
//         </div> */}
// </div>;
