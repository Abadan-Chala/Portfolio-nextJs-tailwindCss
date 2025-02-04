import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '@/styles/Testimony.css'
import { motion } from "motion/react"

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const testimonies = [
    {
      name: 'Garoma Makure',
      photo: assets.garo,
      description: 'Abadanaf is a fantastic developer who always delivers high-quality products on time. He is a great team player and a pleasure to work with. I highly recommend him to anyone looking for a skilled developer.',
      social: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Abay Tesfaye',
      photo: assets.abay,
      description: 'I have worked with Abadanaf on several projects, and he has always impressed me with his technical skills and professionalism. He is a dedicated developer who is always willing to go the extra mile to ensure the success of his projects.',
      social: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Abdisa Baisa',
      photo: assets.abdisa,
      description: 'Abadanaf is a creative and dedicated professional with a keen eye for detail. He is a talented developer who is always looking for ways to improve his skills and deliver high-quality products. ',
      social: {
        linkedin: 'https://www.linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    {
      name: 'Asmare Admasu',
      photo: assets.asmare,
      description: 'I have known Abadanaf for several years and have always been impressed by his dedication and work ethic. He is a talented developer who is always looking for ways to improve his skills. ',
      social: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Mr. Samuel Yirdaw',
      photo: assets.samuel,
      description: 'I got to know Abadanaf when he was working on a project for our company. He is a talented developer who is always willing to go the extra mile to ensure the success of his projects.',
      social: {
        linkedin: 'https://www.linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    // Add more testimonies as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='testimony' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo mb-10'>Testimonies</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2-xl mx-auto mt-5 mb-12 font-Ovo'>
        Here are some testimonials from clients and colleagues who have worked with me. I take great pride in delivering high-quality products and ensuring the success of my projects. Your feedback and satisfaction are my top priorities.
      </motion.p>

      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className='text-center'
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ rotate: 15, scale: 1.1, transition: { duration: 0.8 } }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
              <Image src={testimony.photo} alt={testimony.name} width={128} height={128} className='w-32 h-32 rounded-full mx-auto mb-4 cursor-pointer' />
            </motion.div>

            <motion.h3
              className='text-2xl font-Ovo'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {testimony.name}
            </motion.h3>
            <motion.p
              className='max-w-xl mx-auto mt-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {testimony.description}
            </motion.p>
            <div className='flex justify-center gap-4 mt-4'>
              <motion.a
                href={testimony.social.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={assets.linkedin_icon} alt='LinkedIn' width={24} height={24} className='w-6 h-6' />
              </motion.a>
              <motion.a
                href={testimony.social.twitter}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={assets.twitter_icon} alt='Twitter' width={24} height={24} className='w-6 h-6' />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Testimony;