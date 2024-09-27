import React from 'react'
import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h2 className='my-10 text-center text-4xl'>Contact</h2>
      <div className='text-center tracking-tighter'>
        <p>{CONTACT.address}</p>
        <p>
          <a href={`tel:${CONTACT.phoneNo}`} className='text-blue-600 hover:underline'>
            {CONTACT.phoneNo}
          </a>
        </p>
        <p>
          <a href={`mailto:${CONTACT.email}`} className='text-blue-600 hover:underline'>
            {CONTACT.email}
          </a>
        </p>
      </div> 
    </div>
  )
}

export default Contact
