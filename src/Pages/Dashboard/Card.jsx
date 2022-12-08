import React from 'react';
import { FaBeer, FaHeart } from 'react-icons/fa';

const Card = () => {
    return (
        <div>
            <div className="card border-4 mt-3 shadow-2xl card-compact w-40 bg-base-100 shadow-xl">
                <h1 className='font-bold my-3'>Lorem ipsum dolor  </h1>
                <figure className='rounded'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className="avatar  items-center">
                            <div className="w-8 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                            <span>Name</span>
                        </div>
                        <div className='flex items-center'>
                            <span>15.5k</span>
                            <FaHeart></FaHeart>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;