import img1 from './../../../assets/images/products/1.png'
import img2 from './../../../assets/images/products/2.png'
import img3 from './../../../assets/images/products/3.png'
import img4 from './../../../assets/images/products/4.png'
import img5 from './../../../assets/images/products/5.png'
import img6 from './../../../assets/images/products/6.png'

import { AiFillStar } from 'react-icons/ai';

const Products = () => {
    return (
        <div className="text-center mb-16">
            <h1 className="font-medium text-orange-700">Popular Products</h1>
            <h1 className="text-3xl font-bold">Browse Our Products</h1>
            <p className="w-3/4 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-3 gap-8 mt-4">
                <div className='text-center border-2 border-stone-400 rounded-lg p-4'>
                    <img className='mx-auto bg-slate-200 rounded-lg' src={img1} alt="" />
                    <div className='flex gap-1 text-orange-500 justify-center mt-3 items-center text-xl'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <h1 className='font-medium text-xl'>Car Engine Plug</h1>
                    <p className='text-orange-500'>$20.00</p>
                </div>
                <div className='text-center border-2 border-stone-400 rounded-lg p-4'>
                    <img className='mx-auto bg-slate-200 rounded-lg' src={img2} alt="" />
                    <div className='flex gap-1 text-orange-500 justify-center mt-3 items-center text-xl'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <h1 className='font-medium text-xl'>Car Engine Plug</h1>
                    <p className='text-orange-500'>$20.00</p>
                </div>
                <div className='text-center border-2 border-stone-400 rounded-lg p-4'>
                    <img className='mx-auto bg-slate-200 rounded-lg' src={img3} alt="" />
                    <div className='flex gap-1 text-orange-500 justify-center mt-3 items-center text-xl'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <h1 className='font-medium text-xl'>Car Engine Plug</h1>
                    <p className='text-orange-500'>$20.00</p>
                </div>
                <div className='text-center border-2 border-stone-400 rounded-lg p-4'>
                    <img className='mx-auto bg-slate-200 rounded-lg' src={img4} alt="" />
                    <div className='flex gap-1 text-orange-500 justify-center mt-3 items-center text-xl'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <h1 className='font-medium text-xl'>Car Engine Plug</h1>
                    <p className='text-orange-500'>$20.00</p>
                </div>
                <div className='text-center border-2 border-stone-400 rounded-lg p-4'>
                    <img className='mx-auto bg-slate-200 rounded-lg' src={img5} alt="" />
                    <div className='flex gap-1 text-orange-500 justify-center mt-3 items-center text-xl'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <h1 className='font-medium text-xl'>Car Engine Plug</h1>
                    <p className='text-orange-500'>$20.00</p>
                </div>
                <div className='text-center border-2 border-stone-400 rounded-lg p-4'>
                    <img className='mx-auto bg-slate-200 rounded-lg' src={img6} alt="" />
                    <div className='flex gap-1 text-orange-500 justify-center mt-3 items-center text-xl'>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                    <h1 className='font-medium text-xl'>Car Engine Plug</h1>
                    <p className='text-orange-500'>$20.00</p>
                </div>
                
            </div>
        </div>
    );
};

export default Products;