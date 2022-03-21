import * as React from 'react';
import { HiChartPie, HiCloud, HiOutlineQuestionMarkCircle, HiShieldCheck } from 'react-icons/hi';


export const About = ({})=>{
    return (
        <section className='about w-full flex-col flex justify-center items-center gradient-bg-about' id='about'>
            <div className="w-full py-20 lg:pb-0 bg-gray-100 mx-6 grid sm:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 space-y-9">
                <div className="flex flex-col justify-center items-center mt-10 py-0">
                    <HiShieldCheck className='text-gray-500 text-6xl'></HiShieldCheck>
                    <h3 className='text-extrabold text-xl uppercase font-open-sans'>Security</h3>
                    <p className="mt-3 px-3">We development your product with security in mind. Our developers make sure your website/mobile app is secure before put out there.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <HiChartPie className='text-gray-500 text-6xl'></HiChartPie>
                    <h3 className='text-extrabold text-xl uppercase font-open-sans'>Affordability</h3>
                    <p className='mt-3 px-3'>{"We've got something for everyone. Our prices are so affordable that everyone can get something for whatever they have. No matter how little you have."}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <HiCloud className='text-gray-500 text-6xl'></HiCloud>
                    <h3 className='text-extrabold text-xl font-open-sans uppercase'>Availability</h3>
                    <p className="mt-3 px-3">Our office is open 24/7 and always there to answer any questions you may have and help out anyway we can. {"Don't be shy to contact us."}</p>
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
