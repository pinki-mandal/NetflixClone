
import axios from 'axios';
import { getPlayingmovies } from '../redux/movieSlice';
import { Now_playing_movie,options } from '../utils/constent';
import {  useDispatch } from 'react-redux';


const Usernowplayingmovies = async () => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Now_playing_movie, options);
        dispatch(getPlayingmovies(res.data.results));
    } catch (error) {
        console.log(error);
    }
  
}

export default Usernowplayingmovies
