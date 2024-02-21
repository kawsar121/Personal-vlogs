import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='mb-80'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;