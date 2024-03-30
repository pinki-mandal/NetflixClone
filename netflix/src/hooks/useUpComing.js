// import React from 'react'
import axios from 'axios'
import { Up_Coming, options } from '../utils/constent'
import { useDispatch } from 'react-redux'
import { getUpComing } from '../redux/movieSlice'
const useUpComing = async() => {
    const dispatch = useDispatch()
  try {
    const res= await axios.get(Up_Coming,options)
    dispatch(getUpComing(res.data.results))

    
  } catch (error) {
    console.log(error)
    
  }
}

export default useUpComing
