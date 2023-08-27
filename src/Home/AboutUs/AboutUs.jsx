import { GiSelfLove } from 'react-icons/gi';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="max-w-5xl mx-auto py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xs pr-5 pt-10 mx-auto lg:mx-0 text-center lg:text-left my-20 lg:my-0">
                    <h1 data-aos="fade-right" data-aos-delay="500" className="text-7xl neo">About Us</h1>
                    <p data-aos="fade-right" data-aos-delay="600" className="larsseitMedium my-5">We're a team of four passioned people.</p>
                    <p data-aos="fade-right" data-aos-delay="700" className="larsseitLight mb-5">We're ready to take the world by storm and let you find new travel opportunity.</p>
                    <p data-aos="fade-right" data-aos-delay="800" className="larsseitLight mb-5">Our everyday task is to make sure that you satisfied with the services and products that we provide.</p>
                    <p data-aos="fade-right" data-aos-delay="900" className="larsseitLight mb-5">With <GiSelfLove className='inline-flex text-[#41EAD4]'></GiSelfLove> from central europe</p>
                    <button data-aos="fade-right" data-aos-delay="1000" className='larsseitMedium uppercase tracking-widest text-sm px-10 py-4 bg-[#00C9E0] rounded-[180px] hover:scale-110 transition-all duration-300 myShadow'>read more about us</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0">
                    <div data-aos="flip-left" className='relative'>
                        <img className="h-[400px] w-[400px] object-cover" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                        <button data-aos="fade-right" data-aos-delay="1100" className='larsseitMedium py-5 px-4 bg-black absolute bottom-8 -left-5 rounded-md text-white uppercase text-xs tracking-widest'>martin jack, <span className='text-[#41EAD4]'>CEO</span></button>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="500" className='bg-[#071827]'>
                        <img className="h-[400px] w-[400px] object-cover opacity-30" src="https://images.unsplash.com/photo-1531384698654-7f6e477ca221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" alt="" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className='bg-[#071827]'>
                        <img className="h-[400px] w-[400px] object-cover opacity-30" src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="700" className='bg-[#071827]'>
                        <img className="h-[400px] w-[400px] object-cover opacity-30" src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                    </div>
                </div>
                <div className="text-[#41EAD4] my-auto">
                    <p data-aos="fade-left" data-aos-delay="800" className="leading-5 text-6xl hidden lg:inline-flex">.... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        .... <br />
                        ....</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;