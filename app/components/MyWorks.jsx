import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const MyWorks = ({ isDarkMode }) => {
    const [showAll, setShowAll] = useState(false);

    const handleToggleShowMore = () => {
        setShowAll(!showAll);
    };

    const visibleWorkData = showAll ? workData : workData.slice(0, 4);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo mt-12'>My Recent Works</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2-xl mx-auto mt-5 mb-12 font-Ovo'>
                I have recently worked on various projects involving web and mobile app development, utilizing technologies like React, React Native, and the MERN stack. These projects showcase my ability to create dynamic, responsive, and user-friendly applications.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto gap-5 my-10 dark:text-black'>
                {visibleWorkData.map((project, index) => (
                    <motion.div
                        whileInView={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})`}}>
                        <div className='bg-gray-300 w-10/12 rounded-md absolute bottom-1 left-1/2 -translate-x-1/2 py-1 px-3 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-800'>{project.description}</p>
                            </div>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-green-500 transition'>
                                <Image src={assets.send_icon} alt='send' className='w-5' />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                onClick={handleToggleShowMore}
                className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover cursor-pointer'>
                {showAll ? 'Show less' : 'Show more'} <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='more' className='w-4' />
            </motion.a>
        </motion.div>
    )
}

export default MyWorks