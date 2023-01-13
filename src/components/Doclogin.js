import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import image1 from '../Media/image-1.jpg'

const Doclogin = () => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate();
    const login=()=>{
        const data = { email: email, password:password}
        axios.post("http://localhost:5002/doctor/login",data).then((response)=>{
            console.log(data)
            if (response.data.error) {
                alert(response.data.error);
              } else {
                sessionStorage.setItem("accessToken", response.data.accessToken);
                navigate('/patientdetails',{state: {id: response.data.userDetails.id ,name: response.data.userDetails.name, domain:response.data.userDetails.domain}})
                console.log(response.data)
              }
        })
    }
  return (
    <div style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:810,width:3800
    }}>

    <div className='loginhome login'>
      <div className='loginform'>
      {/* <img className='login-image' src={image1} alt="horse" /> */}
      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(event)=>{setEmail(event.target.value)}} />
      </div>
      <div className='loginform'>
      <TextField id="outlined-basic" label="Password" variant="outlined" type='password' onChange={(event)=>{setPassword(event.target.value)}} />
      </div>
      <div>
      <Button variant="contained" type="submit" onClick={login}>Login</Button>
      </div>
    </div>
    </div>
  )
}

export default Doclogin
