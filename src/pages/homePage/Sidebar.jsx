import React from 'react';
import {motion} from 'framer-motion';
import {sideBarAnimation} from '../../helper/animations';
import {openCloseMenu} from '../../store/actions/siteSettingsAction';
import logo from '../../assets/images/logo.png';

function Sidebar(){



    return(<motion.div
        variants={sideBarAnimation}
        initial="init"
        animate="animate"
        exit="exit"
        className="fixed top-0 right-0  z-50 bg-white  shadow h-screen overflow-hidden max-h-screen h-full p-4 px-5">


        <div className="w-full">
            <div className="border-b flex w-full justify-between">
                <img src={logo} className="w-40" alt="logo"/>
                <button onClick={()=>openCloseMenu(false)} className="text-primary" >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <button className="bg-primary px-4  py-3 mt-6 font-semibold text-center w-full rounded-md text-white whitespace-nowrap" >
                Sign up or log in
            </button>

            <div className="flex w-full mt-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="ml-3">FAQs</p>
            </div>

            <div className="absolute bottom-5 right-0 left-0 w-full px-4">
                <select name="" id="" className="w-full border-gray-200">
                    <option value="">English</option>
                </select>

                <select name="" id="" className="w-full border-gray-200 mt-5">
                    <option value="">United Kingdom</option>
                </select>
            </div>


        </div>




    </motion.div>);
}export default  Sidebar;

