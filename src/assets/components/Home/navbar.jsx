import React, { useState } from 'react';
import logo from '../../image/logo-restek.png';
import user from '../../image/user-circle.svg';
import burgerMenu from '../../image/burger-icons.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [changeColorNavbar, setChangeColorNavbar] = useState(false);

    const changeBgNav = () => {
        if (window.scrollY >= 15) {
            setChangeColorNavbar(true)
        } else {
            setChangeColorNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBgNav);

    return (
        <div className={`w-full flex justify-between items-center py-3 px-6 fixed border-b duration-150 border-gray-50 ${changeColorNavbar ? 'backdrop-blur-sm bg-blue-950/50' : 'bg-transparent'}`}>
            <div className='flex gap-3 items-center saturate-150'>
                <img src={logo} alt="" className='w-11 ' />
                <p className='font-poppins_semibold text-white text-xl'>RESTEK UNIM</p>
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
                    <img src={user} alt="" className='w-9'/>
                </Link></li>
            </ul>
            </div>
            <div className='md:hidden'> 
                <img src={burgerMenu} alt="" className='w-6 ' />
            </div>
        </div>
    )
}

export default Navbar