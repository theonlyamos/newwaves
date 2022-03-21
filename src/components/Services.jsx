import * as React from 'react';


export const Services = ({})=>{
    return (
        <section className='services w-full flex flex-col justify-center' id='services'>
            <div className='py-20 w-full'>
                <h1 className='text-center text-4xl h-20'>
                    Our <strong>Services</strong>
                </h1>
            </div>
            <ul className="service-list w-full min-h-screen grid md:grid-cols-2 md:grid-rows-2 mx-auto">
                <li className='w-full h-full mb-5 bg-red-200 flex justify-center items-center rounded-none'>
                    <h1 className='text-gradient-red text-4xl px-10 text-center'>Website Design <br/>&amp; <br/>Development</h1>
                </li>
                <li className='w-full h-full mb-5 bg-yellow-200 flex justify-center items-center rounded-none'>
                    <h1 className='text-gradient-black text-4xl px-10 text-center'>Mobile App <br/>Development</h1>
                </li>
                <li className='w-full h-full mb-5 bg-green-200 flex justify-center items-center rounded-none'>
                    <h1 className='text-gradient-blue text-4xl px-10 text-center'>Cloud Migration <br/>&amp; <br/>Management</h1>
                </li>
                <li className='w-full h-full mb-5 bg-slate-200 flex justify-center items-center rounded-none'>
                    <h1 className='text-gradient-green text-4xl px-10 text-center'>Hardware <br/>&amp; <br/>Networking</h1>
                </li>
            </ul>
        </section>
    )
}
