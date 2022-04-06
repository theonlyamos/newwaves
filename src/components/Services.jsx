import { IoCloudDoneOutline, IoCodeSlashOutline } from 'react-icons/io5';

import MobAppDevBGImg from '../../assets/images/photo-1643639779508-4c60952c058c.jpg';
import WebDevBGImg from '../../assets/images/ferenc-almasi-eYpcLDXHVb0-unsplash.jpg'
import SocialMediaBGImg from '../../assets/images/merakist-CNbRsQj8mHQ-unsplash.jpg'
import GraphicDesBGImg from '../../assets/images/emily-bernal-v9vII5gV8Lw-unsplash.jpg'
import CloudComputingBGImg from '../../assets/images/cloudcomputing.jpg'

export const Services = ({})=>{
    return (
        <section className='services w-full flex flex-col' id='services'>
            <div className='py-20 w-full'>
                <h1 className='text-center text-4xl'>
                    Our <strong>Services</strong>
                </h1>
            </div>
            <ul className="service-list w-full grid md:grid-cols-2">
                <li className='relative px-10 w-full h-full bg-gray-100 flex flex-col rounded-none space-y-6' style={{minHeight: '50vh'}}>
                    <h3 className='mt-9 uppercase text-2xl letter-spacing-1 font-open-sans'><strong>WEB SERVICES</strong></h3>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Website Design</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Web Development</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">UX/UI Design</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Ecommerce</li>
                    </ul>
                </li>
                <li className='relative w-full bg-yellow-200 flex justify-center items-center rounded-none' style={{backgroundImage: `url(${WebDevBGImg})`, backgroundSize: 'cover', minHeight: '50vh'}}>
                    <div className="w-full h-full backdrop-blur-sm backdrop-brightness-50 flex items-center justify-center">
                        <h1 className='text-gradient-white font-bold text-4xl px-10 text-center z-10'>Website Design <br/>&amp;<br/>Development</h1>
                    </div> 
                </li>
                <li className='relative w-full h-full flex justify-center items-center rounded-none' style={{backgroundImage: `url(${MobAppDevBGImg})`, backgroundSize: 'cover', minHeight: '50vh'}}>
                    <div className="w-full h-full backdrop-blur-sm backdrop-brightness-50 flex items-center justify-center">
                        <h1 className='text-gradient-blue font-bold text-4xl px-10 text-center z-10'>Mobile App <br/>Development</h1>
                    </div> 
                </li>
                <li className='relative px-10 w-full bg-blue-100 flex flex-col rounded-none space-y-6' style={{minHeight: '50vh'}}>
                    <h3 className='mt-9 uppercase text-2xl letter-spacing-1 font-open-sans'><strong>Mobile Applications</strong></h3>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">App Design</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">App Development</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">UX/UI Design</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">App Store Publishing</li>
                    </ul>
                </li>
                <li className='relative px-10 w-full h-full bg-red-100 flex flex-col rounded-none space-y-6' style={{minHeight: '50vh'}}>
                    <h3 className='mt-9 uppercase text-2xl letter-spacing-1 font-open-sans'><strong>Cloud Services</strong></h3>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Cloud Migration</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Cloud Engineering</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Cloud Services Development</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">VPS &amp; VPN Management</li>
                    </ul>
                </li>
                <li className='relative w-full h-full flex justify-center items-center rounded-none' style={{backgroundImage: `url(${CloudComputingBGImg})`, backgroundSize: 'cover', minHeight: '50vh'}}>
                    <div className="w-full h-full backdrop-blur-sm backdrop-brightness-50 flex items-center justify-center">
                        <h1 className='text-gradient-red font-bold text-4xl px-10 text-center z-10'>Cloud Migration <br/>&amp;<br/>Management</h1>
                    </div> 
                </li>
                <li className='relative w-full h-full flex justify-center items-center rounded-none' style={{backgroundImage: `url(${SocialMediaBGImg})`, backgroundSize: 'cover', minHeight: '50vh'}}>
                    <div className="w-full h-full backdrop-blur-sm backdrop-brightness-50 flex items-center justify-center">
                        <h1 className='text-gradient-yellow font-bold text-4xl px-10 text-center z-10'>Social Media <br/>&amp;<br/>Digital Assets Mgt.</h1>
                    </div> 
                </li>
                <li className='relative px-10 w-full h-full bg-yellow-100 flex flex-col rounded-none space-y-6' style={{minHeight: '50vh'}}>
                    <h3 className='mt-9 uppercase text-2xl letter-spacing-1 font-open-sans'><strong>Social Media Services</strong></h3>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Social Media Management</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Social Media Marketing</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Online Campaigns</li>
                    </ul>
                    <ul>
                        <li className="list-inside list-disc text-lg letter-spacing-1">Social Media Ads</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}
