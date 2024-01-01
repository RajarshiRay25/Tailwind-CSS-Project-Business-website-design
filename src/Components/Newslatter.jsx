import React from 'react'

const Newslatter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[800px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-3xl sm:text-3xl text-3xl font-bold md:py-6 py-4">Subscribe to my newsletter for better communication</h1>
                <p>Discuss wide variety of project workflows to perform better</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full">
                    <input className="p-3 ml-3 flex w-full rounded-md text-black" type="email" placeholder='Enter Email'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-4 text-black ml-4'>Submit</button>
                </div>
                <p>For proper protocols for projects read the detailed SOPs <span className='text-[#00df9a]'>SOP for development queries</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newslatter