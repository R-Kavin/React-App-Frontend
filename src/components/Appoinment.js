import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useState, useEffect } from 'react'


const Appoinment = () => {
    let { docId } = useParams();
    const [specificDoctor, setSpecificDoctor] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
      axios.get(`http://localhost:5002/doctor/byId/${docId}`).then((response)=>{
          setSpecificDoctor(response.data)
      })
    },[])

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [query, setQuery] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const onSubmit = (data)=>{
      axios.post("http://localhost:5002/appointment",{name: name, age:age,  query:query, mobileno:mobileno,   date:date, time:time ,doctorId:docId }).then((response)=>{
          console.log("Submitted")
          alert("Successfully Appointment Submitted!")
          navigate('/')
        })
    }

  return (
    <div className='specificdocform'>
      <div className='formcontainer'>
     
            <label>name: </label>
            <input type="text" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setName(event.target.value)}}/>
            <label>age: </label>
            <input type="text" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setAge(event.target.value)}}/>
            <label>query: </label>
            <input type="text" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setQuery(event.target.value)}}/>
            <label>mobileno: </label>
            <input type="text" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setMobileno(event.target.value)}}/>
            <label>date: </label>
            <input type="date" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setDate(event.target.value)}}/>
            <label>time: </label>
            <input type="time" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setTime(event.target.value)}}/>
            
            <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>

      </div>
      
    </div>
  )
}

export default Appoinment
