import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500"
    >
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and everyday
            vehicles for all your driving needs.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a href="#"><img src={assets.facebook_logo} alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src={assets.instagram_logo} alt="Instagram" className="w-5 h-5" /></a>
            <a href="#"><img src={assets.twitter_logo} alt="Twitter" className="w-5 h-5" /></a>
            <a href="#"><img src={assets.gmail_logo} alt="Gmail" className="w-5 h-5" /></a>
          </div>
        </motion.div>

        {/* Sections */}
        {[
          {
            title: 'Company',
            links: ['Home', 'Browse Cars', 'List Your Car', 'About Us', 'Partners']
          },
          {
            title: 'Quick Links',
            links: ['Home', 'Browse Cars', 'List Your Car', 'About Us']
          },
          {
            title: 'Resources',
            links: ['Help Center', 'Terms of Service', 'Privacy Policy', 'Insurance']
          },
          {
            title: 'Contact',
            links: ['1234 Luxury Drive', 'India Raipur', '+91 1234567899', 'info@example.com']
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <h2 className="text-base font-medium text-gray-800 uppercase">{section.title}</h2>
            <ul className="mt-3 flex-col gap-1">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row gap-2 items-center justify-between py-5"
      >
        <p>© {new Date().getFullYear()} Brand. All Rights Reserved.</p>

        <ul className="flex items-center gap-4">
          <li><a href="#">Privacy</a></li>
          <li>|</li>
          <li><a href="#">Terms</a></li>
          <li>|</li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
