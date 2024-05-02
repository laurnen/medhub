import Link from 'react-router-dom';

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