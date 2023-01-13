import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    
    sessionStorage.removeItem("accessToken")
    navigate('/')
    // setAnchorEl(null);
  };
  return (
    <>
           <Navbar bg="dark" variant="dark">
        <Container >
        
          <Navbar.Brand href="#home">Doctor</Navbar.Brand>
          <Nav className="me-auto" id='navlinks'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/doctorslist">Doctor's List</Nav.Link>
            {!sessionStorage.getItem("accessToken")&&<Nav.Link href="/doclogin">Doctor Login</Nav.Link>}
            {sessionStorage.getItem("accessToken")&&<Nav.Link onClick={handleClose}>Logout</Nav.Link>}
            <Nav.Link href="/patientregister">Patient Register</Nav.Link>
              
              </Nav>

        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
