import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='me' className='rounded-full w-32' />
      </div>
      <h4 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Abadanaf Chala <Image src={assets.hand_icon} alt='%' className='w-6' /> 
      </h4>
      <h3 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Full-Stack Developer in Ethiopia</h3>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I'm an Enthusiastic Full-Stack Developer|MERN Stack Expert with a knack for creating dynamic and responsive web applications.</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-3 py-1 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

            <a href="/sample-resume.pdf" download className='px-3 py-1 border rounded-full border-gray-50 bg-green-500 flex items-center gap-2'>download my CV <Image src={assets.download_icon} alt='' className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header
