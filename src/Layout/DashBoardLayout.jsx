import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Navbar from '../Pages/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [userInformation, setUserInformation] = useState();



    return (
        <div>
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label className="drawer-overlay"></label>
                <ul className="menu h-screen p-4 lg:w-80 md:w-52 w-36 bg-orange-200 text-base-content">

                    <li className='bg-black text-white rounded'><Link to={'/dashboard/'}>Home</Link></li>
                    <li><Link to={'/dashboard/'}>Notification</Link></li>
                    <li><Link to={'/dashboard/'}>Shorts</Link></li>
                    <li><Link to={'/dashboard/'}>Profile</Link></li>

                </ul>
            </div >
        </div >
    );
};

export default DashBoardLayout;