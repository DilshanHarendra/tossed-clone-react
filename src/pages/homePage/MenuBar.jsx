import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

function MenuBar({active,setActive}){
    const menus = useSelector(state => state.foods.menus);
    const [primaryMenu,setPrimaryMenu] = useState([]);
    const [secondaryMenu,setSecondaryMenu] = useState([]);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [activeMenu,setActiveMenu] = useState(false);

    useEffect(()=>{

        window.addEventListener('resize',()=> {
            clearTimeout(window.menuResize);
            window.menuResize = setTimeout(() => {
                setMenu();
            }, 50);
        });
    },[]);

    useEffect(()=>{
        setMenu();
    },[menus]);

    useEffect(()=>{
        let i=secondaryMenu.findIndex(menu=>menu.id==active.id);
        setActiveMenu(i!=-1);
    },[active]);


    function setMenu(){
        if (window.innerWidth>1280){
            setPrimaryMenu(menus.slice(0,7));
            setSecondaryMenu(menus.slice(7,menus.length));
        }else if (window.innerWidth>1024){
            setPrimaryMenu(menus.slice(0,5));
            setSecondaryMenu(menus.slice(5,menus.length));
        }else if (window.innerWidth>768){
            setPrimaryMenu(menus.slice(0,4));
            setSecondaryMenu(menus.slice(4,menus.length));
        }else if (window.innerWidth>640){
            setPrimaryMenu(menus.slice(0,3));
            setSecondaryMenu(menus.slice(3,menus.length));
        }else if (window.innerWidth>450){
            setPrimaryMenu(menus.slice(0,2));
            setSecondaryMenu(menus.slice(2,menus.length));
        }
    }


    return(<div className="top-20 left-0 right-0 sticky h-20 shadow bg-white w-full   items-center flex  border-b  z-50 px-2 md:px-0">
        <div className="flex items-center justify-between container mx-auto px-4 xl:px-0">
            <ul className="flex  items-center w-3/4" >
                {
                    primaryMenu.map((menu,index)=>(
                        <li key={index} onClick={()=>setActive(menu)} className={`px-4  text-center  mr-4 rounded-full  cursor-pointer ${active?.id==menu.id?'bg-primary text-white':'text-primary'}`}>
                            <p className="truncate whitespace-nowrap" style={{maxWidth:'6rem'}}>{menu.title}</p>
                        </li>
                    ))
                }
            </ul>

            <div className="flex items-center text-primary">
                <button onClick={()=>setIsMenuOpen(prev=>!prev)} className={`flex items-center px-4 ${activeMenu&&'bg-primary text-white rounded-full '}`}>
                    <span>{activeMenu?active.title:'More'}</span>
                    {
                        isMenuOpen?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                    }



                </button>
                {
                    isMenuOpen&&<div className=" relative">
                        <ul style={{minWidth:'240px'}} className="absolute top-8 right-0 bg-white shadow z-10">
                            {
                                secondaryMenu.map((menu,index)=>(
                                    <li key={index} onClick={()=>setActive(menu)}  className={`py-2 whitespace-nowrap border-b border-b-gray-200  text-gray-600 hover:bg-gray-100 cursor-pointer ${active?.id==menu.id&&'font-semibold text-gray-900'}`}>
                                        <p className="truncate px-3">{menu.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>

        </div>
    </div>);
}export default MenuBar;
