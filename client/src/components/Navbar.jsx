import { NavLink } from "react-router-dom";
import logo from "../assets/medhub.png";
import profile from "../assets/placeholder.jpg";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-1 mb-6 shadow-md">
        <NavLink to="">
          <img alt="MedHub logo" className="h-16 inline m-2" src={logo}></img>
        </NavLink>

        <div className="">
        <NavLink className="m-2 mr-4" to="patients">
          <button className=" hover:bg-gray-100 py-2 px-4 border-gray-100 border-2 rounded-lg">Patient List</button>
        </NavLink>
        <NavLink className="m-2 ml-0 mr-4" to="appointments">
          <button className=" hover:bg-gray-100 py-2 px-4 border-gray-100 border-2 rounded-lg">Appointments</button>
        </NavLink>
        <NavLink className="" to="/account">
          <img className="rounded-full h-12 inline m-2 hover:ring-2 hover:ring-offset-2 hover:ring-blue-100 transition ease-in-out duration-100" src={profile}></img>
        </NavLink>
        </div>
      </nav>
    </div>
  );
}