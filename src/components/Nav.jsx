import { useState } from "react";
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

export const Brand = ({logo, title, url, className}) => {
  return (
    <a href={url} title={title} className={` ${className}`}>
      {logo && (<img src={logo} alt={title}/>)}
      {title && (
        <span>{title}</span>
      )}
    </a>
  )
}

export const NavItem = ({
  url,
  title,
  active = false,
  className
}) => {
  return (
    <li className={`${className}`}>
      <a
        href={url}
        title={title}
        className={`mx-2 ${active
        ? 'font-bold'
        : ''}`}
        style={{'letterSpacing': '1px'}}
        >
        {title}
      </a>
    </li>
  )
}

export const Nav = ({className, children}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const screenWidth = document.documentElement.clientWidth
    console.log(screenWidth)
    return (
        <>
            <ul className={`list-none p-0 hidden md:flex`}>
                {children}
            </ul>
            {menuOpen && (
                <ul className={`list-none p-0 z-50 animate-slide-in flex flex-col justify-center items-center absolute bg-white text-black top-0 -right-10 min-h-screen w-full md:w-1/2'`}>
                    <FaTimes 
                        className='cursor-pointer text-black absolute top-5 left-5' 
                        fontSize={'40px'} 
                        onClick={()=>{setMenuOpen(false)}}
                    />
                    {children}
                    
                </ul>
            )}
            {!menuOpen && (
                <HiMenu 
                    className='cursor-pointer text-gray-200 hover:text-white md:hidden' 
                    fontSize={'40px'} 
                    onClick={()=>{setMenuOpen(true)}}
                />
            )}
        </>
    )
}

export const NavBar = ({className, children}) => {
  return (
    <>
        <nav className={`justify-between z-50 text-white ${className}`}>
            {children}
        </nav>
    </>
  )
}
