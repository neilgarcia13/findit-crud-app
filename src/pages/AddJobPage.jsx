import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddJobPage = ({addJobSubmit}) => {

  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under PHP 50K');
  const [location, setLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {

    e.preventDefault();

    const newJob = {
      
      title,
      type,
      description,
      location,
      salary,
      company: {

        name: companyName,
        description: companyDescription,
        contactEmail: companyEmail,
        contactPhone: companyPhone

      }
    } 

    addJobSubmit(newJob);

    return navigate('/jobs');
  }

  return (
    <div>
      <section className="bg-neutral-100">

        <div className="container m-auto max-w-2xl py-24">

          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0">

            <form onSubmit={submitForm}>

              <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

              <div className="mb-4">
                <label htmlFor="type" className="block text-neutral-900 font-bold mb-2"
                  >Job Type
                </label>

                <select
                  id="type" name="type" required
                  className="border rounded w-full py-2 px-3"
                  value={type}
                  onChange={(e) => setType(e.target.value)}>

                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>

                </select>

              </div>

              <div className="mb-4">

                <label className="block text-neutral-900 font-bold mb-2"
                  >Job Listing Name
                </label>

                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

              </div>

              <div className="mb-4">

                <label
                  htmlFor="description"
                  className="block text-neutral-900 font-bold mb-2"
                  >Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

              </div>

              <div className="mb-4">

                <label htmlFor="type" className="block text-neutral-900 font-bold mb-2"
                  >Salary
                </label>

                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}>
                    
                  <option value="Under PHP 50K">Under PHP 50K</option>
                  <option value="PHP 50K - 60K">PHP 50K - 60K</option>
                  <option value="PHP 60K - 70K">PHP 60K - PHP 70K</option>
                  <option value="PHP 70K - 80K">PHP 70K - PHP 80K</option>
                  <option value="PHP 80K - 90K">PHP 80K - PHP 90K</option>
                  <option value="PHP 90K - 100K">PHP 90K - PHP 100K</option>
                  <option value="PHP 100K - 125K">PHP 100K - PHP 125K</option>
                  <option value="PHP 125K - 150K">PHP 125K - PHP 150K</option>
                  <option value="PHP 150K - 175K">PHP 150K - PHP 175K</option>
                  <option value="PHP 175K - 200K">PHP 175K - PHP 200K</option>
                  <option value="Over PHP 200K">Over PHP 200K</option>

                </select>

              </div>

              <div className='mb-4'>

                <label className='block text-neutral-900 font-bold mb-2'>
                  Location
                </label>

                <input
                  type='text'
                  id='location'
                  name='location'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='Company Location'
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}           
                />

              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label htmlFor="company" className="block text-neutral-900 font-bold mb-2"
                  >Company Name
                </label>

                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />

              </div>

              <div className="mb-4">

                <label
                  htmlFor="company_description"
                  className="block text-neutral-900 font-bold mb-2"
                  >Company Description
                </label>
                
                <textarea
                  id="company_description"
                  name="company_description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>

              </div>

              <div className="mb-4">

                <label
                  htmlFor="contact_email"
                  className="block text-neutral-900 font-bold mb-2"
                  >Contact Email
                </label>

                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                />

              </div>

              <div className="mb-4">

                <label
                  htmlFor="contact_phone"
                  className="block text-neutral-900 font-bold mb-2"
                  >Contact Phone
                </label>

                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={companyPhone}
                  onChange={(e) => setCompanyPhone(e.target.value)}
                />

              </div>

              <div>

                <button
                  className="bg-neutral-900 transition duration-500 hover:bg-neutral-700 
                  text-white font-bold py-2 px-4 rounded-full w-full 
                  focus:outline-none focus:shadow-outline cursor-pointer"
                  type="submit">
                  Add Job
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

    </div>
  )
}

export default AddJobPage