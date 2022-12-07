import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email);



    const manuItems = <React.Fragment>

        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link to={'/home'}>Home</Link></li>

        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link to={'/dashboard'}>DashBoard</Link></li>

        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link to={'/'}>About</Link></li>

        <li className='hover:bg-red-500 font-bold rounded-lg'>
            <Link to={'/'}>Contact</Link></li>

        {
            user?.email ?
                <>
                    <li className='hover:bg-red-500 font-bold rounded-lg'>
                        <Link onClick={() => logOut()} to={'/'}>Log Out</Link></li>
                </>
                :
                <>
                    <li className='hover:bg-red-500 font-bold rounded-lg'>
                        <Link to={'/signup'}>Sign Up</Link></li>
                    <li className='hover:bg-red-500 font-bold rounded-lg'>
                        <Link to={'/login'}>Login</Link></li>
                </>
        }



        <div className="form-control mt-2">
            <label className="label cursor-pointer">
            </label>
        </div>
    </React.Fragment >


    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl font-bold uppercase">Our Logo</Link>
                </div>
                <div className="flex-none">
                    <ul className=" navbar-center hidden lg:flex menu menu-horizontal p-0">
                        {manuItems}
                    </ul>

                    <div className="dropdown dropdown-end btn-ghost lg:hidden">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <ul tabIndex={0} className=" bg-base-100 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            {manuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;