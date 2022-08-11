import React from 'react';

function Cart(){


    return<div className="p-3 bg-white shadow mt-8">
        <div className="w-full h-36 grid place-items-center">
            <div>
                <svg className="w-10 h-10 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 24 24" role="presentation" focusable="false" >
                    <path d="M14 15V13H10V15H14ZM15 15H19.1872L19.7172 13H15V15ZM14 12V10H15V12H19.9822L20.5122 10H3.48783L4.01783 12H9V10H10V12H14ZM14 18V16H10V18H14ZM15 18H18.3922L18.9222 16H15V18ZM9 15V13H4.28283L4.81283 15H9ZM9 18V16H5.07783L5.60783 18H9ZM7 8V3H17V8H23L20 20H4L1 8H7ZM9 8H15V5H9V8Z" />
                </svg>
                <p className="text-gray-400 font-semibold mt-2">Your basket is empty</p>
            </div>
        </div>

        <button className="w-full bg-gray-200 text-gray-400 rounded-sm font-semibold py-2 ">Go to checkout</button>
    </div>;
}export default Cart;
