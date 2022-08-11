import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './defaultLayout/Navbar';
import Footer from './defaultLayout/Footer';

function DefaultLayout(){

    useEffect(()=>{

    },[]);


    return(<>
        <Navbar/>
        <div className="bg-gray-50">
            <Outlet/>

        </div>
        <Footer/>

    </>);
}export default DefaultLayout;
