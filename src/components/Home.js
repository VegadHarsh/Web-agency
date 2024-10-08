import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faLightbulb, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faComputer as faComputerSolid } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Animation from './Animation';


const Home = () => {
    const [shadowStyle, setShadowStyle] = useState({
        boxShadow: '0px 0px 18px 8px rgba(92, 92, 92, 0.5)',
    });
    
    const handleMouseEnter = () => {
        setShadowStyle({
            boxShadow: '0px 0px 18px 8px rgba(92, 92, 92, 0.5)',
            transition: "0.2s ease"
        });
    };

    const handleMouseLeave = () => {
        setShadowStyle({
            boxShadow: '0px 0px 30px 12px rgba(92, 92, 92, 0.5)',
            transition: "0.2s ease"
        });
    };

    const slides = [
        {
            id: 1,
            image: `${process.env.PUBLIC_URL}/Assets/Imgs/web-img-3.jpg`,
            text: "Duis non enim pharetra gravida arcu et, pretium sem ante dolor sit amet, elit ante urna et lorem quis, suscipit turpis nunc non odio at sed quam proin mattis nisi sit amet.",
        },
        {
            id: 2,
            image: `${process.env.PUBLIC_URL}/Assets/Imgs/28.jpg`,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et ultricies erat. Nullam sit amet consequat elit.",
        },
        {
            id: 3,
            image: `${process.env.PUBLIC_URL}/Assets/Imgs/web-img-4.jpg`,
            text: "Suspendisse potenti. Fusce viverra dui non ligula lacinia, eget dapibus turpis tempor.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <section className="section_2 mb-5 animate-on-scroll">
                <div id="main_part" className="flex flex-col md:flex-row w-full bg-[#f4f3f9]">
                    <div className="main_det w-full md:w-[50%] flex justify-center items-center relative z-20 sm:relat custom:top-[100px] md:top-0">
                        <div className="text-content absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
                            <p className="mb-3 text-sm md:text-base lg:text-lg">Experience Creative Freedom</p>
                            <h1 className="text-3xl w-[60%] md:text-4xl lg:text-5xl font-bold mb-6 custom:text-[20px]">We Are Big Digital Agency</h1>
                            <button className="bg-white border-none outline-none px-4 py-2 shadow-[0px_0px_50px_-14px_black] rounded-[7px]">
                                <a href="#" className="text-black">Get In Touch</a>
                            </button>
                        </div>
                    </div>
                    <div className="main_right_img  outline-none relative overflow-hidden w-full md:w-[50%]">
                        <img
                            src="./Assets/Imgs/office.jpg"
                            alt="Airplane"
                            className="w-full outline-none h-auto object-cover rounded-none md:rounded-[50%_0_0_50%/100%_0_0_100%] z-10"
                        />
                    </div>
                </div>
            </section>
            <Animation />


            {/* Section_3 */}
            <section className="section_3 mx-4 sm:mx-6 md:mx-10 my-5">
                <div className="my-10 py-8">
                    {/* Heading */}
                    <div className="flex justify-center">
                        <h2 className="font-bold text-center leading-[45px] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] mt-4 mb-4">
                            We Help To Create Strategies <br /> Design &amp; Development
                        </h2>
                    </div>

                    {/* Services */}
                    <div className="container mx-auto my-10 animate-on-scroll-right">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                            <div className="text-center group">
                                <FontAwesomeIcon
                                    icon={faSnowflake}
                                    className="mb-3 text-[25px] md:text-[30px] transition-transform duration-300 ease-in-out transform group-hover:scale-125"
                                />
                                <h5 className="mb-3 font-semibold text-[12px] sm:text-[14px]">Web Design</h5>
                                <p className="text-[10px] sm:text-sm">
                                    Duis molestie enim mattis gravida viverra. Fusce ut eros
                                </p>
                            </div>

                            <div className="text-center group">
                                <FontAwesomeIcon
                                    icon={faComputerSolid}
                                    className="mb-3 text-[25px] md:text-[30px] transition-transform duration-300 ease-in-out transform group-hover:scale-125"
                                />
                                <h5 className="mb-3 font-semibold text-[12px] sm:text-[14px]">Development</h5>
                                <p className="text-[10px] sm:text-sm">
                                    Duis molestie enim mattis gravida viverra. Fusce ut eros augue
                                </p>
                            </div>

                            <div className="text-center group">
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    className="mb-3 text-[25px] md:text-[30px] transition-transform duration-300 ease-in-out transform group-hover:scale-125"
                                />
                                <h5 className="mb-3 font-semibold text-[12px] sm:text-[14px]">Branding</h5>
                                <p className="text-[10px] sm:text-sm">
                                    Duis molestie enim mattis gravida viverra. Fusce
                                </p>
                            </div>

                            <div className="text-center group">
                                <FontAwesomeIcon
                                    icon={faLightbulb}
                                    className="mb-3 text-[25px] md:text-[30px] transition-transform duration-300 ease-in-out transform group-hover:scale-125"
                                />
                                <h5 className="mb-3 font-semibold text-[12px] sm:text-[14px]">Creativity</h5>
                                <p className="text-[10px] sm:text-sm">
                                    Duis molestie enim mattis gravida viverra. Fusce ut eros
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto animate-on-scroll-left">
                        <div className="flex flex-col md:flex-row justify-around my-10 pt-10 items-center">
                            <div className="md:w-5/12 mb-8 md:mb-0 flex justify-center">
                                <img
                                    src="./Assets/Imgs/istockphoto-1393093359-612x612.jpg"
                                    alt=""
                                    className="w-full ease-in-out hover:scale-110 rounded-2xl"
                                    style={shadowStyle}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                            </div>
                            <div className="md:w-5/12 flex items-center justify-center">
                                <div className="w-full md:w-96">
                                    <h1 className="font-bold text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] mb-4">
                                        Unveiled as a part of this year's design week
                                    </h1>
                                    <div className="flex items-center mb-4">
                                        <span className="text-[25px] sm:text-[35px] md:text-[40px] m-0 mr-2">28</span>
                                        <i className="font-light text-[12px] sm:text-[13px] m-0">
                                            Years Of Design <br /> And Developing Experience
                                        </i>
                                    </div>
                                    <button className="bg-[#F44358] rounded-md outline-none border-none py-2 px-4 sm:px-6">
                                        <a href="#" className="text-white text-[10px] sm:text-[13px] no-underline">
                                            More Info
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 4 */}
            <section className="section_4 bg-[#E8CCCC] animate-on-scroll sm:my-6 md:my-10">
                <div className="manage_project flex flex-col justify-center items-center h-auto md:h-[400px]  py-8">
                    <div className="manage_project_text text-center w-full md:w-[80%] lg:w-[70%]">
                        <h2 className="mb-4 font-bold text-[24px] sm:text-[28px] md:text-[30px]">
                            The ultimate way to manage all your project development resources and monitor task
                            relevancy data, all in one place.
                        </h2>
                        <button className="bg-[#F44358] py-2 px-4 sm:px-6 rounded-lg">
                            <a href="#" className="text-white text-[12px] sm:text-[14px]">
                                See more
                            </a>
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 5 */}
            <section className="section_5 flex justify-center animate-on-scroll" id="Services">
                <div className="container flex flex-col justify-center items-center h-auto px-4 md:h-96">
                    <div className="row flex flex-col md:flex-row w-full">
                        <div className="det_ser_txt w-full md:w-1/2  animate-on-scroll-right flex justify-center">
                            <div className='mx-4 md:mx-10 mt-3'>
                                <h1 className="mb-4 font-bold text-3xl md:text-4xl">Our Services</h1>
                                <p className="mb-4 text-lg md:text-xl">
                                    Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Facilisis sed odio morbi quis
                                    commodo. Eget nulla facilisi etiam dignissim diam quis enim. Arcu felis bibendum ut tristique et egestas
                                    quis ipsum. Etiam dignissim diam quis enim lobortis.
                                </p>
                                <a href="#" className="text-black text-lg md:text-xl font-bold relative">
                                    See more <i className="fas fa-long-arrow-alt-right"></i>
                                    <span className="absolute top-5 left-[1px] w-full h-px bg-pink-600"></span>
                                </a>
                            </div>
                        </div>
                        <div className="set_cont w-full md:w-1/2 flex flex-col  animate-on-scroll-left">
                            {/* Percentages */}
                            {[{ label: 'Web Design', percent: 50 }, { label: 'Landscapes', percent: 35 }, { label: 'Programming', percent: 75 }, { label: 'Visuals', percent: 90 }].map((item, index) => (
                                <div key={index} className="percent mb-5 flex flex-col justify-center relative">
                                    <p className="w-full mb-4 font-bold text-sm">{item.label}</p>
                                    <div className="relative w-full">
                                        <span className={`absolute top-1 transform -translate-x-1/2 bg-white px-1 text-xs font-bold z-10 h-6`} style={{ left: `${item.percent}%` }}>
                                            {item.percent}%
                                        </span>
                                        <div className={`h-1 bg-gradient-to-r from-red-600 to-gray-300 mx-auto w-full`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6 */}
            <section className="section_6 my-3 py-3 animate-on-scroll-zoom" id="Our-Portfolio">
                {/* Section Header */}
                <div className="main_port text-center mb-10">
                    <p className="text-red-500 mb-2">Our Portfolio</p>
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                        Our Latest Client Projects
                    </h1>
                </div>

                {/* Portfolio Grid */}
                <div className="box_content mb-10">
                    {/* First Row */}
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/4">
                            <img
                                src="./Assets/Imgs/web-img-3.jpg"
                                alt="Project Image"
                                className="w-[90%] h-[80%] shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/4">
                            <img
                                src="./Assets/Imgs/Digital-marketing.jpg"
                                alt="Project Image"
                                className="w-[90%] h-[80%] shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/4">
                            <img
                                src="./Assets/Imgs/digital-marketing-agency-find-clients.jpg"
                                alt="Project Image"
                                className="w-[90%] h-[80%] shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/4">
                            <img
                                src="./Assets/Imgs/digital11.jpg"
                                alt="Project Image"
                                className="w-[90%] h-[80%] shadow-md"
                            />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/4">
                            <img
                                src="./Assets/Imgs/digital-marketing-2.jpg"
                                alt="Project Image"
                                className="w-[90%] h-[80%] shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/4">
                            <img
                                src="./Assets/Imgs/digital-marketing-media-types.png"
                                alt="Project Image"
                                className="w-[90%] h-[80%] shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/4">
                            <img
                                src="./Assets/Imgs/StockCake-Team+Strategy+Meeting_1710384274-640w.jpg"
                                alt="Project Image"
                                className="w-[90%] h-[80%] shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/4">
                            <img
                                src="./Assets/Imgs/istockphoto-1492180527-612x612.jpg"
                                alt="Project Image"
                                className="w-[90%] h-[80%] shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7*/}
            <section className="w-full mx-auto max-w-6xl my-5 py-5">
                <div className="relative overflow-hidden group">
                    {/* Slides */}
                    <div className="w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="w-full flex-shrink-0 flex flex-col md:flex-row justify-center items-center p-4">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${slide.id}`}
                                    className="w-[30%] md:w-[30%] h-auto object-cover mb-4 md:mb-0"
                                />
                                <div className="w-full md:w-1/2 p-4">
                                    <p className="text-sm md:text-base text-center md:text-left">
                                        {slide.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
                    >
                        &#10094;
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
                    >
                        &#10095;
                    </button>

                    {/* Dots Navigation */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`cursor-pointer w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"} transition-colors`}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8 */}
            <section className="section_8 animate-on-scroll-zoom my-10 py-8">
                <div className="partners bg-[#F7F7F7] flex justify-center p-4">
                    <div className="set_logo flex justify-center mx-4">
                        <img src={`${process.env.PUBLIC_URL}/Assets/Imgs/download (1).png`} alt="Logo 1" className="h-auto w-32 md:w-48" />
                    </div>
                    <div className="set_logo flex justify-center mx-4">
                        <img src={`${process.env.PUBLIC_URL}/Assets/Imgs/images (1).png`} alt="Logo 2" className="h-auto w-32 md:w-48" />
                    </div>
                    <div className="set_logo flex justify-center mx-4">
                        <img src={`${process.env.PUBLIC_URL}/Assets/Imgs/logo1.png`} alt="Logo 3" className="h-auto w-32 md:w-48 text-transparent" />
                    </div>
                    <div className="set_logo flex justify-center mx-4">
                        <img src={`${process.env.PUBLIC_URL}/Assets/Imgs/download.png`} alt="Logo 4" className="h-auto w-32 md:w-48" />
                    </div>
                </div>
            </section>

            {/* Section 9*/}
            <div className="section_9 animate-on-scroll" id="Blog-Articles">
                <div className="main_port mb-5 mt-6 pt-4 text-center">
                    <p className="text-lg text-red-500">Articles</p>
                    <h1 className="text-3xl font-bold">Latest Updates</h1>
                </div>

                <div className="container mx-auto my-5 pt-3 pb-10">
                    <div className="flex flex-wrap">
                        {/* Define a consistent height with 'h-full' for flex-grow */}
                        <div className="md:w-1/3 p-2 flex">
                            <div className="border flex flex-col w-full">
                                <img
                                    src={`${process.env.PUBLIC_URL}/Assets/Imgs/web-img-3.jpg`}
                                    alt="Airplane"
                                    className="w-full h-48 object-cover" // Set a fixed height for the image
                                />
                                <div className="box_set_con p-4 flex-grow"> {/* Allow the content to fill the space */}
                                    <h3 className="font-bold text-xl">Business With Remote Working</h3>
                                    <p className="mb-3">Inside Silicon Valley’s 10-year quest to make soaring above a crowded</p>
                                    <a href="#" className="text-[#fb5252] no-underline">Read More <i className="fas fa-long-arrow-alt-right text-dark"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 p-2 flex">
                            <div className="border flex flex-col w-full">
                                <img
                                    src={`${process.env.PUBLIC_URL}/Assets/Imgs/web-img-4.jpg`}
                                    alt="Airplane"
                                    className="w-full h-48 object-cover" // Set a fixed height for the image
                                />
                                <div className="box_set_con p-4 flex-grow">
                                    <h3 className="font-bold text-xl">Three Reasons To Focus Community Building</h3>
                                    <p className="mb-3">Inside Silicon Valley’s 10-year quest to make soaring above a crowded</p>
                                    <a href="#" className="text-[#fb5252] no-underline">Read More <i className="fas fa-long-arrow-alt-right text-dark"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 p-2 flex">
                            <div className="border flex flex-col w-full">
                                <img
                                    src={`${process.env.PUBLIC_URL}/Assets/Imgs/28.jpg`}
                                    alt="Airplane"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="box_set_con p-4 flex-grow">
                                    <h3 className="font-bold text-xl">Boosting Your Marketing Team</h3>
                                    <p className="mb-3">Inside Silicon Valley’s 10-year quest to make soaring above a crowded</p>
                                    <a href="#" className="text-[#fb5252] no-underline">Read More <i className="fas fa-long-arrow-alt-right text-dark"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section_10 mt-5 pt-4">
                    <div className="sub_section bg-red-500 p-1">
                        <div className="container mx-auto ">
                            <div className="flex flex-wrap justify-center">
                                <div className="md:w-[40%] p-2">
                                    <input
                                        type="text"
                                        className="w-full p-2 border outline-none border-gray-300 rounded"
                                        placeholder="Subscribe for newsletter"
                                    />
                                </div>
                                <div className="md:w-2/8 p-2 flex items-center">
                                    <a hrxef="#" className="text-center bg-[#ffff] text-black hover:text-red-400 hover:bg-black transition-all p-2 rounded">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
