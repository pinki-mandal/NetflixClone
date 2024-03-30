
import { Toprated, options } from '../utils/constent'
import { useDispatch } from 'react-redux'
import { getTopratedmovies } from '../redux/movieSlice'
import axios from 'axios'

const UseTopmovies = async() => {
    const dispatch=useDispatch()
   try{
    const res = await axios.get(Toprated,options)
    dispatch(getTopratedmovies(res.data.results))

   }catch(error){
    console.log(error)
   }
}

export default UseTopmovies
