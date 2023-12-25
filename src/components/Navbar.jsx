import { NavLink } from "react-router-dom";
import { FaFolder } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="absolute z-10 flex justify-between items-center top-6 px-6 md:px-10  right-0 left-0">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">AF</p>
      </NavLink>
      <nav className="flex items-center py-2 text-sm md:text-lg gap-4 font-medium rounded-lg ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          <div class="group relative flex justify-center items-center text-blue-500 text-sm font-bold">
            <div class="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md"></div>
            <div class="shadow-md flex items-center group-hover:gap-2 bg-white px-3 py-2 rounded-lg cursor-pointer duration-300">
              <FaUser />
              <span class="text-[0px] group-hover:text-sm duration-300">
                About
              </span>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          <div class="group relative flex justify-center items-center text-blue-500 text-sm font-bold">
            <div class="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md"></div>
            <div class="shadow-md flex items-center group-hover:gap-2 bg-white px-3 py-2 rounded-lg cursor-pointer duration-300">
              <FaFolder />
              <span class="text-[0px] group-hover:text-sm duration-300">
                Projects
              </span>
            </div>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
