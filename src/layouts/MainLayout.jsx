import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (

    <div>

      <Navbar />
      <Outlet />
      <ToastContainer />
      
    </div>

  )
}

export default MainLayout