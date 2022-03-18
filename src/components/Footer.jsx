import { Brand } from './Nav';

import Logo from '../../assets/icons/android/android-launchericon-96-96.png';
import { FaFacebookSquare, FaGooglePlusSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

export const Footer = ({})=>{
    const year = (new Date()).getFullYear()
    return (
        <footer className='footer pt-10 w-full gradient-bg-footer' id='footer'>
            <div className='w-full px-5 sm:px-10 md:px-20 flex justify-between items-center'>
                <Brand logo={Logo} url='/' className={'rotate-90 z-10 filter-grayscale'}/>
                <div className="flex space-x-4">
                    <a href="/">
                        <FaFacebookSquare className='text-white' fontSize={'2.5rem'}/>
                    </a>
                    <a href="">
                        <FaInstagramSquare className='text-white' fontSize={'2.5rem'}/>
                    </a>
                    <a href="">
                        <FaGooglePlusSquare className='text-white' fontSize={'2.5rem'}/>
                    </a>
                    <a href="">
                        <FaTwitterSquare className='text-white' fontSize={'2.5rem'}/>
                    </a>
                </div>
            </div>
            <div className="w-full py-5 mt-5 text-center text-white letter-spacing-1 text-xs border-t-2 border-slate-600 bg-black">
                <span>Copyright&copy;{year} New Waves Technologies. All Rights Reserved.</span>
            </div>
        </footer>
    )
}