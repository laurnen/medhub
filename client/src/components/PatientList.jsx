import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Patient = (props) => (

    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted hover:cursor-pointer hover:bg-gray-200"
    onClick={() => props.handleRowClick(`edit/${props.patient._id}`)}>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.patient.lastName}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.patient.firstName}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.patient.dob}
    </td>
    {props.card ? (null) :
    (
        <>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.patient.age}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
          color="red"
          type="button"
          onClick={() => {
            props.deletePatient(props.patient._id);
          }}
        >
          Delete
        </button>
    </td>
    </>
        )}
  </tr>
);


function PatientList({card}) {
    const [patients, setPatients] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getPatients() {
      const response = await fetch(`http://localhost:5050/patient/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const patients = await response.json();
      setPatients(patients);
    }
    getPatients();
    return;
  }, [patients.length]);

  // This method will delete a record
  async function deletePatient(id) {
    await fetch(`http://localhost:5050/patient/${id}`, {
      method: "DELETE",
    });
    const newPatients = patients.filter((el) => el._id !== id);
    setPatients(newPatients);
  }

  const handleRowClick = (url) => {
    window.location.href = url;
  };

  // This method will map out the records on the table
  function patientList() {
    const displayPatients = card ? patients.slice(0, 5) : patients;
    return displayPatients.map((patient) => {
      return (
        <Patient
          patient={patient}
          deletePatient={() => deletePatient(patient._id)}
          key={patient._id}
          card={card}
          handleRowClick={handleRowClick}
        />
      );
    });
  }

  if (!card) {
    return (
    <>
    <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Last Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                First Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                DOB
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Age
                </th>
            </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
            {patientList(card)}
            </tbody>
        </table>
        </div>
    </div>
    <NavLink to="../create" className="block px-4 py-2 m-4 ml-0 border-2 border-gray-200 rounded-md hover:bg-gray-100">
        New Patient
        </NavLink>
    </>
  );
  }
  else {
    return (
        <>
    <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Last Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                First Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                DOB
                </th>
            </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
            {patientList(card)}
            </tbody>
        </table>
        </div>
    </div>
    </>
    );
  }
}


PatientList.propTypes = {
    card: PropTypes.bool.isRequired,
  };
  
  export default PatientList;