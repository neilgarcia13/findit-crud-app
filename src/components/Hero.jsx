import React from 'react'

const Hero = ({title='Find A Tech Job That Suits You', subtitle='Start your career right now!'}) => {
  return (
    <div>

      <section className="bg-neutral-900 py-20 mb-4">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div className="text-center">

            <h1
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <p className="my-4 text-xl text-white mt-10">
              {subtitle}
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Hero
