import React from 'react'
import LAPTOP from '../Assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className="parent w-full bg-white py-16 px-4">
        <div className="grid-parent max-w-[800px] mx-auto grid md:grid-cols-2">
            <img className='left_side w-[500px] mx-auto my-4' src={LAPTOP} alt="/" />
            <div className="right_side flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold text-center'>Analytics Section</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>How I manage my project work on various fields</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem, ex amet necessitatibus, expedita aliquam enim atque maxime temporibus eligendi nobis explicabo sequi culpa commodi quibusdam, corrupti voluptatibus harum? Labore.</p>
                <button className="bg-black w-[200px] rounded-md font-medium mx-auto my-6 py-4 text-white md:mx-[100px]">View More</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics