import React from 'react'

const HomeCards = () => {
  return (

    <section className="py-4">

      <div className="container-xl lg:container m-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

          <div className="bg-neutral-900 p-6 rounded-lg shadow-md">

            <h2 className="text-2xl text-neutral-100 font-bold">For Employers</h2>

            <p className="text-neutral-100 mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>

            <a
              href="/jobs.html"
              className="inline-block bg-neutral-100 
              text-neutral-900 rounded-lg px-4 py-2 
              transition duration-500 hover:bg-neutral-300">
              Add Job
            </a>

          </div>

          <div className="bg-neutral-100 p-6 rounded-lg shadow-md">

            <h2 className="text-2xl font-bold text-neutral-900">For Applicants</h2>

            <p className="mt-2 mb-4 text-neutral-900">
              List your job to find the perfect developer for the role
            </p>

            <a
              href="/add-job.html"
              className="inline-block bg-neutral-900 
              text-neutral-100 rounded-lg px-4 py-2 
              transition duration-500 hover:bg-neutral-600">
              Browse Jobs
            </a>

          </div>

        </div>

      </div>
      
    </section>
  )
}

export default HomeCards;