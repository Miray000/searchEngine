import React, {useState} from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Search from './Search';
import Home from './components/Home'
import About from './components/About'




function App() {
  const [per, setPer] = useState('')
  return (
    <div className="App">
           <header>
        <ul className='menu'>
            <li className='menu_item'><Link className='lon' to="/home">Home</Link></li>
            <li className='menu_item'><Link className='lon' to="/about">About</Link></li>
            <li className='menu_item'><Link className='lon' to="/photo">Photo</Link></li>
        </ul>
      </header>
      
      <Routes>
          <Route path='/home' element={<Home per={per} setPer={setPer}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/photo' element={<Search per={per} setPer={setPer}/>}/>
        </Routes>
     
      
    </div>
  );
}

export default App;
