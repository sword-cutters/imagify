import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const GenerateBtn = () => {
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
    <motion.div className='pb-16 text-center'
      initial={{opacity:0.3 , y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 py-6 md:py-12'>See the magic. Try now</h1>
        <motion.button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-5 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{default:{duration:0.5},opacity:{delay:1,duration:1}}}
        >Generate Images
            <img src={assets.star_group} alt="" className='h-6'/>
        </motion.button>
    </motion.div>
  )
}

export default GenerateBtn