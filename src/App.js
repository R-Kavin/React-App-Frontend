import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Doctors from './components/Doctors';
import Appoinment from './components/Appoinment';
import Onedoc from './components/Onedoc';
import Doclogin from './components/Doclogin';
import Details from './components/Details';
import Patientregister from './components/Patientregister';


function App() {
  return (
    <div className="App">
      <Header/>
      
     <Routes> 
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/doctorslist' element={<Doctors></Doctors>}></Route>
      <Route path='/onedoc/:docId' element={<Appoinment></Appoinment>}></Route>
      <Route path='/doclogin' element={<Doclogin></Doclogin>}></Route>
      <Route path='/patientdetails' element={<Details></Details>}></Route>
      <Route path='/patientregister' element={<Patientregister></Patientregister>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
