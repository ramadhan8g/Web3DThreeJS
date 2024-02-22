import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 bg-slate-400 rounded-lg items-center justify-center flex font-bold shadow-md "
      >
        <p>
          <FaHome />
        </p>
      </NavLink>
      <nav className="flex gap-7 font-medium  text-lg">
        <NavLink to="about" className="  ">About </NavLink>
        <NavLink to="projects">Project </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
