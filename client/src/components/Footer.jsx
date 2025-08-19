import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
            <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b">
                <div>
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className="max-w-80 mt-3">Premium car rental service with a wide selection of luxury and everyday vehicals for all your driving needs.</p>

                    <div className="flex items-center gap-3 mt-6">
                    <a href="#" > <img src={assets.facebook_logo} alt="Facebook-logo" className='w-5 h-5' /></a>

                    <a href="#" > <img src={assets.instagram_logo} alt="instagram-logo" className='w-5 h-5' /></a>

                    <a href="#" > <img src={assets.twitter_logo} alt="twitter-logo" className='w-5 h-5' /></a>

                    <a href="#" > <img src={assets.gmail_logo} alt="gmail-logo" className='w-5 h-5' /></a>
                </div>

                </div>

                <div>
                <h2 className='text-base font-medium text-gray-800 uppercase'>COMPANY</h2>
                <ul className='mt-3 flex-col gap-1'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Browse Cars</a></li>
                    <li><a href="#"></a>List Your Car</li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Partners</a></li>
                </ul>
            </div>

            <div>
                <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                <ul className='mt-3 flex-col gap-1'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Browse Cars</a></li>
                    <li><a href="#"></a>List Your Car</li>
                    <li><a href="#">About Us</a></li>
                   
                </ul>
            </div>

            <div>
                <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                <ul className='mt-3 flex-col gap-1'>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#"></a>Privacy Policy</li>
                    <li><a href="#">Insurence</a></li>
                </ul>
            </div>

            <div>
                <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                <ul className='mt-3 flex-col gap-1'>
                    <li>1234 Luxury Drive</li>
                    <li>India Raipur</li>
                    <li>+91 1234567899</li>
                    <li>info@example.com</li>
                </ul>
            </div>
                
            </div>

            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All Right Reserved.
            </p>

            <ul className="flex items-center gap-4">
                <li><a href="#">Privacy</a></li>
                <li>|</li>
                <li><a href="#">Terms</a></li>
                <li>|</li>
                <li><a href="#">Cookies</a></li>
            </ul>

            </div>

            


            
        </div>
  )
}

export default Footer
