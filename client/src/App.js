import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';

import NavBar from './components/NavBar/Navbar.jsx'

import Home from './views/Home.jsx'
import Contact from './views/Contact.jsx'
import WorkTeam from './views/WorkTeam.jsx'


function App() {

  return (
    <div className='App'>

      <NavBar/>

      <Routes>
        <Route exact path='/inicio' element={<Home/>}/>
        <Route exact path='/contacto' element={<Contact/>}/>
        <Route exact path='/equipo' element={<WorkTeam/>}/>
        <Route path="*" element={<Navigate to='/inicio'/>} />
      </Routes>

    </div>
  );
}

export default App;
