import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-light-slate h-screen text-white p-4 sticky top-0 overflow-y-auto">
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-slate p-3 rounded flex items-center hover:bg-dark-slate text-white transition-all gap-2",
              {
                "bg-dark-slate text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-collection"
          className={({ isActive }) =>
            cn(
              "bg-slate p-3 rounded flex items-center hover:bg-dark-slate text-white transition-all gap-2",
              {
                "bg-dark-slate text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Collection</span>
        </NavLink>
        <NavLink
          to="/admin/collection-list"
          className={({ isActive }) =>
            cn(
              "bg-slate p-3 rounded flex items-center hover:bg-dark-slate text-white transition-all gap-2",
              {
                "bg-dark-slate text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Collection List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
