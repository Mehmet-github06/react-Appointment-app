import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helpers/Data";

const Home = () => {
  const [appointments, setAppointment] = useState(appointmentData);

  const handleAdd = (newAppointment) => {
    setAppointment([...appointments, newAppointment]);
  };

  const handleDelete = (id) => {
    const filteredList = appointments.filter((item) => item.id !== id);
    setAppointment(filteredList);
  };

  const handleDobleClick = (id) => {
    const updateList = appointments.map((item) =>
      item.id === id ? { ...item, consulted: !item.consulted } : item
    );
    setAppointment(updateList);
  };

  return (
    <main className="text-center mt-2 justify-content-center m-auto ">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors handleAdd={handleAdd} />
      <AppointmentList
        appointments={appointments}
        handleDelete={handleDelete}
        handleDobleClick={handleDobleClick}
      />
    </main>
  );
};

export default Home;
