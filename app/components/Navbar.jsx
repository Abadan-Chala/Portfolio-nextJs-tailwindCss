import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [activeLink, setActiveLink] = useState('#top');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sideMenuRef = useRef();

    const openMenu = () => {
        setIsMenuOpen(true);
        sideMenuRef.current.style.transform = 'translateX(0)';
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });

        const handleClickOutside = (event) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = (href) => {
        setActiveLink(href);
        closeMenu();
    };

    return (
        <>
            <div className='fixed top-0 left-0 w-full h-full -z-10'>
                {isDarkMode ? (
                    <video
                        src={assets.bgdark}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='w-full h-full object-cover opacity-50'
                    />
                ) : (
                    <video
                        src={assets.bgwhite}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='w-full h-full object-cover opacity-75'
                    />
                )}
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 ${isScroll ? 'bg-white backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
                <motion.a
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: 360, transition: { duration: 1 } }}
                    whileHover={{ scale: 1.1, rotate: -360, transition: { duration: 2, delay: 0.8 } }}
                    href="#top">
                    <Image src={assets.logo} alt='AC' className='w-8 cursor-pointer mr-14' />
                </motion.a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a
                        className={`font-Ovo ${activeLink === '#top' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`}
                        href="#top"
                        onClick={() => handleLinkClick('#top')}>Home
                    </a>
                    </li>
                    <li><a
                        className={`font-Ovo ${activeLink === '#about' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`}
                        href="#about"
                        onClick={() => handleLinkClick('#about')}>About me
                    </a>
                    </li>
                    <li><a
                        className={`font-Ovo ${activeLink === '#services' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`}
                        href="#services"
                        onClick={() => handleLinkClick('#services')}>Services
                    </a>
                    </li>
                    <li><a
                        className={`font-Ovo ${activeLink === '#work' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`}
                        href="#work"
                        onClick={() => handleLinkClick('#work')}>My works
                    </a>
                    </li>
                    <li><a
                        className={`font-Ovo ${activeLink === '#testimony' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`}
                        href="#testimony"
                        onClick={() => handleLinkClick('#testimony')}>Testimony
                    </a>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='dark' className='w-6' />
                    </button>
                    <a href="#contact" className={`hidden lg:flex items-center gap-3 px-2 py-1 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 ${activeLink === '#contact' ? 'bg-green-700' : 'hover:text-green-500 focus:text-blue-500'}`} onClick={() => handleLinkClick('#contact')}>
                        Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='A' className='w-3' />
                    </a>
                    <a href="https://www.upwork.com/ab/account-security/login?redir=%2Fnx%2Ffind-work%2F" target="_blank" rel="noopener noreferrer" className={`hidden lg:flex items-center gap-3 px-2 py-2 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 ${activeLink === 'https://www.upwork.com/ab/account-security/login?redir=%2Fnx%2Ffind-work%2F' ? 'bg-green-700' : 'hover:bg-green-800 focus:text-blue-500'}`} onClick={() => handleLinkClick('https://www.upwork.com/ab/account-security/login?redir=%2Fnx%2Ffind-work%2F')}>
                        <Image src={assets.upwork} alt='A' className='w-20' />
                    </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu' className='w-4' />
                    </button>
                </div>

                {/* mobile menu */}
                <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed ${isMenuOpen ? 'right-0' : '-right-64'} top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white`}>
                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='X' className='w-5 cursor-pointer hover:bg-red-500' />
                    </div>
                    <li><a className={`font-Ovo ${activeLink === '#top' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`} onClick={() => handleLinkClick('#top')} href="#top">Home</a></li>
                    <li><a className={`font-Ovo ${activeLink === '#about' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`} onClick={() => handleLinkClick('#about')} href="#about">About me</a></li>
                    <li><a className={`font-Ovo ${activeLink === '#services' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`} onClick={() => handleLinkClick('#services')} href="#services">Services</a></li>
                    <li><a className={`font-Ovo ${activeLink === '#work' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`} onClick={() => handleLinkClick('#work')} href="#work">My work</a></li>
                    <li><a className={`font-Ovo ${activeLink === '#testimony' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`} onClick={() => handleLinkClick('#testimony')} href="#testimony">Testimony</a></li>
                    <li><a className={`font-Ovo ${activeLink === '#contact' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`} onClick={() => handleLinkClick('#contact')} href="#contact">Contact me</a></li>
                    <li><a className={`font-Ovo ${activeLink === 'https://www.upwork.com/ab/account-security/login?redir=%2Fnx%2Ffind-work%2F' ? 'text-green-500' : 'hover:text-green-500 focus:text-blue-500'}`} onClick={() => handleLinkClick('https://www.upwork.com/ab/account-security/login?redir=%2Fnx%2Ffind-work%2F')} href="https://www.upwork.com/ab/account-security/login?redir=%2Fnx%2Ffind-work%2F">Upwork</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar