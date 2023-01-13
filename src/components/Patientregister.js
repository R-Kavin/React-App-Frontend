import React from 'react'
import * as Yup from "yup";
import axios from 'axios'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


const Patientregister = () =>
{
    const navigate = useNavigate();

  const initialValues={
    name:"",
    age:"",
    email:"",
    password:""
}

const validationSchema = Yup.object().shape({
  name:Yup.string().required(),
  age:Yup.string().required(),
  email:Yup.string().required(),
  password:Yup.string().min(3).max(15).required()
});

const onSubmit = (data)=>{
  axios.post("http://localhost:5002/patient",data).then((response)=>{
      console.log("Submitted")
      alert("Successfull Patient details registered!")
      navigate('/');
  })
  // console.log(data)
}

  return (
    <div>
         <div>
      <h1>RegisterPatient</h1>
        <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
              <label>Patient Name: </label>
              <ErrorMessage name="patientName" component="span" />
              <Field id="inputRegisterPatient" name="name"/>

              <label>Age: </label>
              <ErrorMessage name="patientAge" component="span" />
              <Field autocomplete="off" id="inputRegisterPatient" name="age"/>

              {/* <label>Address: </label>
              <ErrorMessage name="patientAddress" component="span" />
              <Field autocomplete="off" id="inputRegisterPatient" name="patientAddress" placeholder="Address"/> */}

              <label>Email: </label>
              <ErrorMessage name="patientEmail" component="span" />
              <Field autocomplete="off" type="email" id="inputRegisterPatient" name="email"/>

              <label>Password: </label>
              <ErrorMessage name="patientPassword" component="span" />
              <Field autocomplete="off" type="password" id="inputRegisterPatient" name="password"/>
              <Button variant="contained" type="submit" onClick={onSubmit}>Login</Button>

              {/* <Button variant="contained" type="submit"> Register</Button>
              <br></br>
              <Button color="secondary" variant="contained" type="reset">Reset</Button> */}
            </Form>
          </Formik>
        </div>
    </div>
    </div>
  )
}

export default Patientregister
