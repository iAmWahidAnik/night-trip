import { FiSearch, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import './MainBanner.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const MainBanner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/2NHM273/59df9cb92f4bc219c2f104bd3d9d27a6-1.jpg')] bg-cover">
                <nav className="h-[200px] max-w-5xl mx-auto flex lg:items-center lg:justify-between lg:flex-row lg:gap-0 lg:pt-0 pt-10 flex-col text-center gap-10">
                    <div data-aos="fade-right">
                        <p className="text-4xl text-white neo">NT<span className="text-[#00C9E0]">.</span></p>
                    </div>
                    <div data-aos="fade-left" className="flex items-center gap-5 mx-auto lg:mx-0">
                        <div>
                            <FiSearch className='text-2xl text-white'></FiSearch>
                        </div>
                        <div>
                            <button className="py-4 px-10 rounded-3xl larsseit bg-[#00C9E0] text-white uppercase tracking-[3px] text-xs hover:scale-125 transition-all duration-300 hover:tracking-[5px]">menu</button>
                        </div>
                    </div>
                </nav>
                <div className='max-w-2xl mx-auto text-center text-white pb-'>
                    <div>
                        <h1 data-aos="fade-up" className='lg:text-[100px] text-6xl neo'>Night Trips</h1>
                        <h4 data-aos="fade-up" data-aos-delay="500" className='uppercase lg:text-[18px] larsseit lg:my-5 my-8 tracking-widest'>We got trips for the trippster in you</h4>
                        <p data-aos="fade-up" data-aos-delay="600" className='larsseitlight tracking-wide py-8'>Embark on a nocturnal adventure with our captivating night trip experiences. Discover the city hidden gems illuminated by moonlight. Unveil a world of enchantment and mystery as you explore after dark.</p>
                    </div>
                </div>
                <div data-aos="fade-up" className='gradient'>
                    <div className='max-w-5xl flex lg:justify-between justify-around items-center mx-auto py-32'>
                        <div className='flex items-center gap-3 -rotate-90'>
                            <div className='w-[80px] h-[2px] bg-[#41EAD4]'>
                            </div>
                            <p className='uppercase text-white larsseit tracking-widest'>scroll</p>
                        </div>
                        <div className='flex flex-col gap-5 text-2xl'>
                            <FiTwitter className='text-[#41EAD4]'></FiTwitter>
                            <FiInstagram className='text-[#41EAD4]'></FiInstagram>
                            <FiFacebook className='text-[#41EAD4] cursor-all-scroll'></FiFacebook>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;