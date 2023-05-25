import { Link, useLoaderData } from 'react-router-dom';
import img1 from './../../assets/images/checkout/checkout.png';
// import logo from "./../../assets/icons/logo.eps/logo.eps";
import logo from "./../../assets/logo.svg";
import { TbFiles } from 'react-icons/tb';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';


const ServicesDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const { _id, img, facility } = data;
    return (
        <div>
            <div className='relative'>
                <img className='w-screen ' src={img1} alt="" />
                <div className='absolute rounded-xl flex gap-5 items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                    <h1 className='text-white ml-16 text-4xl font-bold'>Service Details</h1>

                </div>
            </div>
            <div className='flex gap-8 mt-24 mb-12'>
                <div className='w-3/4'>
                    <img className='w-full rounded-xl' src={img} alt="" />
                    <h1 className='text-4xl font-bold my-6'>Unique Car Engine Service</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    <div className='grid grid-cols-2 gap-8 my-8'>
                        <div className='bg-slate-200 p-8 rounded-lg border-t-4 border-t-red-700'>
                            <h1 className='text-lg font-medium'>Instant Car Services</h1>
                            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className='bg-slate-200 p-8 rounded-lg border-t-4 border-t-red-700'>
                            <h1 className='text-lg font-medium'>24/7 Quality Service</h1>
                            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className='bg-slate-200 p-8 rounded-lg border-t-4 border-t-red-700'>
                            <h1 className='text-lg font-medium'>Easy Customer Service</h1>
                            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className='bg-slate-200 p-8 rounded-lg border-t-4 border-t-red-700'>
                            <h1 className='text-lg font-medium'>Quality Cost Service</h1>
                            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                <div className='w-1/4'>
                    <div className='bg-slate-200 p-8 rounded-lg'>
                        <h1 className='text-xl font-bold'>Services</h1>
                        {
                            facility.map((a, index) => {
                                return (
                                    <div key={index} >
                                        <h1 className='text-lg font-medium bg-white mt-4 p-3 rounded-lg'>{a.name}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='bg-black p-8 rounded-lg mt-6 space-y-6'>
                        <h1 className='text-xl font-bold text-white'>Download</h1>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between items-center'>
                                <TbFiles className='text-white text-4xl'></TbFiles>
                                <div className='text-white'>
                                    <h1>Our Brochure</h1>
                                    <p>Download</p>
                                </div>
                            </div>
                            <BsFillArrowRightSquareFill className='text-red-600 text-4xl'></BsFillArrowRightSquareFill>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between items-center'>
                                <TbFiles className='text-white text-4xl'></TbFiles>
                                <div className='text-white'>
                                    <h1>Company Details</h1>
                                    <p>Download</p>
                                </div>
                            </div>
                            <BsFillArrowRightSquareFill className='text-red-600 text-4xl'></BsFillArrowRightSquareFill>
                        </div>
                    </div>
                    <div className='bg-black p-12 rounded-lg mt-6 pb-16'>
                        <img className='text-white mx-auto' src={logo} alt="" />
                        <h1 className='text-xl font-bold text-white w-2/3 text-center mx-auto my-8'>Need Help? We Are Here To Help You</h1>
                        <div className='bg-white p-8 rounded-lg mx-auto relative'>
                            <h1 className='text-center font-medium'>Car Doctor Special</h1>
                            <h1 className='font-medium text-center mb-6'>Save up to 60% off</h1>
                            <div className='bg-red-500 p-4 w-2/3 rounded-lg flex justify-center absolute'>
                                <h1 className='text-center font-medium text-white'>Get A Quote</h1>

                            </div>
                        </div>
                    </div>
                    <Link to={`/checkout/${_id}`}>
                        <button className='btn btn-success btn-block mt-8'>Proceed Checkout</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;