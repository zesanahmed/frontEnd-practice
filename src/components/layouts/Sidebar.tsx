import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-light-slate h-screen text-white p-4 sticky top-0 overflow-y-auto">
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/admin"
          className="bg-slate p-3 rounded hover:bg-dark-slate text-white transition-all"
        >
          Dashboard
        </NavLink>
        <NavLink to="/admin/add-collection">Add Collection</NavLink>
        <NavLink to="/admin/collection-list">Collection List</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
