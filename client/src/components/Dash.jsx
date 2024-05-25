import '../assets/css/Dash.css';
import { NavLink } from 'react-router-dom';
import PatientList from './PatientList';
// import Appointments from './Appointments';

export default function Dash() {
    return (
        <div className="grid grid-cols-3 gap-6 m-4">
            <div className="card hover:shadow-lg hover:translate-y-2">
                <h1 className="text-2xl font-bold">Patients</h1>
                <p>View your patients and their information.</p>
                <br />
                <PatientList card={true} />
                <NavLink to="create" className="block px-4 py-2 m-4 ml-0 border-2 border-gray-200 rounded-md hover:bg-gray-100">
                    New Patient
                </NavLink>
                <NavLink to="patients" className="block px-4 py-2 m-4 ml-0 border-2 border-gray-200 rounded-md hover:bg-gray-100">
                    View All
                </NavLink>
                
            </div>
            {/* <div className="card hover:shadow-lg hover:translate-y-2">
                <h1 className="text-2xl font-bold">Appointments</h1>
                <p>View and edit upcoming appointments.</p>
                <br />
                <Appointments card={true} />
                <NavLink to="appointments" className="block px-4 py-2 m-4 ml-0 border-2 border-gray-200 rounded-md hover:bg-gray-100">
                    View All
                </NavLink>
                <NavLink className="block px-4 py-2 m-4 ml-0 border-2 border-gray-200 rounded-md hover:bg-gray-100">
                    New Appointment
                </NavLink>
            </div> */}
        </div>
    );
}