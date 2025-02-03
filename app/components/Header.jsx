import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        whileHover={{rotate: 5, transition: { duration: 0.8 } }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='me' className='rounded-3xl w-52 mt-24 cursor-pointer' />
      </motion.div>
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hello<Image src={assets.hand_icon} alt='%' className='w-6' /> I'm <b>Abadanaf Chala</b>  
      </motion.h4>
      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ transition: { duration: 0.8 }, scale: 1.1}}
        transition={{ duration: 0.8, delay: 0.5 }} 
      className='text-3xl sm:text-6xl lg:text-[44px] font-Ovo'>
        Full-Stack Developer in Ethiopia</motion.h3>
        <motion.p 
          initial={{opacity: 0 }}
          whileInView={{opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'>
            I'm an Enthusiastic Full-Stack Developer|MERN Stack Expert with a knack for creating dynamic and responsive web applications.</motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
              initial={{y:30, opacity: 0 }}
              whileInView={{y:0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
             href="#contact" className='px-3 py-1 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:bg-green-800'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

            <motion.a 
            initial={{y:30, opacity: 0 }}
            whileInView={{y:0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/sample-resume.pdf" download className='px-3 py-1 border rounded-full border-gray-50 bg-green-500 flex items-center gap-2 dark:text-black hover:text-white'>download my CV <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </div>
  )
}

export default Header
