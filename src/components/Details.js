import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

const Details = () => {
    const location = useLocation();
  console.log(location.state.name)
  const [appointments, setAppointments] = useState()
  useEffect(()=>{
    axios.get(`http://localhost:5002/appointment/${location.state.id}`).then((response)=>{
      console.log(response.data)
      setAppointments(response.data)
    })
  },[])
  return (

    <div>
      <div>
        <h1>{location.state.name}</h1>
      </div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>age</th>
          <th>query</th>
          <th>date</th>
          <th>time</th>
        </tr>
      </thead>
      <tbody>
        {
          appointments &&appointments.map((value)=>{
            return(
              <tr>
              <td>{value.apid}</td>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.query}</td>
              <td>{value.date}</td>
              <td>{value.time}</td>
            </tr>
            )
          })
        }
       
      </tbody>
    </Table>
    </div>
  )
}

export default Details
