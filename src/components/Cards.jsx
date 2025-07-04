import React from 'react'
import { food_items } from '../food'
import { GiChickenOven } from "react-icons/gi";
import { PiLeafLight } from "react-icons/pi";
import { useDispatch } from "react-redux"
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';


const Cards = ({cate}) => {

  let dispatch = useDispatch()

  return (
     <>
     <div className="flex flex-wrap justify-center items-center">
        {cate.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col bg-white rounded-md w-[300px] h-[300px] p-1 m-1 px-3 py-0 shadow-xl transition-all hover:border-3 border-green-400 duration-75"
          >
            <img
              className="rounded-xl w-[100%] h-[50%] object-cover"
              src={item.food_image}
              alt={item.food_name}
            />
            <h1 className="py-1 font-bold whitespace-nowrap overflow-hidden text-ellipsis text-left w-full">{item.food_name}</h1>
            <div className="flex justify-between w-full py-4">
              <span className="text-green-500">Rs. {item.price}/-</span>
              <div className='flex justify-center items-center flex-row'>

              <span className="pr-5 ">{  item.food_type == "non_veg" ?  <GiChickenOven className='text-red-600 text-2xl' /> : <PiLeafLight className='text-green-400 text-2xl gap-0' />}</span>
              <span className={item.food_type ==="non_veg" ? "text-red-500" : "text-green-500"}>
                
                {item.food_type}
                
                </span>
              </div>
            </div>

            <button className="items-center w-[80%] h-[30px] bg-green-500 rounded-3xl
            text-white cursor-pointer hover:bg-green-700" onClick={()=> {dispatch(AddItem({id:item.id,
              name:item.food_name,
              price:item.price,
              qty:item.food_quantity,
              image:item.food_image
            }));
            toast.success("Item Added")}
            } >
              Add to Dish
            </button>
          </div>
        ))}
      </div>
     
     </>
  )
}

export default Cards