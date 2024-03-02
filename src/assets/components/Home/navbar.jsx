import React, { useRef, useState } from 'react';
import logo from '../../image/logo-restek.png';
import user from '../../image/user-circle.svg';
import burgerMenu from '../../image/burger-icons.svg'
import closeMenu from '../../image/closeMenu.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [changeColorNavbar, setChangeColorNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef()

    const changeBgNav = () => {
        if (window.scrollY >= 15) {
            setChangeColorNavbar(true)
        } else {
            setChangeColorNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBgNav);

    const handleHamburgerMenu = ()=> {
        setShowMenu(!showMenu)
    }

    return (
        <div className={`w-full flex justify-between items-center py-3 z-10 px-3 xs:px-5 fixed border-b duration-150 border-gray-50 ${changeColorNavbar ? 'backdrop-blur-sm bg-blue-950/50' : 'bg-transparent'}`}>
            <div className='flex gap-2 xs:gap-3  items-center saturate-150'>
                <img src={logo} alt="" className='w-11 ' />
                <p className='poppins-bold text-white md:text-3xl xs:text-2xl text-xl'>RESTEK UNIM</p>
            </div>
            <div className='md:flex hidden'>
                <ul className={`flex gap-6 items-center text-white montserrat-semibold `}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/partner">Partner</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login" className='flex montserrat-bold gap-2 items-center'>
                        <p>Log In</p>
                        <img src={user} alt="" className='w-9' />
                    </Link></li>
                </ul>
            </div>
            <div className='md:hidden h-6 w-6'>
                <div ref={menuRef} onClick={handleHamburgerMenu}>
                    <img src={showMenu? closeMenu : burgerMenu} alt="" className='w-6 ' /> 
                </div>
                <div className={`bg-blue-950/90 mt-8 w-32 ${showMenu? '-translate-x-20' : 'translate-x-12'} duration-300 rounded-l-md`}>
                    <ul className='flex flex-col  text-white poppins-semibold'>
                        <li className='border-b border-white py-4 pl-8'><Link to="/">Home</Link></li>
                        <li className='border-y border-white py-4 pl-8'><Link to="/news">News</Link></li>
                        <li className='border-y border-white py-4 pl-8'><Link to="/partner">Partner</Link></li>
                        <li className='border-y border-white py-4 pl-8'><Link to="/gallery">Gallery</Link></li>
                        <li className='border-y border-white py-4 pl-8'><Link to="/about">About</Link></li>
                        <li className='border-t border-white py-4 pl-6'><Link to="/login" className='flex montserrat-bold gap-1 items-center'>
                            <p>Log In</p>
                            <img src={user} alt="" className='w-5' />
                        </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar