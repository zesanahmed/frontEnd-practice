import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-16 fixed z-[999] w-full bg-white">
      <nav className="w-full h-full max-w-[1230px] mx-auto flex items-center justify-between px-5 text-dark-slate">
        <span className="text-3xl font-semibold">Kids paradise</span>
        <ul className="space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>

          <NavLink to="/login">Login</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
