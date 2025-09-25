import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { delay } from 'motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Header = () => {
  const {user,setShowLogin} = useContext(AppContext)
  const navigate=useNavigate()
  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-12'
      initial={{opacity:0.3 , y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
        <motion.div className='inline-flex text-stone-500 gap-3 bg-white px-6 py-4 rounded-full border border-neutral-500'
          initial={{opacity:0 , y:-20}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.2,duration:0.8}}
        >
            <p>Most smoothest text to image generator</p>
            <img className='w-5'src={assets.star_icon} alt="" />
        </motion.div>
        <motion.h1 className='py-8 text-stone-500 text-4xl max-w-[300px] sm:text-7xl sm:max-w-[650px] mx-auto mt-10 text-center'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.4,duration:1}}
        >Turn Text to <span className='text-blue-600'>Images</span>, in no time...</motion.h1>
        <motion.p className='text-center max-w-xl mx-auto'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.6,duration:1}}
        >Unleash your creativity and watch us bring it to life. Turn your wild imaginations to a reality-just type, and watch us create your dream</motion.p>
        <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto flex items-center rounded-full gap-2 mt-8 px-12 py-3'
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{default:{duration:0.5},opacity:{delay:1,duration:1}}}
        >
            Generate Images
            <img className='h-8'src={assets.star_group} alt="" />
        </motion.button>
        <motion.div className='flex items-center gap-2 mt-12'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1,duration:1}}
        > 
            <motion.img className='w-18 h-18 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer' whileHover={{scale:1.05,duration:0.1}}src={assets.sample_img_1} alt="" />
            <motion.img className='w-18 h-18 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer' whileHover={{scale:1.05,duration:0.1}}src={assets.sample_img_2} alt="" />
            <motion.img className='w-18 h-18 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer' whileHover={{scale:1.05,duration:0.1}}src={assets.sample_img_2} alt="" />
            <motion.img className='w-18 h-18 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer' whileHover={{scale:1.05,duration:0.1}}src={assets.sample_img_1} alt="" />
            <motion.img className='w-18 h-18 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer' whileHover={{scale:1.05,duration:0.1}}src={assets.sample_img_2} alt="" />
            <motion.img className='w-18 h-18 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer' whileHover={{scale:1.05,duration:0.1}}src={assets.sample_img_1} alt="" />
        </motion.div>
        <motion.p className='text-stone-500 mt-2'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.2,duration:0.8}}
        >Genereated images from imagify</motion.p>
    </motion.div>
  )
}

export default Header