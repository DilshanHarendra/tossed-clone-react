import React from "react";
import Routers from "../routers/Routers";
import {  Link } from "react-router-dom";
function MainLayout(){


    return(<>
       <div className="container text-lg mx-auto">
           <nav>
               <ul>

                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>


               </ul>
           </nav>
           <Routers/>
       </div>


    </>)
}export default MainLayout
