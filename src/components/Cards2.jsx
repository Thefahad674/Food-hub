import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';

const Cards2 = ({name, id, price, image, qty}) => {
    let dispatch = useDispatch()
  return (
    <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between'>
        <div className='w-[50%] h-full  flex gap-1'>
            <div className='w-[50%] h-full overflow-hidden'>
                <img src={image} alt={name} className='h-full object-cover rounded-lg'/>
            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg font-semibold'>{name}</div>
                <div className='w-[110px] h-[50px]  flex justify-center items-center rounded-lg overflow-hidden shadow-lg border-2 border-green-400 text-xl'>
                    <button className='w-[30%] h-full bg-white text-green-400 hover:bg-gray-200 mb-1.5' onClick={()=>{qty > 1 ? dispatch(DecreamentQty(id)):1}}>-</button>
                    <span className='w-[40%] h-full bg-gray-100 flex justify-center items-center'>{qty}</span>
                    <button className='w-[30%] h-full bg-white text-green-400 hover:bg-gray-200 mb-1.5' onClick={()=>dispatch(IncreamentQty(id))}>+</button>
                </div>
            </div>
        </div>






        <div className='flex flex-col justify-start items-end gap-6'>
       <span className='text-xl text-green-400 font-semibold'>Rs. {price}/-</span>
       <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-500 cursor-pointer hover:text-red-700' onClick={() => dispatch(RemoveItem(id))} />
        </div>


    </div>
  )
}

export default Cards2