import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useState, useEffect } from 'react'
import image2 from '../Media/image-2.jpg'

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
        <img src={image2} className='appointmentImage'></img>
      <div className='formcontainer'>
          <div className='form-input'>
          <label>name: </label>
            <input type="text" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setName(event.target.value)}}/>
          </div>

          <div className='form-input'>
          <label>age: </label>
            <input type="text" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setAge(event.target.value)}}/>
          </div>

          <div className='form-input'>
          <label>query: </label>
            <input type="text" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setQuery(event.target.value)}}/>
          </div>

          <div className='form-input'>
          <label>mobileno: </label>
            <input type="text" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setMobileno(event.target.value)}}/>
          </div>
            
          <div className='form-input'>
          <label>date: </label>
            <input type="date" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setDate(event.target.value)}}/>
          </div>

          <div className='form-input'>
          <label>time: </label>
            <input type="time" id='inputAppointment' placeholder="" autoComplete="off" onChange={(event)=>{setTime(event.target.value)}}/>
          </div>

          <div className='form-input'>
          <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
          </div>
      </div>      
   </div>
  )
}

export default Appoinment
