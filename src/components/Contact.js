import React from 'react';
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Animation from './Animation';
import NavigationPath from "../pages/NavigationPath";


const Contact = () => {
    return (
        <>
            <div>
                <div class="naviget_path bg-white py-4 px-20">
                    <NavigationPath />
                </div>
                <Animation />
                <hr />
                {/* Contact Section */}
                <section className="py-12 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg shadow-xl animate-on-scroll">
                    <div className="container mx-auto">
                        <div className="mb-6 text-center mt-10">
                            <h2 className="text-4xl font-bold text-gray-700">Get in Touch</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Contact Info */}
                            <div className="bg-gradient-to-r p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <h4 className="text-2xl font-bold text-blue-400 mb-2 animate-on-scroll-right">We Are Happy to Hear from You</h4>
                                <p className="text-gray-700 mb-4 animate-on-scroll-right">
                                    Hello, we are always here to help you anytime. Just fill out the inquiry form or use the contact details.
                                </p>
                                <hr className="my-4 border-gray-300" />
                                <h4 className="text-lg font-semibold text-blue-400 animate-on-scroll-right">Contact Information</h4>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center bg-white p-2 rounded-md shadow-sm transition-transform transform hover:scale-105 animate-on-scroll-right">
                                        <i className="fas fa-map-marker-alt text-blue-500 text-xl mr-3"></i>
                                        <span className="text-gray-800">121 King Street, Melbourne, Australia</span>
                                    </div>
                                    <div className="flex items-center bg-white p-2 rounded-md shadow-sm transition-transform transform hover:scale-105 animate-on-scroll-right">
                                        <i className="fas fa-phone text-blue-500 text-xl mr-3"></i>
                                        <span className="text-gray-800">+61 3 1234 5678</span>
                                    </div>
                                    <div className="flex items-center bg-white p-2 rounded-md shadow-sm transition-transform transform hover:scale-105 animate-on-scroll-right">
                                        <i className="fas fa-envelope text-blue-500 text-xl mr-3"></i>
                                        <span className="text-gray-800">hr8@mail.com</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex space-x-4">
                                    <div className="md:w-1/3 flex follow_links text-center">
                                        <a
                                            href="#"
                                            className="text-gray-700 text-2xl mx-2 transition-colors duration-300 hover:text-[#E4405F]"
                                        >
                                            <FaInstagram />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 text-2xl mx-2 transition-colors duration-300 hover:text-[#FF0000]"
                                        >
                                            <FaYoutube />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 text-2xl mx-2 transition-colors duration-300 hover:text-[#1877F2]"
                                        >
                                            <FaFacebook />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-700 text-2xl mx-2 transition-colors duration-300 hover:text-[#1DA1F2]"
                                        >
                                            <FaTwitter />
                                        </a>
                                    </div>
                                </div>
                            </div>


                            {/* Contact Form */}
                            <div className="bg-gradient-to-r p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <h4 className="text-2xl font-bold text-blue-400 mb-4 text-center animate-on-scroll-left">Contact Us</h4>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-800 font-semibold animate-on-scroll-left">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all animate-on-scroll-left"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-800 font-semibold animate-on-scroll-left">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all animate-on-scroll-left"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-gray-800 font-semibold animate-on-scroll-left">Your Message</label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all animate-on-scroll-left"
                                            placeholder="Type your message here"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-on-scroll-left"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="mt-12 mb-8">
                    <div className="container mx-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41332874.20997445!2d-130.26508908348305!3d50.780051417079086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1659535244956!5m2!1sen!2sin"
                            style={{ border: 0, width: '100%', height: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
