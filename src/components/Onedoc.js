import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'


const Onedoc = () => {
    const location = useLocation();
  console.log(location.state.name)
const [appointments, setAppointments] = useState()
  return (
    <div>
      
    </div>
  )
}

export default Onedoc
