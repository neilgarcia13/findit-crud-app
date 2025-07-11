import React from 'react'
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa'


const JobListing = ({ job }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">

      <div className="p-4">

        <div className="mb-6">

          <div className="text-gray-600 my-2">{job.title}</div>
          <h3 className="text-xl font-bold">{job.type}</h3>
          
        </div>

        <div className="mb-5">
          {description}
        </div>

        <button onClick={() => setShowFullDescription((prevState) => !prevState)} 
          className='text-neutral-900 mb-5 cursor-pointer'>
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3 className="text-indigo-500 font-bold mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">

          <div className="text-neutral-900 font-bold mb-3">

            <FaMapMarker className='text-orange-700 inline mb-1 mr-1' />
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