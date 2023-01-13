
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image2 from '../Media/image-2.jpg'

const Doctors = () => {

    const [listOfDoctors, setListOfDoctors] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{      
        axios.get("http://localhost:5002/doctor").then((response)=>{
            setListOfDoctors(response.data)
        })
      },[])

  return (
    <div style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:900,width:1500
    }}>
    
    
    <div>
       {/* <img className='list-image' src={image2} alt="horse" /> */}
      <h1>Doctor's List</h1>
      {listOfDoctors.map((value,key) => {
        return (
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{value.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{value.domain}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" type="submit" onClick={()=>{navigate(`/onedoc/${value.id}`)}}>
        Book Appointment
      </Button>
      </Card.Body>
    </Card>
        )
      }
      )}
      
    </div>
    </div>
  )
}

export default Doctors