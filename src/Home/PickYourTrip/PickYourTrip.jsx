import './PickYourTrip.css'
import { MdClose } from 'react-icons/md';

const PickYourTrip = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-6 my-10">
                <h1 className='text-7xl neo min-w-[445px]'>Pick your trip</h1>
                <MdClose className='text-5xl text-[#6EC9C1]'></MdClose>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic sapiente ab adipisci reiciendis eveniet id, eos.</p>
            </div>
        </div>
    );
};

export default PickYourTrip;