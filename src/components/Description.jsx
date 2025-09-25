import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
      initial={{opacity:0.3 , y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
        <h1 className='text-3xl font-semibold sm:text-4xl mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your wild imaginations into visuals</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
          <img className='w-80 xl:w-96 rounded-lg'src={assets.sample_img_1} alt="" />
          <div>
            <h2 className='text-3xl font-medium max-w-lg mb-6'>Introducing the AI-Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>Bring your ideas to life with our free AI image generator. From stunning visuals to unique artwork, simply describe your vision and watch it transform into eye-catching images—instantly.</p>
            <p className='text-gray-600'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
          </div>
        </div>
    </motion.div>
  )
}

export default Description