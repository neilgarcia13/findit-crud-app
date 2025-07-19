import React from 'react'
import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {

    const addJob = async (newJob) => {

    const response = await fetch('/api/jobs', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)

    });

  }

  const router = createBrowserRouter(
    createRoutesFromElements(

    <Route path='/' element={<MainLayout />}>

      <Route index element={<Homepage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage />} />
      
    </Route>

    )
  );

  return <RouterProvider router = { router } />
}

export default App;

