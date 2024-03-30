import React from 'react'
import toast from 'react-hot-toast';
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';
import axios from 'axios';
import { API_END_POINT } from '../utils/constent';
import { setToggle } from '../redux/movieSlice';


export const Header = () => {
  const user = useSelector((store)=>store.app.user)
  const toggle = useSelector((store)=>store.movie.toggle)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logouthandle= async()=>{
    try{
      const res = await axios(`${API_END_POINT}/logout`);
      if (res.data.success){
        toast.success(res.data.message)
      }
      dispatch(setUser(null))
      navigate('/')
    }
    catch(error){
      console.log(error)
    }
  }

  const togglehandle=()=>{
    dispatch(setToggle())

  }


  return (
    <div className='absolute z-10 flex w-[100%] items-center justify-between  px-6 bg-gradient-to-b from-black'>
       <img  className='w-56 mt-4' src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png" alt=""></img>
       {
        user && (
          <div className='flex  items-center  '  >
       <IoIosArrowDropdown  size="24px" color='white'/>
        <h1 className='text-lg  font-medium text-white'>{user.fullname}</h1>
        <div className='ml-4 '>
        <button   onClick={logouthandle} className='bg-red-800 text-white px-4 py-2'>Logout</button>
        <button onClick={togglehandle} className='bg-red-800 text-white px-4 py-2 ml-2'>{toggle? "Home" :"Search Movie"}</button>
        </div>
       </div>

        )
       }
      
    </div>

  )
}
