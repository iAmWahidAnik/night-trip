import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';


const Footer = () => {
    return (
        <div className="min-h-screen bg-[#071827]">
            <div className="text-white text-center pt-5">
                <h1 className="text-[72px] neo">See you soon!</h1>
                <p className="text-2xl larsseitMedium my-5">We hope to meet each other <br /> very soon.</p>
            </div>
            <div>
                <div className=''>
                    <div className='w-[80px] h-[2px] bg-[#41EAD4] -rotate-90 mx-auto my-32'>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 max-w-5xl mx-auto text-white">
                <div>
                    <h1 className="text-[18px] larsseit tracking-wider">ABOUT</h1>
                    <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="57" height="8" viewBox="0 0 57 8" fill="none">
                        <rect y="3" width="50" height="1" rx="0.5" fill="#41EAD4" />
                        <rect x="52.5857" y="0.707107" width="4" height="4" transform="rotate(45 52.5857 0.707107)" stroke="#41EAD4" />
                    </svg>
                    <div className="flex flex-col gap-5 my-5 tracking-wider">
                        <p className="larsseitlight">Our Mission</p>
                        <p className="larsseitlight">Terms</p>
                        <p className="larsseitlight">Copyrights</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[18px] larsseit tracking-wider">FAQ</h1>
                    <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="57" height="8" viewBox="0 0 57 8" fill="none">
                        <rect y="3" width="50" height="1" rx="0.5" fill="#41EAD4" />
                        <rect x="52.5857" y="0.707107" width="4" height="4" transform="rotate(45 52.5857 0.707107)" stroke="#41EAD4" />
                    </svg>
                    <div className="flex flex-col gap-5 my-5 tracking-wider">
                        <p className="larsseitlight">Rules</p>
                        <p className="larsseitlight">Tickets</p>
                        <p className="larsseitlight">Editions</p>
                        <p className="larsseitlight">Contribute</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[18px] larsseit tracking-wider">EVENTS</h1>
                    <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="57" height="8" viewBox="0 0 57 8" fill="none">
                        <rect y="3" width="50" height="1" rx="0.5" fill="#41EAD4" />
                        <rect x="52.5857" y="0.707107" width="4" height="4" transform="rotate(45 52.5857 0.707107)" stroke="#41EAD4" />
                    </svg>
                    <div className="flex flex-col gap-5 my-5 tracking-wider">
                        <p className="larsseitlight">Star Gazing</p>
                        <p className="larsseitlight">Desert Mania</p>
                        <p className="larsseitlight">Dunes Madness</p>
                        <p className="larsseitlight">Spooky Land</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[18px] larsseit tracking-wider">CONTACT</h1>
                    <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="57" height="8" viewBox="0 0 57 8" fill="none">
                        <rect y="3" width="50" height="1" rx="0.5" fill="#41EAD4" />
                        <rect x="52.5857" y="0.707107" width="4" height="4" transform="rotate(45 52.5857 0.707107)" stroke="#41EAD4" />
                    </svg>
                    <div className="flex flex-col gap-5 my-5 tracking-wider">
                        <p className="larsseitlight">info@ntrp.com</p>
                        <p className="larsseitlight">+34 555 666</p>
                        <p className="larsseitlight">+39 555 666</p>
                        <p className="larsseitlight">+33 555 666</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[18px] larsseit tracking-wider">FOLLOW</h1>
                    <svg className="my-5" xmlns="http://www.w3.org/2000/svg" width="57" height="8" viewBox="0 0 57 8" fill="none">
                        <rect y="3" width="50" height="1" rx="0.5" fill="#41EAD4" />
                        <rect x="52.5857" y="0.707107" width="4" height="4" transform="rotate(45 52.5857 0.707107)" stroke="#41EAD4" />
                    </svg>
                    <div className='flex gap-5 text-2xl my-5'>
                            <FiTwitter className='text-[#41EAD4]'></FiTwitter>
                            <FiInstagram className='text-[#41EAD4]'></FiInstagram>
                            <FiFacebook className='text-[#41EAD4] cursor-all-scroll'></FiFacebook>
                        </div>
                </div>
            </div>
            <div className='text-white text-center py-20'>
                <p>copyright - wahid anik - night trip - all rights reserved</p>
                <p className="text-4xl text-white neo mt-10">NT<span className="text-[#00C9E0]">.</span></p>
            </div>
        </div>
    );
};

export default Footer;