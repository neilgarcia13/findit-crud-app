import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';



const Homepage = () => {
  return (
    <div>

      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />


    </div>
  )
}

export default Homepage