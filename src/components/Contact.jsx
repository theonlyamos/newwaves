import * as React from 'react';
import { FaBlenderPhone, FaEnvelopeOpenText } from 'react-icons/fa';
import { IoAtOutline, IoCallOutline } from 'react-icons/io5';
import Img4 from '../../assets/images/takoradi-1.png';

export const Contact = ({})=>{
    return (
        <section className='contact relative py-20 w-full min-h-screen flex flex-col gradient-bg-white' id='contact'>
            <img src={Img4} alt="Image Holder" className='absolute top-0 left-0 min-w-full h-full object-cover opacity-40 z-0'/>
            <h1 className='text-center text-4xl z-10'>
                Get <strong>In Touch</strong>
            </h1>
            <div className="mt-20 z-10 w-full lg:w-9/12 mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                <div className="w-full flex flex-col items-center mx-2">
                    <div className="w-96 flex flex-col items-center justify-center">
                        <div className="w-full flex justify-center">
                            <FaBlenderPhone className='text-red-400 text-8xl bg-red-200 p-3 rounded-t-md'></FaBlenderPhone>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <div className="flex justify-center items-center mb-3 p-3 bg-red-200 mt-5 rounded-full">
                                <a href='tel:+233557821030' className="p-3 bg-red-100 rounded-l-full rounded-r-full letter-spacing-1 text-2xl text-red-700">(233) 557 821 030</a>
                                <a href='tel:+233557821030' className="">
                                    <IoCallOutline className='text-gray-600 text-5xl p-3 rounded-full bg-red-100 hover:bg-red-300 hover:text-white'></IoCallOutline>
                                </a>
                            </div>
                            <div className="flex justify-center items-center mb-3 p-3 bg-red-200 mt-5 rounded-full">
                                <a href='tel:+233500918671' className="p-3 bg-red-100 rounded-l-full rounded-r-full letter-spacing-1 text-2xl text-red-700">(233) 500 918 671</a>
                                <a href='tel:+233500918671' className="">
                                    <IoCallOutline className='text-gray-600 text-5xl p-3 rounded-full bg-red-100 hover:bg-red-300 hover:text-white'></IoCallOutline>
                                </a>
                            </div>
                            <div className="flex justify-center items-center mb-3 p-3 bg-red-200 mt-5 rounded-full">
                                <a href='mailto:info@newwaves.tech' className="p-3 bg-red-100 rounded-l-full rounded-r-full letter-spacing-1 text-2xl text-red-700">info@newwaves.tech</a>
                                <a href='mailto:info@newwaves.tech' className="">
                                    <IoAtOutline className='text-gray-600 text-5xl p-3 rounded-full bg-red-100 hover:bg-red-300 hover:text-white'></IoAtOutline>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <FaEnvelopeOpenText className='text-gray-600 text-8xl bg-slate-200 p-3 rounded-t-md'></FaEnvelopeOpenText>
                    <form action="" className='w-96 rounded-md bg-slate-200 p-3'>
                        <div className="flex flex-col mb-3 p-3 bg-slate-100">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" name='name' className='p-3 text-sm letter-spacing-1 focus:outline-none focus:invalid:border focus:invalid:border-red-400' required/>
                        </div>
                        <div className="flex flex-col mb-3 p-3 bg-slate-100">
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input type="email" name='email' className='p-3 text-sm letter-spacing-1 focus:outline-none focus:invalid:border focus:invalid:border-red-400' required/>
                        </div>
                        <div className="flex flex-col mb-3 p-3 bg-slate-100">
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea name='email' className='p-3 text-sm letter-spacing-1 focus:outline-none focus:invalid:border focus:invalid:border-red-400' minLength={30} required></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className='bg-slate-500 hover:bg-slate-700 py-2 px-5 rounded-md text-white text-lg font-bold'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
