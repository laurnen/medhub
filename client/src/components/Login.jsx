import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="h-screen w-full m-0 p-0 bg-slate-300 flex justify-center items-center">
            <div className="bg-white h-48 w-96 p-4 shadow-md rounded-lg flex-col justify-between items-center">
                <h1 className="font-bold text-center text-4xl p-4">I am a...</h1>
                <div className="flex items-center justify-center">
                <Link to="/home" className="bg-slate-500 text-white px-8 py-2 rounded-md m-4 transition-all duration-300 ease-in-out hover:bg-blue-400 transform hover:scale-105">Provider</Link>
                <button className="bg-slate-400 text-slate-300 px-10 py-2 rounded-md m-4" disabled>Patient</button>
                </div>
            </div>
        </div>
    )
}

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Record = (props) => (
//   <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       {props.record.name}
//     </td>
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       {props.record.position}
//     </td>
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       {props.record.level}
//     </td>
//     <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
//       <div className="flex gap-2">
//         <Link
//           className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
//           to={`/edit/${props.record._id}`}
//         >
//           Edit
//         </Link>
//         <button
//           className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
//           color="red"
//           type="button"
//           onClick={() => {
//             props.deleteRecord(props.record._id);
//           }}
//         >
//           Delete
//         </button>
//       </div>
//     </td>
//   </tr>
// );

// export default function RecordList() {
//   const [records, setRecords] = useState([]);

//   // This method fetches the records from the database.
//   useEffect(() => {
//     async function getRecords() {
//       const response = await fetch(`http://localhost:5050/record/`);
//       if (!response.ok) {
//         const message = `An error occurred: ${response.statusText}`;
//         console.error(message);
//         return;
//       }
//       const records = await response.json();
//       setRecords(records);
//     }
//     getRecords();
//     return;
//   }, [records.length]);

//   // This method will delete a record
//   async function deleteRecord(id) {
//     await fetch(`http://localhost:5050/record/${id}`, {
//       method: "DELETE",
//     });
//     const newRecords = records.filter((el) => el._id !== id);
//     setRecords(newRecords);
//   }

//   // This method will map out the records on the table
//   function recordList() {
//     return records.map((record) => {
//       return (
//         <Record
//           record={record}
//           deleteRecord={() => deleteRecord(record._id)}
//           key={record._id}
//         />
//       );
//     });
//   }

//   // This following section will display the table with the records of individuals.
//   return (
//     <>
//       <h3 className="text-lg font-semibold p-4">Employee Records</h3>
//       <div className="border rounded-lg overflow-hidden">
//         <div className="relative w-full overflow-auto">
//           <table className="w-full caption-bottom text-sm">
//             <thead className="[&amp;_tr]:border-b">
//               <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Name
//                 </th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Position
//                 </th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Level
//                 </th>
//                 <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="[&amp;_tr:last-child]:border-0">
//               {recordList()}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }