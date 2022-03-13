import * as React from 'react';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';


export const About = ({})=>{
    return (
        <section className='about py-20 w-full flex justify-center gradient-bg-about' id='about'>
            <div className="lg:w-9/12">
                <h1 className='text-center text-gradient-black font-bold text-5xl'>
                    About Us
                </h1>
                <div className="mt-20 mx-6 flex flex-col-reverse md:flex-row justify-center items-center">
                    <p className='md:w-9/12 lg:w-8/12 w-full text-justify'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <HiOutlineQuestionMarkCircle className='text-9xl md:w-3/12 lg:w-4/12 text-center text-gray-500 mb-10 md:mb-0' />
                </div>
            </div>
        </section>
    )
}