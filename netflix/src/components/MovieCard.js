import React from 'react'
import { TMDB_IMAGE_URL } from '../utils/constent'
import { useDispatch } from 'react-redux'
import { setOpen ,getId} from '../redux/movieSlice'

const MovieCard = ({poster,movieId}) => {
  const dispatch=useDispatch()

  if (poster == null) return null

  const handleOpen=()=>{
    dispatch(getId(movieId))
    dispatch(setOpen(true))
  }
  return (
    <div className='w-48 p-2 ml-2 ' onClick={()=>{handleOpen()}}>
       <img src={`${TMDB_IMAGE_URL}/${poster}`} alt="vsg"></img>
      
    </div>
  )
}

export default MovieCard
