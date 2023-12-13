import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import {appointmentData} from "../helpers/Data"

const Home = () => {
 
  const [appointments,setAppointment]=useState(appointmentData)
       
  return (
    <main className="text-center mt-2 justify-content-center m-auto ">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors />
      <AppointmentList appointments={appointments}/>
    </main>
  )
}

export default Home;