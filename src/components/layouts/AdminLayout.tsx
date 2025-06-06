import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
