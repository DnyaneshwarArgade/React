import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Gallery from './Screens/Gallery';
import User from './Screens/User';
import FetchAPI from './Screens/FetchAPI';
import Postspage from './Screens/Postspage'
import Create from './Screens/Create'
import DataDelete from './Screens/DataDelete';
import Updata from './Screens/Updata';

function App() {
  return (
    <Router>
      <Home />  {/* Always visible navbar from Home.jsx */}
      
      <Routes>
        <Route path='/' />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} /> 
        <Route path='/user' element={<User />} />
        <Route path='/fetchapi' element={ <FetchAPI/> } />
        <Route path='Postspage' element={ <Postspage /> } />
        <Route path='/Create' element={ <Create/> } />
        <Route path='/DataDelete' element={< DataDelete/>} />
        <Route path='/Updata' element={ <Updata/> } />
      </Routes>
    </Router>
    
  );
}

export default App;
