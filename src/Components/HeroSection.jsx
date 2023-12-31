import React from 'react'
import Typed from 'react-typed';  /* React Typed package for dynamic texts from npm*/
const HeroSection = () => {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className='text-[#00df9a] font-bold p-2 md:text-5xl sm:text-4xl text-3xl'>Greetings Everyone to my website</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4'>Myself , Rajarshi Ray</h1>
          <div className="flex justify-center items-center">
            <p className="md:text-2xl sm:text-2xl text-xl font-bold">A UG Biotechnology student and a </p>
            <Typed className="md:text-2xl sm:text-2xl text-xl font-bold pl-2 md:pl-4" strings={['Web Developer' , 'ML Developer' , 'Bioinformatics Developer']} typeSpeed={40} backSpeed={50} loop></Typed>
          </div>
          <p className="md:text-3xl text-xl font-bold text-gray-500">Connecting the world of Biotechnology and the modern computational techniques to create innovative breakthroughs!</p>

          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-4 text-black">Get Started</button>
        </div>
    </div>
  )
}

export default HeroSection