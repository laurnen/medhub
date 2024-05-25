import PropTypes from 'prop-types';

function Appointments({card}) {
    if (card == true) {
        return (
            <div>
            <h1 className="text-2xl font-bold">Appointments</h1>
            <p>View and edit upcoming appointments.</p>
            </div>
        );
    }

    else if (card == false) {
        return (
            <div className="px-6">
            <h1 className="text-2xl font-bold">Appointments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-md p-4 rounded-lg">
                <h2 className="text-lg font-semibold">Appointment 1</h2>
                <p>Date: 10/10/2021</p>
                <p>Time: 2:00 PM</p>
                </div>
            </div>
            </div>
        );
    }
    
}

Appointments.propTypes = {
    card: PropTypes.bool.isRequired,
  };
  
  export default Appointments;