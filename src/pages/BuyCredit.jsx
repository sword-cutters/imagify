import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import {AppContext} from '../context/AppContext'
import { motion } from "motion/react"

const BuyCredit = () => {
  const {user} = useContext(AppContext)
  return (
    <motion.div className='text-center pt-14 min-h-[80vh] mb-10'
      initial={{opacity:0.3 , y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
      <button className='border border-gray-500 rounded-full px-10 py-4 mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the Plan</h1>
      <div className='flex items-center justify-center gap-4'>
        {plans.map((plan,index)=>(
          <div className='flex flex-col items-start text-left bg-white drop-shadow-sm rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500' key={index}>
            <img width={40} className='mb-2' src={assets.logo_icon} alt="" />
            <p className='font-semibold mt-3 mb-1'>{plan.id}</p>
            <p className='text-sm'>{plan.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>${plan.price}</span>/{plan.credits} credits</p>
              <button className='rounded-md bg-gray-800 w-full text-white mt-8 text-sm py-2.5 min-w-52 cursor-pointer'>{user?'Purchase':'Get Started'}</button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit