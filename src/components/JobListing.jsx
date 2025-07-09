import React from 'react'

const JobListing = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">

      <div className="p-4">

        <div className="mb-6">

          <div className="text-gray-600 my-2">{job.title}</div>
          <h3 className="text-xl font-bold">{job.type}</h3>
          
        </div>

        <div className="mb-5">
          {job.description}
        </div>

        <h3 className="text-indigo-500 font-bold mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">

          <div className="text-neutral-900 font-bold mb-3">

            <i className="fa-solid fa-location-dot text-lg"></i>
            {job.location}

          </div>

          <a
            href={`/job/${job.id}`}
            className="h-[36px] bg-neutral-900 text-neutral-100 
              border-none px-4 py-2 rounded-lg text-center text-sm font-bold">
            Read More
          </a>

        </div>

      </div>

    </div>
  )
}

export default JobListing;