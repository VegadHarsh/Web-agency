// Portfolio.js
import React from 'react';
import NavigationPath from "../pages/NavigationPath";


const Portfolio = () => {
    const projects = [
        {
            title: "E-commerce Solution for Retail",
            description: "We developed a robust e-commerce platform for a leading retailer, complete with payment gateway integration and dynamic product management.",
            image: `Assets/Imgs/28.jpg`,
            link: "#",
            technologies: ["React", "Tailwind", "Stripe", "Node.js"]
        },
        {
            title: "Custom Mobile App for Healthcare",
            description: "Designed and built a mobile app to streamline patient-doctor communication for a healthcare provider.",
            image: `Assets/Imgs/AdobeStock_816011651_Preview.jpeg`,
            link: "#",
            technologies: ["React Native", "Figma", "Firebase"]
        },
        {
            title: "Corporate Website for Financial Services",
            description: "We delivered a sleek and professional corporate website for a global financial services company, enhancing their online presence.",
            image: `Assets/Imgs/i2.jpg`,
            link: "#",
            technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
        },
    ];

    return (
        <>
            <div class="naviget_path bg-white py-4 px-20">
                <NavigationPath />
            </div>
            <hr />
            <div className="bg-gray-100 min-h-screen">
                {/* Hero Section */}
                <div className="bg-indigo-600 text-white text-center py-24">
                    <h1 className="text-5xl font-bold">Innovative Digital Solutions for Your Business</h1>
                    <p className="mt-6 text-lg">We help businesses succeed with cutting-edge technology, bespoke designs, and expert development solutions.</p>
                </div>

                {/* About Section */}
                <div className="container mx-auto px-4 py-16 text-center">
                    <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                        We are a dedicated team of developers, designers, and strategists committed to helping businesses thrive in the digital world. From responsive web design to comprehensive digital platforms, we deliver solutions that drive growth and success.
                    </p>
                </div>

                {/* Services Section */}
                <div className="container mx-auto px-4 py-16 bg-white">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="p-6 inline-block ">
                                <img src="Assets/imgs/web-img-4.jpg" alt="Web Development" className="mx-auto rounded-full h-60 " />
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Web Development</h3>
                            <p className="text-gray-600 mt-2">We create custom websites and web applications that are optimized for performance and user experience.</p>
                        </div>
                        <div className="text-center">
                            <div className="p-6 inline-block">
                                <img src="Assets/Imgs/28.jpg" alt="Mobile App Development" className="mx-auto rounded-full h-60" />
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Mobile App Development</h3>
                            <p className="text-gray-600 mt-2">Our mobile apps are built to meet your business goals, offering seamless user experiences across all devices.</p>
                        </div>
                        <div className="text-center">
                            <div className="p-6 inline-block">
                                <img src="Assets/imgs/web-img-3.jpg" alt="Digital Strategy" className="mx-auto rounded-full h-60" />
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Digital Strategy</h3>
                            <p className="text-gray-600 mt-2">We provide data-driven digital strategies that boost your business's online presence and drive engagement.</p>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex space-x-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="bg-gray-200 px-2 py-1 text-sm rounded-full">{tech}</span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="text-indigo-500 hover:underline">View Project</a>
                                </div>
                                <div className="absolute inset-0 bg-[#0000006e] opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300">
                                    <p className="text-white text-lg font-bold">Click to Learn More</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gray-800 text-white text-center py-16">
                    <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>
                    <p className="text-lg mb-6">Ready to start your project? Contact us today to discuss how we can help bring your vision to life.</p>
                    <a href="#contact" className="bg-indigo-500 px-6 py-3 rounded-lg text-lg font-bold hover:bg-indigo-600 transition-colors duration-300">Get in Touch</a>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
