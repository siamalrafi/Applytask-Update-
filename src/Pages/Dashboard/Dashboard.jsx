import React from 'react';
import Card from './Card';

const Dashboard = () => {
    const profliPics = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl font-bold">Home</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control flex-row">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div className="avatar items-center">
                            <div className="w-14 mask mask-squircle">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                            <span>Darin Rodman</span>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-black btn rounded'>Upload content</button>
                </div>
            </div>

            {/* shorts section */}

            <div className='px-10'>
                <div>
                    <h1 className='text-xl text-black'>Shorts</h1>
                </div>

                <div className="avatar flex-col items-center">
                    <div className="w-10 m-2 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    <h1>Me</h1>
                </div>
                {
                    profliPics?.map((profliPic, i) =>
                        <div key={i} className="avatar flex-col items-center">
                            <div className="w-8 m-2 rounded-full">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                            <h1>Name</h1>

                        </div>

                    )
                }
            </div>

            <div className='px-10'>
                <div>
                    <h1 className='text-xl my-5 font-bold text-black'>Top 10 Article</h1>
                </div>
            </div>
            {/*Top 10 Article section */}
            <div className='px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>

                {
                    cards?.map((card, i) => <Card key={i}>

                    </Card>)
                }


            </div>


        </div>
    );
};

export default Dashboard;