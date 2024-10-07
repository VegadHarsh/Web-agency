import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileAlt, faRocket, faPalette, faCogs, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Animation from './Animation';
import NavigationPath from "../pages/NavigationPath";


// Services Data
const services = [
    {
        title: "Custom Web Development",
        description: "We create tailored websites designed for performance, security, and scalability, ensuring your business has a unique digital presence. Whether it's an e-commerce platform or a corporate site, we build it with your vision in mind.",
        icon: faGlobe,
    },
    {
        title: "Mobile Application Development",
        description: "Our team develops intuitive mobile applications for iOS and Android, providing seamless user experiences across all devices. We prioritize speed, functionality, and beautiful design.",
        icon: faMobileAlt,
    },
    {
        title: "Search Engine Optimization",
        description: "Boost your website's search engine ranking and visibility with our effective SEO strategies. We optimize on-page elements, conduct keyword research, and implement advanced tactics to help you reach your target audience.",
        icon: faRocket,
    },
    {
        title: "UI/UX Design",
        description: "Our designers specialize in creating user-friendly and visually stunning interfaces. From wireframes to prototypes, we ensure that your website or app not only looks good but provides a flawless experience for users.",
        icon: faPalette,
    },
    {
        title: "Software Development",
        description: "We deliver robust and efficient software solutions, tailored to meet the specific needs of your business. Our solutions are scalable and designed for growth, ensuring long-term success.",
        icon: faCogs,
    },
    {
        title: "Digital Marketing",
        description: "Our digital marketing strategies help your business grow online. We offer a full range of services, including content marketing, social media management, and email campaigns to drive engagement and conversions.",
        icon: faChartLine,
    },
    {
        title: "Consultancy & Support",
        description: "Our consultancy services offer expert advice in digital transformation, process automation, and IT solutions. We work with your team to implement the best strategies for success and provide ongoing support to ensure long-term results.",
        icon: faUsers,
    },
];

// Testimonials Data
const testimonials = [
    {
        name: "John Doe",
        role: "CEO, Tech Innovators",
        quote: "Their team provided top-notch service and developed a cutting-edge platform that exceeded our expectations. Their attention to detail and commitment to delivering a great product is unparalleled.",
    },
    {
        name: "Jane Smith",
        role: "Marketing Director, Bright Future Co.",
        quote: "The digital marketing campaign they created helped us increase our online presence and boosted our conversions by 30%. Their creativity and expertise are truly impressive!",
    },
    {
        name: "Michael Johnson",
        role: "CTO, Solutions Plus",
        quote: "We were impressed with their ability to develop a complex software solution tailored to our needs. The project was delivered on time, and their ongoing support has been invaluable.",
    },
];

// Statistics Data
const statisticsData = [
    {
        title: "Current Projects",
        value: 12,
        description: "Ongoing projects tailored to meet our clients' unique needs."
    },
    {
        title: "Satisfied Clients",
        value: 25,
        description: "Clients who have successfully transformed their businesses with us."
    },
    {
        title: "Website Views",
        value: "150K+",
        description: "Total views on our projects, showcasing our reach and impact."
    },
    {
        title: "Completed Projects",
        value: 45,
        description: "Successfully delivered projects across various industries."
    },
];

// Services Component
const Services = () => {
    return (
        <>
            <div class="naviget_path bg-white py-4 px-20">
                <NavigationPath />
            </div>
            <Animation />
            <hr />
            <div className="relative overflow-hidden py-16">
                <div className="absolute inset-0">
                    <div className="bg-gray-100 h-full w-full transform skew-y-12"></div>
                    <div className="bg-white h-full w-full transform skew-y-12 -translate-y-1/2"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    {/* Introductory Paragraph */}
                    <h2 className="text-5xl font-bold text-gray-900 bg-inherit mb-4 text-center">
                        Empowering Your Digital Journey
                    </h2>
                    <div className="bg-gray-50 p-10 mb-10">
                        <p className="text-lg text-gray-700 mb-4 text-center">
                            At our agency, we specialize in creating innovative and personalized digital solutions.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 text-center">
                            Whether you need a bespoke website, a mobile app, or a complete digital marketing strategy, our team of experts is here to help you succeed.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#services"
                                className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-md shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                            >
                                Discover Our Services
                            </a>
                        </div>
                    </div>


                    {/* Statistics Section */}
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 pt-10">
                        Our Impact at a Glance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {statisticsData.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-12 shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:scale-105"
                            >
                                <h3 className="text-4xl font-extrabold text-white mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-lg font-semibold text-white mb-4">{stat.title}</p>
                                <p className="text-white opacity-80">{stat.description}</p>
                            </div>
                        ))}
                    </div>


                    {/* Services Section */}
                    <h2 className="text-4xl font-bold text-center text-gray-900 my-16 pt-10">
                        Our Professional Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl group"
                            >
                                <div className="mb-6 flex items-center justify-center">
                                    <div className="bg-indigo-500 p-4 rounded-xl shadow-md flex items-center justify-center transition-colors duration-300 group-hover:bg-red-500 group-hover:scale-110">
                                        <FontAwesomeIcon
                                            icon={service.icon}
                                            className="text-white text-4xl transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                                <hr />
                                <h3 className="text-2xl mt-3 font-semibold text-gray-800 mb-4 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-center">{service.description}</p>
                            </div>
                        ))}
                    </div>



                    {/* Testimonials Section */}
                    <h2 className="text-4xl font-bold text-center text-gray-900 my-16 pt-10">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                            >
                                <p className="text-gray-600 italic mb-6">
                                    "{testimonial.quote}"
                                </p>
                                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
