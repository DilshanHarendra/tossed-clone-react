import React, {createRef, useEffect, useState} from 'react';
import FoodSection from './FoodSection';
import Cart from './Cart';
import HeroSection from './HeroSection';
import MenuBar from './MenuBar';
import {useSelector} from 'react-redux';
import {AnimatePresence} from 'framer-motion';
import Sidebar from './Sidebar';
import ProductModel from './ProductModel';
import LoadingCards from '../../components/LoadingCards';
import {getMenus} from '../../store/actions/foodsAction';
import DealsSection from './DealsSection';

function HomePage(){

    const isMenuOpen = useSelector(state => state.siteSettings.isMenuOpen);
    const productModel = useSelector(state => state.siteSettings.productModel);
    const menus = useSelector(state => state.foods.menus);
    const div = createRef();
    const [activeMenu, setActiveMenu] = useState(menus[0]);
    const [loadingMenus,setLoadingMenus] = useState(true);

    useEffect(()=>{
        if (menus.length==0){
            fetchMenus();
        }else{
            setLoadingMenus(false);
        }
        return ()=>{
            window.removeEventListener('scroll',()=>{});
            window.removeEventListener('wheel',()=>{});
            window.removeEventListener('keydown',()=>{});
        };
    },[]);

    function fetchMenus(){
        getMenus()
            .then((m)=>{
                setActiveMenu(m[0]);
                setLoadingMenus(false);
            })
            .catch(err=>console.log(err));
    }


    return(<div className="px-2 md:px-0">
        <HeroSection/>
        {menus.length>0&&  <MenuBar  setActive={m=>setActiveMenu({...m,event:'click'})} active={activeMenu}/>}

        <div ref={div} className="flex flex-col md:flex-row items-start justify-between mt-4 container mx-auto px-4 xl:px-0">
            <div className="md:w-4/6 w-full md:mr-4 overflow-y-auto">
                <DealsSection/>
                {
                    menus.map((menu)=>(
                        <FoodSection key={menu.id} menu={menu} activeMenu={activeMenu} reachTop={m=>setActiveMenu({...m,event:''})} />
                    ))
                }
                {
                    loadingMenus&&[1,2,3,4,5].map(item=><LoadingCards key={item} type={3} />)
                }

            </div>
            <div className="md:w-2/6 w-full md:block hidden">
                <Cart />
            </div>
        </div>
        <AnimatePresence exitBeforeEnter>
            {isMenuOpen&&<div className="w-screen h-screen fixed top-0 left-0 right-0 z-50" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                <Sidebar/>
            </div>}
        </AnimatePresence>

        <AnimatePresence exitBeforeEnter>
            {productModel&&<div className="w-screen h-screen fixed top-0 left-0 right-0 z-50 grid place-items-center" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                <ProductModel/>
            </div>}
        </AnimatePresence>
    </div>);
}export default HomePage;
