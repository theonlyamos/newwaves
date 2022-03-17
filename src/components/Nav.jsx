import { useState, createContext, useContext, useEffect } from 'react';

import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const NavContext = createContext({
    menuOpen: false,
    setMenuOpen: ()=>{}
});

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
        className={`mx-4 ${active
        ? 'font-bold'
        : ''}`}
        >
        {title}
      </a>
    </li>
  )
}

export const Nav = ({className, children}) => {
    const {menuOpen, setMenuOpen} = useContext(NavContext)

    return (
      <>
          <ul className={`list-none p-0 hidden md:flex`}>
              {children}
          </ul>
          {menuOpen && (
              <ul className={`list-none p-0 z-50 animate-slide-in flex flex-col justify-center items-center absolute bg-white text-black top-0 left-0 min-h-screen w-full md:w-1/2'`}>
                  <FaTimes 
                      className='cursor-pointer text-gray-700 hover:text-black absolute top-5 left-5' 
                      fontSize={'40px'} 
                      onClick={()=>{setMenuOpen(false)}}
                  />
                  {children}
              </ul>
          )}
          {!menuOpen && (
              <HiMenu 
                  className='cursor-pointer text-black hover:text-gray-800 md:hidden' 
                  fontSize={'40px'} 
                  onClick={()=>{setMenuOpen(true)}}
              />
          )}
        </>
    )
}

export const NavBar = ({className, children}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <NavContext.Provider value={{menuOpen, setMenuOpen}}>
      <nav className={`justify-between z-50 text-white ${className} ${menuOpen ? 'min-h-screen' : ''}`}>
          {children}
      </nav>
    </NavContext.Provider>
  )
}
