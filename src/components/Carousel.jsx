import { useState, useEffect, useCallback, createContext, useContext } from 'react';

import './Carousel.css';

const CarouselContext = createContext(null);

export const CarouselItem = ({img, title, animation, color, className})=>{
    const {timing, duration} = useContext(CarouselContext)

    if (animation === undefined){
         var { animation } = useContext(CarouselContext)
    }

    return (
        <div className={`relative carouselItem w-full min-h-screen ${animation} ${className}`}>
            {img && (
                <img src={img} className="w-full min-h-screen object-cover object-center" loading="lazy" alt="carousel item"/>
            )}
            {title && (
                <h1 className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold text-center text-gradient-${color ? color : 'white'}`}>{title}</h1>
            )}
        </div>
    )
}

export const Carousel = ({timing=0.5, duration=5000, animation='fade-in', autoplay=false, className, children})=>{
    const [currentItem, setCurrentItem] = useState(0)

    const onSetCurrentItem = useCallback((dir)=>{
        if (dir === 'next'){
            if (currentItem < children.length-1) setCurrentItem(currentItem+1)
            else setCurrentItem(0)
        }
        else {
            if (currentItem > 0) setCurrentItem(currentItem-1)
            else setCurrentItem(3)
        }
    })

    useEffect(()=>{
        if (autoplay){
            const playInterval = setInterval(()=>{
            onSetCurrentItem('next')
        },5000)
        return ()=> clearInterval(playInterval)
        }
    },[currentItem])

    /*
    setInterval(()=>{
        onSetCurrentItem('next')
    },5000)
    */

    return (
        <CarouselContext.Provider value={{timing, duration, animation}}>
            <div className={`carousel relative min-h-screen min-w-full ${className}`}>
                <div className="controls absolute w-full top-1/2 z-0 flex justify-between px-5">
                    <button 
                        className="p-2 text-gray-100 text-3xl bg-slate-900 hover:bg-black rounded-lg"
                        onClick={()=>{onSetCurrentItem('prev')}}>&lt;</button>
                    <button 
                        className="p-2 text-gray-100 text-3xl bg-slate-900 hover:bg-black rounded-lg"
                        onClick={()=>{onSetCurrentItem('next')}}>&gt;</button>
                </div>
                {children[currentItem]}
                <div className='indicators flex items-end absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-20 z-30'>
                    {children.map((child, index)=>(
                        <div key={index}
                            className={`indicator bg-white border-white mx-2 cursor-pointer ${currentItem === index ? 'active' : ''}`}
                            onClick={()=>{setCurrentItem(index)}}
                        ></div>
                    ))}
                </div>
            </div>
        </CarouselContext.Provider>
    )
}