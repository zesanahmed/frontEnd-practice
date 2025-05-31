import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full h-full max-w-[1230px] mx-auto flex items-center justify-between px-5 bg-slate-400 text-white">
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
