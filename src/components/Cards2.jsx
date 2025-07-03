import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";

const Cards2 = () => {
  return (
    <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between'>
        <div className='w-[50%] h-full  flex gap-1'>
            <div className='w-[50%] h-full overflow-hidden'>
                <img src={image1} alt="" className='h-full object-cover rounded-lg'/>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg font-semibold'>Pancake</div>
                <div className='w-[110px] h-[50px]  flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400 text-xl'>
                    <button className='w-[30%] h-full bg-white text-green-400 hover:bg-gray-200'>-</button>
                    <span className='w-[40%] h-full bg-gray-100 flex justify-center items-center'>1</span>
                    <button className='w-[30%] h-full bg-white text-green-400 hover:bg-gray-200'>+</button>
                </div>
            </div>
        </div>






        <div className='flex flex-col justify-start items-end gap-6'>
       <span className='text-xl text-green-400 font-semibold'>Rs 499/-</span>
       <RiDeleteBin6Line className='w-[30px] h-[30px] t ext-red-400' />
        </div>


    </div>
  )
}

export default Cards2