import React from 'react'

import { PiFileCppFill } from "react-icons/pi";
import {IoLogoPython} from "react-icons/io5"//python
import { SiHtml5 } from 'react-icons/si';//HTML
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className=' flex flex-wrap items-center justify-center gap-4'>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <SiReact className='text-4xl text-cyan-400'/>
            </div>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <IoLogoPython className='text-4xl'/>
            </div>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <SiDjango className='text-4xl text-green-500'/>
            </div>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <PiFileCppFill className='text-4xl text-pink-500'/>
            </div>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <SiHtml5 className='text-4xl text-orange-500'/>
            </div>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <SiCss3 className='text-4xl text-blue-600'/>
            </div>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <SiJavascript className='text-4xl text-yellow-400'/>
            </div>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <SiPostgresql className='text-4xl text-sky-700'/>
            </div>
            <div className=' rounded-2xl  border-4 border-neutral-800 p-4'>
                <SiGithub className='text-4xl text-cyan-400'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
