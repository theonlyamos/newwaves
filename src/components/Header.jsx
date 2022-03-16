import { Carousel, CarouselItem } from './Carousel';
import { NavBar, Nav, NavItem, Brand } from './Nav';

import Logo from '../../assets/icons/android/android-launchericon-96-96.png';

import Img1 from '../../assets/images/photo-1642425146609-6c8ff4589d18.jpg';
import Img2 from '../../assets/images/photo-1644329770639-1a20809b82a3.jpg';
import Img3 from '../../assets/images/photo-1643101811638-c44424d967fb.jpg';
import Img4 from '../../assets/images/photo-1643639779508-4c60952c058c.jpg';

export const Header = ({})=>{

    return (
        <header className='relative flex justify-center gradient-bg-white'>
            <NavBar className={'absolute container px-5 sm:px-10 md:px-20 pt-7 flex justify-between items-center z-50'}>
                <Brand logo={Logo} url='/' className={'rotate-90 z-10'}/>
                <Nav className={'z-50 text-white'}>
                    <NavItem url='/' title='Home' active={true} className="mt-5 text-black-500"/>
                    <NavItem url='/' title='About' className="mt-5 text-black-500"/>
                    <NavItem url='/' title='Services' className="mt-5 text-black-500"/>
                    <NavItem url='/' title='Contact Us' className="mt-5 text-black-500"/>
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
            <div className={`flex flex-col justify-center  min-h-screen w-full`}>
                <h1 className={`text-5xl text-center font-extrabold text-gradient-red fade-in`}>
                    New Waves Technologies
                </h1>
                <h3 className={`w-full text-3xl text-center italic text-gradient-yellow fade-in`}>Discovering limits</h3>
            </div>
        </header>
    )
}
