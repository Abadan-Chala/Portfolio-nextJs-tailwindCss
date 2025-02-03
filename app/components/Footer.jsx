import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='AC' className='w-16 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='AC' className='w-6'/>
          abadanafchala@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2024 Abadanaf Chala. All rights reserved!</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li ><a target='_blank' href="https://github.com/Abadan-Chala">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/abadanaf-chala-424515336/">LinkedIn</a></li>
            <li><a target='_blank' href="https://x.com/Abadanaf_Chala?t=D4F7J48ZYzUa_WuDghJY3Q&s=09">Twitter</a></li>
            <li><a target='_blank' href=" https://www.instagram.com/abadanaf?igsh=YzljYTk1ODg3Zg==">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
