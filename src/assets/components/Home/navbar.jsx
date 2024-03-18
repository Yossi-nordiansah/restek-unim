import React, { useEffect, useRef, useState } from 'react';
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
    };

    useEffect(()=>{
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setShowMenu(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[])

    window.addEventListener('scroll', changeBgNav);

    const handleHamburgerMenu = ()=> {
        setShowMenu(!showMenu)
    }

    return (
        <div className={`w-full flex justify-between py-3 md:py-0 items-center z-20 px-3 xs:px-5 fixed border-b duration-150 border-gray-50 ${changeColorNavbar ? 'backdrop-blur-sm bg-blue-950/70' : 'bg-transparent'}`}>
            <div className='flex gap-2 xs:gap-3  items-center saturate-150'>
                <img src={logo} alt="" className='w-11 ' />
                <p className='poppins-bold text-white md:text-3xl xs:text-2xl text-xl'>RESTEK UNIM</p>
            </div>
            <div className='md:flex hidden'>
                <ul className={`flex items-center text-white montserrat-semibold `}>
                    <li className='px-3 py-5 group'>
                        <Link to={"/restek-unim/"}>
                            Home
                        </Link>
                        <div className='w-0 group-hover:w-full bg-blue-600 h-[1px] duration-300'></div>
                    </li>
                    <li className='px-3 py-5 group'>
                        <Link to={"/restek-unim/news"}>News</Link>
                        <div className='w-0 group-hover:w-full bg-blue-600 h-[1px] duration-300'></div>
                    </li>
                    <li className='px-3 py-5 group'>
                        <Link to={"/restek-unim/partner"}>Partner</Link>
                        <div className='w-0 group-hover:w-full bg-blue-600 h-[1px] duration-300'></div>
                    </li>
                    <li className='px-3 py-5 group'>
                        <Link to={"/restek-unim/gallery"}>Gallery</Link>
                        <div className='w-0 group-hover:w-full bg-blue-600 h-[1px] duration-300'></div>
                    </li>
                    <li className='px-3 py-5 group'>
                        <Link to={"/restek-unim/about"}>About</Link>
                        <div className='w-0 group-hover:w-full bg-blue-600 h-[1px] duration-300'></div>
                    </li>
                    <li className='px-3 py-5 '><Link to={"/restek-unim/login"} className='flex montserrat-bold gap-1 items-center'>
                        <p>Log In</p>
                        <img src={user} alt="" className='w-9' />
                    </Link></li>
                </ul>
            </div>
            <div ref={menuRef} className='md:hidden h-6 w-6'>
                <div onClick={handleHamburgerMenu}>
                    <img src={showMenu? closeMenu : burgerMenu} alt="" className='w-6 ' /> 
                </div>
                <div className={`bg-blue-950/90 mt-8 w-32 ${showMenu? '-translate-x-20' : 'translate-x-12'} duration-300 rounded-l-md`}>
                    <ul className='flex flex-col  text-white poppins-semibold'>
                        <li className='border-b border-white py-4 pl-8'><Link to={"/restek-unim/"}>Home</Link></li>
                        <li className='border-y border-white py-4 pl-8'><Link to={"/restek-unim/news"}>News</Link></li>
                        <li className='border-y border-white py-4 pl-8'><Link to={"/restek-unim/partner"}>Partner</Link></li>
                        <li className='border-y border-white py-4 pl-8'><Link to={"/restek-unim/gallery"}>Gallery</Link></li>
                        <li className='border-y border-white py-4 pl-8'><Link to={"/restek-unim/about"}>About</Link></li>
                        <li className='border-t border-white py-4 pl-6'><Link to={"/restek-unim/login"} className='flex montserrat-bold gap-1 items-center'>
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