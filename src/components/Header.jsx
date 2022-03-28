//import { Carousel, CarouselItem } from './Carousel';
import { NavBar, Nav, NavItem, Brand } from './Nav';

import Logo from '../../assets/logo/LOGO ONLY BLACK1.png';
import Logo1 from '../../assets/logo/LOGO WHITE1.png';

import Img1 from '../../assets/images/photo-1642425146609-6c8ff4589d18.jpg';
import Img2 from '../../assets/images/photo-1644329770639-1a20809b82a3.jpg';
import Img3 from '../../assets/images/photo-1643101811638-c44424d967fb.jpg';
import Img4 from '../../assets/images/photo-1643639779508-4c60952c058c.jpg';

import { HiArrowRight } from 'react-icons/hi';

export const Header = ({})=>{

    return (
        <header className='relative flex justify-center gradient-bg-welcome'>
            <NavBar className={'absolute w-full px-5 sm:px-10 md:px-20 flex justify-between items-center z-50 bg-white opacity-80'}>
                <Brand logo={Logo} url='/' className={'z-10 filter-grayscale'} style={{maxWidth: '60px', height: 'auto'}}/>
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
            <div className={`relative w-full md:w-11/12 lg:w-10/12 px-5 text-center md:text-left flex flex-col justify-center min-h-screen`}>
                {/*<img src={Img4} className="absolute top-0 left-0 min-h-screen"/>*/}
                <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className="flex flex-col">
                        <h1 className={`text-gradient-red text-5xl fade-in z-30`} style={{lineHeight: '4rem'}}>
                            Bring Your Ideas to Life
                        </h1>
                        <div className='mt-2 z-30 uppercase'>
                            <h3 className={`text-green-600 text-2xl fade-in letter-spacing-1 animate-pulse`}>Realise Your Vision.</h3>
                        </div>
                        <a href="/" className="flex justify-center items-center animate-pulse mx-auto md:mx-0 px-7 py-3 hover:shadow-lg text-md bg-transparent hover:bg-black border-2 border-black mt-2 text-black hover:text-white uppercase w-fit rounded-lg">
                            Learn More
                            <HiArrowRight className='ml-3'/>
                        </a>
                    </div>
                    <Brand logo={Logo1} url='/' className={'w-8/12 sm:w-5/12 md:w-6/12 lg:w-5/12'} style={{height: 'auto'}}/>
                </div>
                <div className="absolute text-center text-4xl bottom-5 right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-7 border-2 border-black rounded-2xl rotate-180 animate-pulse">
                    .
                </div>
            </div>
        </header>
    )
}
