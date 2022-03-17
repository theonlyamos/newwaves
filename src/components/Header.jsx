import { Carousel, CarouselItem } from './Carousel';
import { NavBar, Nav, NavItem, Brand } from './Nav';

import Logo from '../../assets/icons/android/android-launchericon-96-96.png';

import Img1 from '../../assets/images/photo-1642425146609-6c8ff4589d18.jpg';
import Img2 from '../../assets/images/photo-1644329770639-1a20809b82a3.jpg';
import Img3 from '../../assets/images/photo-1643101811638-c44424d967fb.jpg';
import Img4 from '../../assets/images/photo-1643639779508-4c60952c058c.jpg';
import { HiArrowRight } from 'react-icons/hi';

export const Header = ({})=>{

    return (
        <header className='relative flex justify-center gradient-bg-welcome'>
            <NavBar className={'absolute w-full px-5 sm:px-10 md:px-20 flex justify-between items-center z-50 bg-white opacity-80'}>
                <Brand logo={Logo} url='/' className={'rotate-90 z-10 filter-grayscale'}/>
                <Nav className={'z-50 text-white'}>
                    <NavItem url='/' title='Home' active={true} className="mt-5 py-4 md:py-0 w-full md:w-fit hover:bg-gray-200 md:text-xs text-center uppercase text-black letter-spacing-1"/>
                    <NavItem url='/' title='Services' className="mt-5 py-4 md:py-0 w-full md:w-fit hover:bg-gray-200 md:text-xs text-center uppercase text-black letter-spacing-1"/>
                    <NavItem url='/' title='Portfolio' className="mt-5 py-4 md:py-0 w-full md:w-fit hover:bg-gray-200 md:text-xs text-center uppercase text-black letter-spacing-1"/>
                    <NavItem url='/' title='Contact Us' className="mt-5 py-4 md:py-0 w-full md:w-fit hover:bg-gray-200 md:text-xs text-center uppercase text-black letter-spacing-1"/>
                </Nav>
            </NavBar>
            {/*
            <Carousel autoplay={true} animation='slide-left'>
                <CarouselItem title="New Waves Technologies" animation='fade-in' key="0"/>
                <CarouselItem img={Img1} title="Professsional Website Development" color="blue" animation='fade-in' key="1"/>
                <CarouselItem img={Img3} title="Cloud Migration" color="red" animation='slide-in' key="2"/>
                <CarouselItem img={Img4} title="Mobile Applications Development" color="black" animation='slide-left' key="3"/>
            </Carousel>
            */}
            <div className={`w-full md:w-8/12 lg:w-7/12 px-5 text-center md:text-left flex flex-col justify-center min-h-screen`}>
                {/*<img src={Img4} className="absolute top-0 left-0 min-h-screen"/>*/}
                <h1 className={`text-5xl fade-in z-50`} style={{lineHeight: '4rem'}}>
                    New Waves Technologies
                </h1>
                <div className='mt-2 z-50 uppercase'>
                    <h3 className={`text-md fade-in letter-spacing-1`}>Discovering limits, Eroding boundaries</h3>
                </div>
                <a href="/" className="flex justify-center items-center mx-auto md:mx-0 px-7 py-3 animate-pulse hover:animate-none hover:shadow-lg text-md bg-blue-900 hover:bg-blue-800 mt-2 text-gray-300 hover:text-white uppercase w-fit">
                    Learn More
                    <HiArrowRight className='ml-3'/>
                </a>
            </div>
        </header>
    )
}
