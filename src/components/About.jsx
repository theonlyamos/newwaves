import { IoShieldCheckmarkOutline, IoPieChartOutline, IoCloudOfflineOutline } from 'react-icons/io5';

export const About = ({})=>{
    return (
        <section className='w-full bg-gray-100' id='about'>
            <div className='pt-20 w-full lg:w-9/12 mx-auto'>
                <h1 className='text-center text-4xl'>
                    About <strong>Us</strong>
                </h1>
                <p className="mt-5 px-3 text-lg letter-spacing-1" style={{lineHeight: '1.5rem'}}>
                    <strong>New Waves Technologies</strong> is a software development company specializing in websites and android
applications development. Our mission is to make the development of software
simple, fast and affordable in Africa.
                    </p>
            </div>
            <div className="pt-10 w-full lg:w-9/12 pb-20 mx-auto grid md:grid-cols-2 space-y-5">
                <div className="flex flex-col justify-center items-center py-0">
                    <IoShieldCheckmarkOutline className='text-gray-500 text-6xl'></IoShieldCheckmarkOutline>
                    <h3 className='text-extrabold text-xl uppercase font-open-sans'>Security</h3>
                    <p className="mt-5 px-3">
                    <strong>Your security is our top priority.</strong> Our developers develop your application with security in mind; ensuring your website/mobile app is secure before being published. 
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <IoPieChartOutline className='text-gray-500 text-6xl'></IoPieChartOutline>
                    <h3 className='text-extrabold text-xl uppercase font-open-sans'>Affordability</h3>
                    <p className='mt-5 px-3'>
                        <strong>We've got something for everyone</strong>. Our prices are so affordable that everyone can get something for whatever they have. No matter how little you have.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <IoCloudOfflineOutline className='text-gray-500 text-6xl'></IoCloudOfflineOutline>
                    <h3 className='text-extrabold text-xl font-open-sans uppercase'>Availability</h3>
                    <p className="mt-5 px-3"><strong>Our office is open 24/7</strong> and always there to answer any questions you may have and help out anyway we can. {"Don't be shy to contact us."}</p>
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
