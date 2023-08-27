import './PickYourTrip.css'
import { MdClose } from 'react-icons/md';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { useEffect, useState } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

const PickYourTrip = () => {
    const [travelMode, setTravelMode] = useState(1);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="max-w-5xl mx-auto py-20">
            <div className="flex flex-col lg:flex-row text-center lg:text-left items-center gap-6 my-20 lg:my-10">
                <h1 data-aos="fade-right" className='text-6xl lg:text-7xl neo min-w-[445px]'>Pick your trip</h1>
                <MdClose data-aos="fade-in" data-aos-delay="700" className='text-5xl text-[#6EC9C1]'></MdClose>
                <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic sapiente ab adipisci reiciendis eveniet id, eos.</p>
            </div>
            <div data-aos="flip-left" data-aos-delay="100">
                <div className='max-w-5xl mx-auto flex justify-around text-xs larsseitMedium border-b-2 border-[#41ead41c]'>
                    <button onClick={() => setTravelMode(1)} className={`${travelMode === 1 ? 'border-b-8 w-1/4 text-[#41EAD4] border-[#41EAD4] transition-all duration-700 ' : 'pb-6'}`}>Chill Adventure</button>
                    <button onClick={() => setTravelMode(2)} className={`${travelMode === 2 ? 'border-b-8 w-1/4 text-[#41EAD4] border-[#41EAD4] transition-all duration-700 ' : 'pb-6'}`}>Spooky Times</button>
                    <button onClick={() => setTravelMode(3)} className={`${travelMode === 3 ? 'border-b-8 w-1/4 text-[#41EAD4] border-[#41EAD4] transition-all duration-700 ' : 'pb-6'}`}>Desert Madness</button>
                    <button onClick={() => setTravelMode(4)} className={`${travelMode === 4 ? 'border-b-8 w-1/4 text-[#41EAD4] border-[#41EAD4] transition-all duration-700 ' : 'pb-6'}`}>Out in the wild</button>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-20 lg:gap-5 my-20 lg:text-left text-center'>
                <div className='relative'>
                    <img data-aos="fade-up" className='w-[486px] h-[607px] object-cover' src="https://images.unsplash.com/photo-1592838464221-a7268248a9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80" alt="" />
                    <div className='absolute top-96 left-12 lg:top-72 lg:-left-12'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="172" height="13" viewBox="0 0 172 13" fill="none">
                            <rect width="172" height="2" rx="1" fill="#41EAD4" />
                            <path d="M0 1H2V12C2 12.5523 1.55228 13 1 13C0.447715 13 0 12.5523 0 12V1Z" fill="#41EAD4" />
                        </svg>
                        <p className='larsseitMedium tracking-widest text-[#41EAD4]'>01.</p>
                        <p className='uppercase larsseitMedium tracking-widest'>Grand Dunes</p>
                        <p className='uppercase larsseitMedium tracking-widest'>Landscape</p>
                    </div>
                    <div className='text-[#41EAD4] absolute -bottom-10 -left-10'>
                        <p className="leading-5 text-6xl text-left">
                            ... <br />
                            ... <br />
                            ... <br />
                            ... <br />
                            ... <br />
                            ... <br />
                            ... <br />
                            ... <br />
                            ... <br />
                            ............ <br />
                            ............ <br />
                            ............</p>
                    </div>
                </div>
                <div className='max-w-[400px] my-auto mx-auto lg:mx-0'>
                    <h1 data-aos="fade-left" data-aos-delay="400" className='text-[56px] neo'>Chill Adventure</h1>
                    <p data-aos="fade-left" data-aos-delay="500" className='larsseitMedium mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum veritatis quo commodi? Dicta, recusandae.</p>
                    <p  data-aos="fade-left" data-aos-delay="600"className='larsseitLight mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in repellendus error et est maxime dignissimos voluptatibus. Assumenda et ipsam mollitia quas. Voluptates dolores qui magni mollitia pariatur. Nesciunt, placeat.</p>
                    <button data-aos="fade-left" data-aos-delay="700" className='larsseitMedium uppercase tracking-widest text-sm px-10 py-4 bg-[#00C9E0] rounded-[180px] my-8 
                     hover:scale-110 transition-all duration-300 myShadow'>see our latest offer</button>
                </div>
                <div className='mt-auto mx-auto lg:mx-0'>
                    <p data-aos="fade-left" data-aos-delay="800" className='larsseitMedium uppercase text-sm my-3 tracking-widest'>share it: </p>
                    <div data-aos="fade-left" data-aos-delay="900" className='flex items-center gap-3'>
                        <FiTwitter className='text-[#41EAD4] text-3xl'></FiTwitter>
                        <FiInstagram className='text-[#41EAD4] text-3xl'></FiInstagram>
                        <FiFacebook className='text-[#41EAD4] text-3xl'></FiFacebook>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="133" height="32" viewBox="0 0 133 32" fill="none">
                        <rect x="133" y="32" width="133" height="2" rx="1" transform="rotate(180 133 32)" fill="#41EAD4" />
                        <path d="M133 31H131V1C131 0.447718 131.448 0 132 0C132.552 0 133 0.447716 133 1V31Z" fill="#41EAD4" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PickYourTrip;