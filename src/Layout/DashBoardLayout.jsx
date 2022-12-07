import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {

    return (
        <div>
            <div className="grid grid-cols-3 lg:max-w-screen-md ">
                <div>
                    <ul className="menu h-screen p-4 lg:w-52 md:w-52 w-32 bg-orange-200 text-base-content">
                        <li className='bg-black text-white rounded'>
                            <Link to={'/dashboard/home'}>Home</Link></li>
                        <li><Link to={'/dashboard/'}>Notification</Link></li>
                        <li><Link to={'/dashboard/'}>Shorts</Link></li>
                        <li><Link to={'/dashboard/'}>Profile</Link></li>
                    </ul>
                </div>
                <div className="col-span-2 ...">
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default DashBoardLayout;