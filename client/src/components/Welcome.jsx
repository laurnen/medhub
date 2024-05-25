import { Link } from 'react-router-dom';
import '../assets/css/Welcome.css';
import arrow from '../assets/arrow-down-339-svgrepo-com.svg';

export default function Welcome() {
    return (
    <div className='overflow-hidden max-h-screen'>
        <h1 className="welcome text-6xl font-extrabold mt-72 text-center text-blue-400">Welcome, Dr.!</h1>
        <Link to="/dash"><img src={arrow} className="arrow scale-5 -mt-36 p-0 opacity-25 display-block mx-auto transition ease-in-out delay-150 hover:translate-y-3 hover:opacity-50" alt="arrow" /></Link>
    </div>
    );
}