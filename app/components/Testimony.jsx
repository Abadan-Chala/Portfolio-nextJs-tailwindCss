import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
      name: 'John Doe',
      photo: assets.john_doe,
      description: 'John is a fantastic developer who always delivers high-quality work on time.',
      social: {
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      name: 'Jane Smith',
      photo: assets.jane_smith,
      description: 'Jane is a creative and dedicated professional with a keen eye for detail.',
      social: {
        linkedin: 'https://www.linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    },
    // Add more testimonies as needed
  ];

  return (
    <div id='testimony' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo mb-10'>Testimonies</h2>
      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <div key={index} className='text-center'>
            <Image src={testimony.photo} alt={testimony.name} width={128} height={128} className='w-32 h-32 rounded-full mx-auto mb-4' />
            <h3 className='text-2xl font-Ovo'>{testimony.name}</h3>
            <p className='max-w-xl mx-auto mt-4'>{testimony.description}</p>
            <div className='flex justify-center gap-4 mt-4'>
              <a href={testimony.social.linkedin} target='_blank' rel='noopener noreferrer'>
                <Image src={assets.linkedin_icon} alt='LinkedIn' width={24} height={24} className='w-6 h-6' />
              </a>
              <a href={testimony.social.twitter} target='_blank' rel='noopener noreferrer'>
                <Image src={assets.twitter_icon} alt='Twitter' width={24} height={24} className='w-6 h-6' />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimony;