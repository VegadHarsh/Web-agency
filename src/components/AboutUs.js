import React from 'react';
import { Link } from 'react-router-dom';
import Animation from './Animation';
import NavigationPath from "../pages/NavigationPath";

const AboutUs = () => {
  return (
    <>
      <div class="naviget_path bg-white py-4 px-20">
        <NavigationPath />
      </div>
      <Animation />
      <hr />
      <div className="about-page bg-gradient-to-b from-gray-100 to-gray-300 animate-on-scroll">
        <div className="hero-section text-center bg-white py-12 rounded-xl shadow-md mx-4 lg:mx-0">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Property Rental Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the finest rental properties at your fingertips. Whether you’re searching for a cozy apartment or a spacious home, we’re here to help you find your perfect match.
          </p>
        </div>
        {/* Features Section */}
        <div className="features-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6 max-w-6xl mx-auto animate-on-scroll">
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2  animate-on-scroll-right">
            <div className="icon mb-4 text-blue-600 text-4xl">
              <i className="fas fa-home"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Wide Property Selection</h3>
            <p className="text-gray-600">Choose from a diverse range of properties across various locations to suit your lifestyle and budget.</p>
          </div>

          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-on-scroll-zoom">
            <div className="icon mb-4 text-green-500 text-4xl">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">User-Friendly Platform</h3>
            <p className="text-gray-600">Easily browse, book, and manage your rentals with our intuitive and easy-to-use interface.</p>
          </div>

          <div className="feature-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 animate-on-scroll-left">
            <div className="icon mb-4 text-red-500 text-4xl">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Secure Transactions</h3>
            <p className="text-gray-600">We ensure safe and secure rental agreements for a smooth experience.</p>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="mission-statement bg-white py-12 mt-16 px-6 lg:px-12 rounded-xl shadow-md text-center max-w-5xl mx-auto animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At <span className="font-semibold text-blue-600">Property Rental Hub</span>, our mission is to simplify the process of finding, renting, and managing properties. We aim to connect renters with property owners efficiently while providing a seamless experience for both parties.
          </p>
          <p className="text-lg text-gray-700">
            We believe in transparency, trust, and security, ensuring that every rental is hassle-free and enjoyable for all our users.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="call-to-action text-center mt-16 animate-on-scroll-zoom">
          <Link to={"/properties"}>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg rounded-full shadow-lg hover:bg-gradient-to-l hover:scale-105 transform-gpu transition duration-300 mb-4">
              Browse Our Properties
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
