import React, { useState } from 'react';
import { Header } from './Header';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_END_POINT } from '../utils/constent';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';

export const Login = () => {
  const [isLogin, setLogin] = useState(false);
  const [fullname, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const isLoading = useSelector(store =>store.app.isLoading)

  const handleLogin = () => {
    setLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    
      if (isLogin) {
          const user = { email, password };
        try{
          const res = await axios.post(`${API_END_POINT}/login`, user,{
            headers:{
              'Content-Type':'application/json'
            },
            withCredentials:true
          });
          console.log(res);
          toast.success('Login successful!');
          dispatch(setUser(res.data.user))
          navigate('/browser')
        }catch(error){
          console.log(error)
        }finally{
          dispatch(setLoading(false))
        }
        
       
      } else {
        // register
        dispatch(setLoading(true))
        const user = { fullname, email, password };
        try{
        const res = await axios.post(`${API_END_POINT}/register`, user,{
          headers:{
            'Content-Type':'application/json'

          },
          withCredentials:true
        });
        console.log(res);
        if (res.data.success){
          toast.success(res.data.message);

        }
        setLogin(true)
        
      }catch (error) {
        console.error('Error occurred:', error);
        toast.error('An error occurred. Please try again.');
        }finally{
          dispatch(setLoading(false))
        }
        
    }
    setname("")
    setemail("")
    setpassword("")
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg" alt="banner" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-3/12 my-36 p-10 right-0 left-0 mx-auto item-center justify-center absolute bg-black opacity-90 rounded-md">
        <h1 className="text-3xl text-white mb-5 font-bold ">{isLogin ? 'Login' : 'Signup'}</h1>
        <div className="flex flex-col">
          {!isLogin && <input type="text" placeholder="Fullname" value={fullname} onChange={(e) => setname(e.target.value)} className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white" />}
          <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white" />
          <input type="text" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white" />
          <button className="bg-red-800 mt-2 text-white rounded-md p-2">{`${isLoading ? "loading...":(isLogin ? 'Login' : 'Signup')}`}</button>
          <p className="text-white text-sm">{!isLogin ? 'Already have account?' : 'New to Netflix?'} <span onClick={handleLogin} className="ml-1 text-blue-600 font-medium cursor-pointer">{isLogin ? 'Signup' : 'Login'}</span></p>
        </div>
      </form>
    </div>
  );
};
