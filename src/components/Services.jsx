import * as React from 'react';


export const Services = ({})=>{
    return (
        <section className='services py-20 w-full flex flex-col justify-center gradient-bg-services' id='services'>
            <div>
                <h1 className='text-center font-bold text-5xl text-gradient-blue'>
                    Our Services
                </h1>
            </div>
            <ul className="service-list mt-20 list-none md:w-9/12 lg:w-8/12 w-full px-5 min-h-screen grid md:grid-cols-2 md:grid-rows-2 mx-auto">
                <li className='w-full h-full mb-5 red-glassmorphism flex justify-center items-center'>
                    <h1 className='text-gradient-red text-4xl px-10 text-center'>Website Design &amp; Development</h1>
                </li>
                <li className='w-full h-full mb-5 yellow-glassmorphism flex justify-center items-center'>
                    <h1 className='text-gradient-yellow text-4xl px-10 text-center'>Mobile App Development</h1>
                </li>
                <li className='w-full h-full mb-5 green-glassmorphism flex justify-center items-center'>
                    <h1 className='text-gradient-green text-4xl px-10 text-center'>Cloud Migration &amp; Managment</h1>
                </li>
                <li className='w-full h-full mb-5 white-glassmorphism flex justify-center items-center'>
                    <h1 className='text-gradient-white text-4xl px-10 text-center'>Hardware &amp; Networking</h1>
                </li>
            </ul>
        </section>
    )
}