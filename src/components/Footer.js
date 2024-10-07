import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Footer = () => {

  return (
    <>
      {/* Footer */}
      <section className="footer animate-on-scroll bg-black">
        <footer className="flex items-center  h-[380px]">
          <div className="flex flex-col md:flex-row items-center justify-center container mx-auto w-[100%]">
            <div className='w-[100%] flex justify-center'>
              <div className="main_footer ms-10">
                <p className="text-[#fb5252]">Articles</p>
                <h1 className="text-white text-3xl md:text-4xl">How if we can help?</h1>
                <div className="md:w-[70%] foot_det text-white mt-8 w-[100%]">
                  <p className="m-0 text-sm">Office - 121 King Street, Melbourne Victoria 3000 Australia.</p>
                  <div className="foot_det text-center sm:text-left">
                    <p className="text-white mb-2 text-sm">example@mail.com</p>
                    <p className="text-white text-sm">FB - TW - INS - LIN</p>
                  </div>
                </div>
              </div>
              <div className='text-white w-1/3 flex text-center justify-center'>
                <div className='mx-5 flex flex-col justify-end'>
                  <div className='leading-7'>
                    <NavLink
                      to="/"
                      activeClassName="text-blue-500"
                      exact
                      className="relative group"
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  </div>
                  <div className='leading-7'>
                    <NavLink
                      to="/AboutUs"
                      activeClassName="text-blue-500"
                      className="relative group"
                    >
                      About
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  </div>
                  <div className='leading-7'>
                    <NavLink
                      to="/services"
                      activeClassName="text-blue-500"
                      className="relative group"
                    >
                      Service
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  </div>
                </div>
                <div className='mx-5 flex flex-col justify-end'>
                  <div className='leading-7'>
                    <NavLink
                      to="/portfolio"
                      activeClassName="text-blue-500"
                      className="relative group"
                    >
                      Portfolio
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  </div>
                  <div className='leading-7'>
                    <NavLink
                      to="/Contact"
                      activeClassName="text-blue-500"
                      className="relative group"
                    >
                      Contact
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 follow_links flex item-center flex-col justify-end ">
                <div className='text-xl text-white text-center mb-4'>
                  <h3>Social Media</h3>
                </div>
                <p className="text-white text-center mb-4">
                  Stay connected with us on social media! Follow us for the latest updates, news, and insights.
                </p>
                <div className='flex items-center justify-center'>
                  <a
                    href="#"
                    className="text-white text-2xl mx-3 transition-colors duration-300 hover:text-[#E4405F]"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-white text-2xl mx-3 transition-colors duration-300 hover:text-[#FF0000]"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="#"
                    className="text-white text-2xl mx-3 transition-colors duration-300 hover:text-[#1877F2]"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-white text-2xl mx-3 transition-colors duration-300 hover:text-[#1DA1F2]"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </footer>
        <div className='copyright p-4'>
          <div className='flex justify-center text-white text-sm'>
            <p>&copy; 2024-2030 HR Company | All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
