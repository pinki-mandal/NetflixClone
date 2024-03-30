// import React, { useEffect } from 'react'
// import { Header } from './Header'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import MainContainer from './mainContainer'
// import axios from 'axios'
// import { Now_playing_movie, options } from '../utils/constent'
// import { getPlayingmovies } from '../redux/movieSlice'


// const Broswer = () => {
//   const user = useSelector(store => store.app.user)
//   const navigate= useNavigate()
//   const dispatch = useDispatch()


//   const fetchNowPlayingMovies  =async()=>{
//     try{
//       const res = await axios.get(Now_playing_movie,options)
//       dispatch(getPlayingmovies(res.data.results))
//       // console.log(res.data.results)
      

//     }catch(error){
//       console.log(error)
//     }
//   }

//   useEffect(()=>{
//     if (!user){
//       navigate('/')
//     }
//     else{
//       fetchNowPlayingMovies ()
//     }
//   },[user,navigate])
//   return (
//     <div className=''>
//       <Header/>
//       <MainContainer/>
      
        
      
//     </div>
//   )
// }

// export default Broswer


import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { getPlayingmovies } from '../redux/movieSlice';
// import { Now_playing_movie, options } from '../utils/constent';
// import axios from 'axios';
import { Header } from './Header';
import MainContainer from './mainContainer';
import Usernowplayingmovies from '../hooks/usernowPlayingmovies';
import UsePopolarmovies from '../hooks/usePopolarmovies';
import UseTopmovies from '../hooks/useTopmovies';
import useUpComing from '../hooks/useUpComing';
import MovieContainer from './movieContainer';
import SearchMovie from './SearchMovie';

// import Usernowplayingmovies from './hooks/usernowplayingmovies';

const Broswer = () => {
    const user = useSelector(store => store.app.user);
    const toggle = useSelector((store)=>store.movie.toggle)
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    // Usernowplayingmovies()
    Usernowplayingmovies()
    UsePopolarmovies()
    UseTopmovies()
    useUpComing()
   


    

    useEffect(() => {
        if (!user) {
            navigate('/');
         
        }
    });

    return (
        <div className=''>
            <Header />
            <div>
                {
                    toggle?<SearchMovie/>:(
                        <>
                        <MainContainer />
                        <MovieContainer/>
                        </>
                    )
                }
            </div>
    
        </div>
    );
};

export default Broswer;
