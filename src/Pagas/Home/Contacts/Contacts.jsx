import { AiTwotoneCalendar } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
const Contacts = () => {
    return (
        <div className='bg-black grid grid-cols-3 p-8 rounded-xl my-16'>
            <div className='flex gap-3 items-center'>
                <AiTwotoneCalendar className='text-white text-5xl'></AiTwotoneCalendar>
                <div>
                    <h1 className='text-white text-xl'>We are open monday-friday</h1>
                    <h1 className='text-white text-3xl'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <dir className='flex gap-3 items-center'>
                <BsFillTelephoneFill className='text-white text-5xl'></BsFillTelephoneFill>
                <div>
                    <h1 className='text-white text-xl'>Have a question?</h1>
                    <h1 className='text-white text-3xl'>+2546 251 2658</h1>
                </div>
            </dir>
            <div className='flex gap-3 items-center'>
                <ImLocation2 className='text-white text-5xl'></ImLocation2>
                <div>
                    <h1 className='text-white text-xl'>Need a repair? our address</h1>
                    <h1 className='text-white text-3xl'>Liza Street, New York</h1>
                </div>
            </div>

        </div>
    );
};

export default Contacts;