import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendURL, setToken, setUser } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting:', { state, name, email, password, backendURL }); // Added for debugging
      if (state === 'Login') {
        const { data } = await axios.post(backendURL + '/api/user/login', { email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
          toast.success('Logged in successfully');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendURL + '/api/user/register', { name, email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
          toast.success('Registered successfully');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error('Submission error:', error.response?.data, error.message); // Added for debugging
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed flex justify-center items-center backdrop-blur-sm bg-black/30 top-0 bottom-0 left-0 right-0 z-10">
      <motion.form
        onSubmit={onSubmitHandler}
        className="relative bg-white rounded-xl p-10 text-slate-500"
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold mb-3 text-center text-2xl text-neutral-700">{state}</h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state !== 'Login' && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img className="w-5 h-5 object-contain" src={assets.profile_icon} alt="" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img className="w-5 h-5 object-contain" src={assets.email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none text-sm"
            type="email"
            placeholder="Email id"
            required
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img className="w-5 h-5 object-contain" src={assets.lock_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-sm text-blue-600 cursor-pointer my-4">Forgot Password?</p>
        <button className="bg-blue-600 rounded-full w-full px-6 py-2 text-white cursor-pointer">
          {state === 'Login' ? 'Login' : 'Create'}
        </button>
        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don’t have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState('Sign Up')}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState('Login')}>
              Login
            </span>
          </p>
        )}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
        />
      </motion.form>
    </div>
  );
};

export default Login;