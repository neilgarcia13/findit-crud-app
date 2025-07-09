import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Card from './components/Card';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {

  return (
    
    <div>

      <Navbar />

      <Hero />

      <HomeCards />

      <JobListings />

      <ViewAllJobs />

    </div>


  )
}

export default App;

