import React from "react";

function Footer(){
    return(<div className="w-full p-5 mt-8" style={{backgroundColor:"#2e3333"}}>
            <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-4 text-white">

                <div className="p-5" style={{background:"hsla(0,0%,100%,.1)"}}>
                    <h2 className="font-black text-lg mb-3">Discover Deliveroo</h2>
                    <ul>
                        <li className="mb-2 hover:text-primary">Investors</li>
                        <li className="mb-2 hover:text-primary">About us</li>
                        <li className="mb-2 hover:text-primary">Takeaway</li>
                        <li className="mb-2 hover:text-primary"> More</li>
                        <li className="mb-2 hover:text-primary">Newsroom</li>
                        <li className="mb-2 hover:text-primary">Foodscene blog</li>
                        <li className="mb-2 hover:text-primary">Engineering blog</li>
                        <li className="mb-2 hover:text-primary">Design blog</li>
                        <li className="mb-2 hover:text-primary">Gift Cards</li>
                        <li className="mb-2 hover:text-primary">Careers</li>
                    </ul>
                </div>


                <div className="p-5" style={{background:"hsla(0,0%,100%,.1)"}}>
                    <h2 className="font-black text-lg mb-3">Legal</h2>
                    <ul>
                        <li className="mb-2 hover:text-primary"> Terms and conditions</li>
                        <li className="mb-2 hover:text-primary">Privacy</li>
                        <li className="mb-2 hover:text-primary">Cookies</li>
                        <li className="mb-2 hover:text-primary">Tax Strategy</li>
                        <li className="mb-2 hover:text-primary">Section 172 Statement</li>
                    </ul>
                </div>


                <div className="p-5" style={{background:"hsla(0,0%,100%,.1)"}}>
                    <h2 className="font-black text-lg mb-3">Help</h2>
                    <ul>
                        <li className="mb-2 hover:text-primary">Contact</li>
                        <li className="mb-2 hover:text-primary">FAQs</li>
                        <li className="mb-2 hover:text-primary">Cuisines</li>
                        <li className="mb-2 hover:text-primary">Brands</li>

                    </ul>
                </div>



                <div className="p-5" style={{background:"hsla(0,0%,100%,.1)"}}>
                    <h2 className="font-black text-lg mb-3">Take Deliveroo with you</h2>
                    <ul>

                    </ul>
                </div>
            </div>
    </div>)
}export default Footer
