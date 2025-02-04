import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>

      <motion.div
        className='text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.8 }, rotate: -25 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
          <Image src={assets.logo} alt='AC' className='w-16 mx-auto mb-2' />
        </motion.div>

        <motion.div
          className='w-max flex items-center gap-2 mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='AC' className='w-6' />
          abadanafchala@gmail.com
        </motion.div>
      </motion.div>



      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2024 Abadanaf Chala. All rights reserved!</p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          {[
            { href: "https://github.com/Abadan-Chala", label: "GitHub" },
            { href: "https://www.linkedin.com/in/abadanaf-chala-424515336/", label: "LinkedIn" },
            { href: "https://x.com/Abadanaf_Chala?t=D4F7J48ZYzUa_WuDghJY3Q&s=09", label: "Twitter" },
            { href: "https://www.instagram.com/abadanaf?igsh=YzljYTk1ODg3Zg==", label: "Instagram" }
          ].map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.8 } }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a target='_blank' href={link.href} rel='noopener noreferrer' className='hover:text-green-500'>
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
