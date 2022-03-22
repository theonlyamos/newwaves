import * as React from 'react';
import { IoCloudDoneOutline, IoCodeSlashOutline } from 'react-icons/io5';

import Img4 from '../../assets/images/photo-1643639779508-4c60952c058c.jpg';

export const Services = ({})=>{
    return (
        <section className='services w-full flex flex-col justify-center' id='services'>
            <div className='py-20 w-full'>
                <h1 className='text-center text-4xl'>
                    Our <strong>Services</strong>
                </h1>
            </div>
            <ul className="service-list w-full min-h-screen grid md:grid-cols-2 md:grid-rows-2 mx-auto">
                <li className='relative w-full h-full mb-5 py-7 bg-gray-100 flex flex-col items-center rounded-none'>
                    <IoCodeSlashOutline className='text-7xl text-gray-600'></IoCodeSlashOutline>
                    <h1 className='text-2xl uppercase text-gray-700 px-10 text-center'><strong>Website Design &amp; Development</strong></h1>
                    <p className="mt-4 px-3">Renowned for being the best of the best web design companies in Ghana, our web designers and web developers are privileged to work with some of the best brands and companies in Ghana. From startup companies to award-winning clients, our website design company helps businesses with professional  & responsive websites designed with usability and performance in mind, guaranteed to affect the bottom line. We convert visitors into leads and customers by building your business website with proven standards and technologies.
                    </p>
                </li>
                <li className='relative w-full h-full mb-5 bg-yellow-200 flex justify-center items-center rounded-none'>
                    <img src={Img4} alt="Image Holder" className='absolute top-0 left-0 min-h-full object-cover opacity-50'/>
                    <h1 className='text-gradient-black text-4xl px-10 text-center z-10'>Mobile App <br/>Development</h1>
                </li>
                <li className='relative w-full h-full mb-5 bg-green-200 flex flex-col justify-center items-center rounded-none'>
                    <IoCloudDoneOutline className='text-7xl text-gray-600'></IoCloudDoneOutline>
                    <h1 className='text-gradient-blue text-4xl px-10 text-center'>Cloud Migration <br/>&amp; <br/>Management</h1>
                </li>
                <li className='w-full h-full mb-5 bg-slate-200 flex justify-center items-center rounded-none'>
                    <h1 className='text-gradient-green text-4xl px-10 text-center'>Hardware <br/>&amp; <br/>Networking</h1>
                </li>
            </ul>
        </section>
    )
}
