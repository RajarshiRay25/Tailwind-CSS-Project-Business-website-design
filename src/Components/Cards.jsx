import React from 'react'
import SINGLE from '../Assets/single.png'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[800px] mx-auto grid md:grid-cols-3 gap-6">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 ">
                <img src={SINGLE} alt="single" className="w-20 mx-auto mt-[-3rem] bg-white" />
                <h2 className="text-3xl font-bold text-center py-8">Single User</h2>
                <p className='text-2xl text-center font-bold'>$100</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-6 mt-4'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-6'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-6'>Lorem ipsum dolor sit.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-4 text-black'>Start</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 ">
                <img src={SINGLE} alt="single" className="w-20 mx-auto mt-[-3rem] bg-white" />
                <h2 className="text-3xl font-bold text-center py-8">Single User</h2>
                <p className='text-2xl text-center font-bold'>$100</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-6 mt-4'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-6'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-6'>Lorem ipsum dolor sit.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-4 text-black'>Start</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 ">
                <img src={SINGLE} alt="single" className="w-20 mx-auto mt-[-3rem] bg-white" />
                <h2 className="text-3xl font-bold text-center py-8">Single User</h2>
                <p className='text-2xl text-center font-bold'>$100</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-6 mt-4'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-6'>Lorem ipsum dolor sit.</p>
                    <p className='py-2 border-b mx-6'>Lorem ipsum dolor sit.</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-4 text-black'>Start</button>
            </div>
        </div>

    </div>
  )
}

export default Cards