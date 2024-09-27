import React from 'react'
import { ABOUT_TEXT, HERO_CONTENT } from '../constants';
import profilePic from '../assets/Profile.jpg';
import { motion } from "framer-motion"

const container=(delay)=>({
    hidden:{x}
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    initial={{x:-100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1, delay:0}}
                    className='mx-10  pb-16 text-6xl font-thin tracking-tight lg:mt-16
                    lg:text-7xl'>Sushant Kumar</motion.h1>
                    <span className='mx-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-3xl tracking-tight text-transparent'>FULL STACK DEVELOPER</span>
                    <p className='mx-10 my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className=' w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img className='rounded-2xl' src={profilePic} style={{height:'360px', width:"480px"}} alt="Sushant Kumar" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
