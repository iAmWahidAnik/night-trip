import { FiSearch, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import './MainBanner.css'

const MainBanner = () => {
    return (
        <div>
            <div className="bg-[url('https://s3-alpha-sig.figma.com/img/1319/fbd6/59df9cb92f4bc219c2f104bd3d9d27a6?Expires=1693785600&Signature=mtDSsYmqkvyYtiR9UjKKcVDJPDIY2jHsP30K97va3XosiE0LTifyA3wyLsgyHcr2UzLD40iwyPxSMm0VhBgiHcUkB7hoXSPg49MsjU3EQ12sM6WMEAB0MJe2KQJqX1HXzVW8VEnReg~4nLav~SORsaii2UcuV43IhKbC7cVGQ4LFvC~TOmvoi7GeDYkCzzTjtxkaYuhUhw28X6U9Om49cSHwBWOy~JwqtYqqh1IRSV475OWz7P0khedmOOt0ZEcIpk2FQftJ3MBKmk53zfLy0gWo8Y7aIFE7EV-CHnNb2rFxgtk8GVREKrf841-WPnDEo7iIlCfyFjYAO39vuVqZoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover">
                <nav className="h-[200px] max-w-5xl mx-auto flex items-center justify-between">
                    <div>
                        <p className="text-4xl text-white neo">NT<span className="text-[#00C9E0]">.</span></p>
                    </div>
                    <div className="flex items-center gap-5">
                        <div>
                            <FiSearch className='text-2xl text-white'></FiSearch>
                        </div>
                        <div>
                            <button className="py-4 px-10 rounded-3xl larsseit bg-[#00C9E0] text-white uppercase tracking-[3px] text-xs">menu</button>
                        </div>
                    </div>
                </nav>
                <div className='max-w-2xl mx-auto text-center text-white pb-'>
                    <div>
                        <h1 className='text-[100px] neo'>Night Trips</h1>
                        <h4 className='uppercase text-[18px] larsseit my-5 tracking-widest'>We got trips for the trippster in you</h4>
                        <p className='larsseitlight tracking-wide py-8'>Embark on a nocturnal adventure with our captivating night trip experiences. Discover the city hidden gems illuminated by moonlight. Unveil a world of enchantment and mystery as you explore after dark.</p>
                    </div>
                </div>
                <div className='gradient'>
                    <div className='max-w-5xl flex justify-between items-center mx-auto py-32'>
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