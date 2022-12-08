import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);



    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="deshboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="deshboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu h-screen p-4 lg:w-52 md:w-52 w-32 bg-orange-200 text-base-content">
                        <li className='bg-black text-white rounded'>
                            <Link to={'/dashboard/home'}>Home</Link></li>
                        <li><Link to={'/dashboard/'}>Notification</Link></li>
                        <li><Link to={'/dashboard/'}>Shorts</Link></li>
                        <li><Link to={'/dashboard/'}>Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DashBoardLayout;