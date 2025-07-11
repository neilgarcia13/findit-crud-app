import React from 'react'
import logo from '../assets/images/findit-icon.png';

const Navbar = () => {

  return (

    <div>
      <nav className="bg-neutral-900">

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

          <div className="flex h-20 items-center justify-between">

            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              
              {/*Logo*/}
              <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">

                <img
                  className="w-32"

                  src={ logo }
                  alt="React Jobs"
                />
              </a>

              <div className="md:ml-auto flex">

                <div className="flex space-x-2 items-center justify-center">

                  <a
                    href="/index.html"
                    className="text-neutral-100 transition duration-500 hover:bg-neutral-100 hover:text-neutral-900 rounded-md px-3 py-2"
                    >Home
                  </a>

                  <a
                    href="/jobs.html"
                    className="text-neutral-100 transition duration-500 hover:bg-neutral-100 hover:text-neutral-900 rounded-md px-3 py-2"
                    >Jobs
                  </a>

                  <a
                    href="/add-job.html"
                    className="text-neutral-100 transition duration-500 hover:bg-neutral-100 hover:text-neutral-900 rounded-md px-3 py-2"
                    >Add Job
                  </a>
                  
                </div>

              </div>

            </div>

          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar;
