import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Home</a>
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
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>


                <div>
                    <button className='bg-black btn rounded'>Upload content</button>
                </div>

            </div>








        </div>
    );
};

export default Dashboard;