
import { Popolarmovies, options } from '../utils/constent'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getPopuralmovies } from '../redux/movieSlice'

const UsePopolarmovies = async() => {
    const dispatch=useDispatch()
   try{
    const res=await axios.get(Popolarmovies,options)
    dispatch(getPopuralmovies(res.data.results))

   }catch(error){
    console.log(error)
   }
}

export default UsePopolarmovies
