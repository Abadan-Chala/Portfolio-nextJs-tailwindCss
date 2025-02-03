import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='bg-white dark:bg-gray-800 rounded-lg p-8 max-w-lg w-full'
      >
        <button onClick={onClose} className='absolute top-4 right-4 text-gray-600 dark:text-gray-300'>
          &times;
        </button>
        <div className='text-center'>
          <Image src={service.icon} alt='icon' className='w-16 mx-auto mb-4' />
          <h3 className='text-2xl font-Ovo mb-4'>{service.title}</h3>
          <p className='text-gray-700 dark:text-gray-300'>{service.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceModal;