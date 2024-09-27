import React from 'react'
import aboutImg from "../assets/aboutImg.png"
import { ABOUT_TEXT } from '../constants'
const About = () => {
  return (
 <div>
  <div className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
    <div className='flex flex-wrap'>
      <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center'>
          <img src={aboutImg} style={{height:"350px", width:"610px"}} alt="" />
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='flex justify-center mx-8  lg:justify-start'>
          <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  </div>
 </div>
  )
}
export default About