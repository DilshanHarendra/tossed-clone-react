import React from "react";
import logo from "../../assets/images/logo.png"
import {openCloseMenu} from "../../store/actions/siteSettingsAction"

function Navbar(){
    return(<div className=" shadow bg-white  border-b fixed w-full top-0 left-0 right-0 h-20 z-50">
        <div className="flex items-center justify-between container mx-auto md:px-0 px-3">
            <img src={logo} className="w-40" alt="logo"/>

            <div className="relative bg-gray-100 w-10  h-10 md:h-full  md:w-2/4 md:mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-3 left-2 text-gray-400 h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" className="md:block hidden rounded-sm pl-10 w-full bg-gray-100 border-gray-200 placeholder-gray-400 focus:border-black outline-none" placeholder="Search Tossed- St Martin's Lane "/>
            </div>

            <button className="hidden md:flex items-center border rounded-sm py-2 px-4 hover:border-gray-300 mr-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" role="presentation" focusable="false" >
                    <path d="M14 15V13H10V15H14ZM15 15H19.1872L19.7172 13H15V15ZM14 12V10H15V12H19.9822L20.5122 10H3.48783L4.01783 12H9V10H10V12H14ZM14 18V16H10V18H14ZM15 18H18.3922L18.9222 16H15V18ZM9 15V13H4.28283L4.81283 15H9ZM9 18V16H5.07783L5.60783 18H9ZM7 8V3H17V8H23L20 20H4L1 8H7ZM9 8H15V5H9V8Z" />
                </svg>
                <span className="ml-2">$10.00</span>
            </button>
            <button className="hidden md:flex items-center border rounded-sm py-2 px-4  hover:border-gray-300 whitespace-nowrap mr-2">
                <svg  fill="currentColor" viewBox="0 0 24 24" role="presentation" focusable="false" className="w-5 h-5 text-primary">
                    <path d="M3 10L5 8.44444V5H9.42857L12 3L21 10V21H3V10ZM14 19H19V10.9782L12 5.53372L5 10.9782V19H10V14H14V19Z" />
                </svg>
                <span className="ml-2">Sign up or log in</span>
            </button>
            <button onClick={()=>openCloseMenu(true)} className="flex items-center border rounded-sm py-2 px-4  hover:border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="ml-2">Menu</span>
            </button>


        </div>
    </div>)
}export default Navbar
