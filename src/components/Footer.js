import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      {/* Footer */}
      <section className="footer animate-on-scroll bg-black">
        <footer className="flex items-center  h-[380px]">
          <div className="container mx-auto w-[77%]">
            <div className="main_footer mb-5">
              <p className="text-[#fb5252]">Articles</p>
              <h1 className="text-white text-3xl md:text-4xl">How if we can help?</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 foot_det text-white">
                <p className="m-0 text-sm">Office - 121 King Street, Melbourne Victoria 3000 Australia.</p>
              </div>
              <div className="md:w-1/3 foot_det text-center">
                <p className="text-white mb-2 text-sm">example@mail.com</p>
                <p className="text-white text-sm">FB - TW - INS - LIN</p>
              </div>
              <div className="md:w-1/3 flex follow_links text-center">
                <a
                  href="#"
                  className="text-white text-2xl mx-2 transition-colors duration-300 hover:text-[#E4405F]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-white text-2xl mx-2 transition-colors duration-300 hover:text-[#FF0000]"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="text-white text-2xl mx-2 transition-colors duration-300 hover:text-[#1877F2]"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-white text-2xl mx-2 transition-colors duration-300 hover:text-[#1DA1F2]"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
