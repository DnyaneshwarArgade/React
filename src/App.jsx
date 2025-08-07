import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Create from './Screens/Create';
import FetchAPI from './Screens/FetchAPI';
import DataDelete from './Screens/DataDelete';
import Updata from './Screens/Updata'


function App() {
  return (
    
     <BrowserRouter>
     {/* <Home /> */}
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Create' element={<Create/>} />
          <Route path='/FetchAPI' element={<FetchAPI/>} />
          <Route path='/DataDelete' element={<DataDelete />} />
          <Route path='/Updata' element={<Updata/>} />
        </Routes>
     </BrowserRouter>
  
  )
}

export default App;


