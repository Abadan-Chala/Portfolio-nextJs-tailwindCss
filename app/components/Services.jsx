import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleToggleReadMore = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.5 }} 
        className='text-center text-5xl font-Ovo'>My Services</motion.h2>

      <motion.p 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2-xl mx-auto mt-5 mb-12 font-Ovo'>
        I offer modern web development with HTML, CSS, JavaScript, and React; cross-platform mobile app development with React Native; scalable backend systems with Node.js and Express.js; full-stack solutions using the MERN stack; intuitive UI/UX design; and expert consulting on technology and best practices. Let's collaborate to bring your ideas to life!
      </motion.p>

      <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map((service, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index} 
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
            <Image src={service.icon} alt='icon' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{service.title}</h3>
            <p className={`text-sm text-gray-600 leading-5 dark:text-white/80 ${expandedService === index ? '' : 'truncate'}`}>
              {service.description}
            </p>
            <button onClick={() => handleToggleReadMore(index)} className='flex items-center gap-2 text-sm mt-5 text-green-600 dark:text-green-400'>
              {expandedService === index ? 'Read less' : 'Read more'} <Image src={assets.right_arrow} alt='...' className='w-4' />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services