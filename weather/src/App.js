import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Favorites from './components/Favorites';

export default function App() {
  
  return (
    <>
      <Router>
      <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path='/' element={<Weather />} />
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>
      </Router>
    </>
  );
}