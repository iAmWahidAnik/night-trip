import { GiSelfLove } from 'react-icons/gi';

const AboutUs = () => {
    return (
        <div className="max-w-5xl mx-auto my-20">
            <div className="flex ">
                <div className="max-w-xs pr-5 pt-10">
                    <h1 className="text-7xl neo">About Us</h1>
                    <p className="larsseitMedium my-5">We're a team of four passioned people.</p>
                    <p className="larsseitLight mb-5">We're ready to take the world by storm and let you find new travel opportunity.</p>
                    <p className="larsseitLight mb-5">Our everyday task is to make sure that you satisfied with the services and products that we provide.</p>
                    <p className="larsseitLight mb-5">With <GiSelfLove className='inline-flex text-[#41EAD4]'></GiSelfLove> from central europe</p>
                    <button>read more about us</button>
                </div>
                <div className="grid grid-cols-2">
                    <div className='relative'>
                        <img className="h-[400px] w-[400px] object-cover" src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                        <button className='larsseitMedium py-5 px-4 bg-black absolute bottom-8 -left-5 rounded-md text-white uppercase text-xs tracking-widest'>martin jack, <span className='text-[#41EAD4]'>CEO</span></button>
                    </div>
                    <div className='bg-[#071827]'>
                        <img className="h-[400px] w-[400px] object-cover opacity-30" src="https://images.unsplash.com/photo-1531384698654-7f6e477ca221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" alt="" />
                    </div>
                    <div className='bg-[#071827]'>
                        <img className="h-[400px] w-[400px] object-cover opacity-30" src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                    <div className='bg-[#071827]'>
                        <img className="h-[400px] w-[400px] object-cover opacity-30" src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                    </div>
                </div>
                <div className="text-[#41EAD4] my-auto">
                    <p className="leading-5 text-6xl">.... <br />
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