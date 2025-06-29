"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faYoutube, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


export default function FooterSection() {
  return (
    <div>
   <div className="text-center space-y-4 z-10 mt-21">
    <h2 className="text-2xl md:text-3xl font-light">Need more clarity?</h2>
    <h3 className="text-2xl md:text-3xl font-light">Get in touch!</h3>
    <button className="mt-6 bg-yellow-500 hover:bg-white text-black font-medium px-6 py-3 rounded-full transition">
      Book a demo →
    </button>
  </div>

  
  <div className="mt-20 px-6 md:px-12 py-6 z-10 bg-transparent">
    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 ">
      <p className="mb-4 md:mb-0">© 2024 All Rights Reserved</p>
      
      <div className="flex space-x-4">
      <FontAwesomeIcon icon={faLinkedinIn} className="text-white hover:bg-yellow-500" />
      <FontAwesomeIcon icon={faYoutube} className="text-white hover:bg-yellow-500" />
      <FontAwesomeIcon icon={faBehance} className="text-white hover:bg-yellow-500" />
      <FontAwesomeIcon icon={faDribbble} className="text-white hover:bg-yellow-500" />
      <FontAwesomeIcon icon={faCopyright} className="text-white hover:bg-yellow-500" />
    </div>
   
    </div>
  </div>
  <div className='fixed bottom-0 right-0 w-full h-screen z-0'> 
    <img
    src="/bricks.jpg"
    alt="background2"
    className="w-full h-[200px] object-cover"
  />
  </div>
</div>


  );
}
