import { RiDoubleQuotesL } from 'react-icons/ri';

const PeoplesThoughts = () => {
    return (
        <div className='bg-[#071827] py-20'>
            <h1 className='text-white text-center text-[72px] neo my-5'>People's Thoughts</h1>
            <p className='text-2xl uppercase larsseitMedium text-center text-white mb-10 tracking-widest'>see what are others saying</p>
            <div className="max-w-5xl grid grid-cols-2 gap-5 mx-auto">
                <div className="p-16 bg-[#05233A] text-white flex gap-5 rounded-[4px]">
                    <div>
                        <RiDoubleQuotesL className='text-5xl text-[#6EC9C1]'></RiDoubleQuotesL>
                    </div>
                    <div className='pt-3'>
                        <h1 className="larsseit leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, aut.</h1>
                        <p className="larsseitlight my-5 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus laborum ad beatae dolore, repellendus fuga similique impedit velit quisquam corrupti explicabo repudiandae accusamus magnam!</p>
                        <div className="flex items-center gap-5">
                            <img className="w-20 h-20 rounded-lg shadow-sm shadow-[#41EAD4] object-cover" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                            <div>
                                <p className="larsseit uppercase text-xs my-1 tracking-widest">judy roseless</p>
                                <p className="larsseit uppercase text-xs my-1 tracking-widest">marketing head at rom.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-16 bg-[#05233A] text-white flex gap-5 rounded-[4px]">
                    <div>
                        <RiDoubleQuotesL className='text-5xl text-[#6EC9C1]'></RiDoubleQuotesL>
                    </div>
                    <div className='pt-3'>
                        <h1 className="larsseit leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, aut.</h1>
                        <p className="larsseitlight my-5 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus laborum ad beatae dolore, repellendus fuga similique impedit velit quisquam corrupti explicabo repudiandae accusamus magnam!</p>
                        <div className="flex items-center gap-5">
                            <img className="w-20 h-20 rounded-lg shadow-sm shadow-[#41EAD4] object-cover" src="https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg" alt="" />
                            <div>
                                <p className="larsseit uppercase text-xs my-1 tracking-widest">judy roseless</p>
                                <p className="larsseit uppercase text-xs my-1 tracking-widest">marketing head at rom.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-16 bg-[#05233A] text-white flex gap-5 rounded-[4px]">
                    <div>
                        <RiDoubleQuotesL className='text-5xl text-[#6EC9C1]'></RiDoubleQuotesL>
                    </div>
                    <div className='pt-3'>
                        <h1 className="larsseit leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, aut.</h1>
                        <p className="larsseitlight my-5 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus laborum ad beatae dolore, repellendus fuga similique impedit velit quisquam corrupti explicabo repudiandae accusamus magnam!</p>
                        <div className="flex items-center gap-5">
                            <img className="w-20 h-20 rounded-lg shadow-sm shadow-[#41EAD4] object-cover" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                            <div>
                                <p className="larsseit uppercase text-xs my-1 tracking-widest">judy roseless</p>
                                <p className="larsseit uppercase text-xs my-1 tracking-widest">marketing head at rom.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-16 bg-[#05233A] text-white flex gap-5 rounded-[4px]">
                    <div>
                        <RiDoubleQuotesL className='text-5xl text-[#6EC9C1]'></RiDoubleQuotesL>
                    </div>
                    <div className='pt-3'>
                        <h1 className="larsseit leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, aut.</h1>
                        <p className="larsseitlight my-5 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloribus laborum ad beatae dolore, repellendus fuga similique impedit velit quisquam corrupti explicabo repudiandae accusamus magnam!</p>
                        <div className="flex items-center gap-5">
                            <img className="w-20 h-20 rounded-lg shadow-sm shadow-[#41EAD4] object-cover" src="https://img.freepik.com/premium-photo/close-up-portrait-sad-young-man-dressed-shirt_171337-30391.jpg" alt="" />
                            <div>
                                <p className="larsseit uppercase text-xs my-1 tracking-widest">judy roseless</p>
                                <p className="larsseit uppercase text-xs my-1 tracking-widest">marketing head at rom.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeoplesThoughts;