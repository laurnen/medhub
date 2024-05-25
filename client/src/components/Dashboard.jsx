import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="w-full p-0 h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Dashboard