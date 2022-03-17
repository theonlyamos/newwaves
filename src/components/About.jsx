import * as React from 'react';
import { HiChartPie, HiCloud, HiOutlineQuestionMarkCircle, HiShieldCheck } from 'react-icons/hi';


export const About = ({})=>{
    return (
        <section className='about w-full flex-col flex justify-center items-center gradient-bg-about' id='about'>
            <div className="w-full py-20 lg:pb-0 bg-gray-100 mx-6 grid sm:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 space-y-9">
                <div className="flex flex-col justify-center items-center">
                    <HiShieldCheck className='text-blue-500 text-9xl'></HiShieldCheck>
                    <h3 className='text-bold text-gradient-blue text-4xl'>Security</h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <HiCloud className='text-green-500 text-9xl'></HiCloud>
                    <h3 className='text-bold text-gradient-green text-4xl'>Availability</h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <HiChartPie className='text-gradient-black text-9xl'></HiChartPie>
                    <h3 className='text-bold text-gradient-black text-4xl'>Affordability</h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <HiShieldCheck className='text-red-500 text-9xl'></HiShieldCheck>
                    <h3 className='text-bold text-gradient-red text-4xl'>Security</h3>
                </div>
            </div>
            {/*
            <div className="lg:w-10/12 w-full lg:mt-0 mt-20 py-20">
                <h1 className='text-center text-gradient-black font-bold text-5xl'>
                    About Us
                </h1>
                <div className="mt-20 mx-6 flex flex-col-reverse md:flex-row justify-center items-center">
                    <p className='md:w-10/12 lg:w-9/12 w-full text-justify'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <HiOutlineQuestionMarkCircle className='text-9xl md:w-2/12 lg:w-3/12 text-center text-gray-500 mb-10 md:mb-0' />
                </div>
            </div>
            */}
        </section>
    )
}