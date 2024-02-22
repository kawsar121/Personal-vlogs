import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to={"/"} className='font-semibold text-red-900 text-xl'>Home</Link> </li>
                        <li> <Link to={"blogs"} className='font-semibold text-red-900 text-xl'>Travel Blogs</Link> </li>
                        <li> <Link to={"about"} className='font-semibold text-red-900 text-xl'>About Me</Link> </li>
                    </ul>
                </div>
                <a className="btn btn-primary text-black bg-white font-bold  text-lg">New Future BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to={"/"} className='font-semibold text-red-900 text-xl'>Home</Link> </li>
                    <li> <Link to={"blogs"} className='font-semibold text-red-900 text-xl'>Travel Blogs</Link> </li>
                    <li> <Link to={"about"} className='font-semibold text-red-900 text-xl'>About Me</Link> </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">🙋‍♂️</a>
            </div>
        </div>
    );
};

export default Header;