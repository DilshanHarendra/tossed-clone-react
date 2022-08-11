import React, {useEffect, useRef, useState} from 'react';
import SingleProduct from '../../components/SingleProduct';
import {getFoodsByMenu} from '../../store/actions/foodsAction';
import LoadingCards from '../../components/LoadingCards';
import {useSelector} from 'react-redux';

function FoodSection({menu, reachTop,activeMenu}){

    const foods = useSelector(state => state.foods.foods);
    const [loading,setLoading] = useState(true);
    const boundary = 5*16*2;
    const ref = useRef();
    const id = menu.id||'';

    useEffect(()=>{
        if (activeMenu&&activeMenu.id == id&&activeMenu.event == 'click'){
            window.scrollTo(0, ref.current.offsetTop-boundary);
        }

    },[activeMenu]);

    useState(()=>{
        if (foods[id]){
            setLoading(false);
        }else {
            fetchFoods();
        }

        document.addEventListener('wheel',()=>{
            setScrollLink();
        });

        window.addEventListener('keydown', function(e) {
            if(['ArrowUp','ArrowDown'].indexOf(e.code) > -1) {
                setScrollLink();
            }
        });

    },[]);

    function setScrollLink(){
        try {
            const  section = document.getElementById(id);
            if (section){
                let offset = section.getBoundingClientRect();
                if (offset.top>(boundary-350)&&offset.top<boundary){
                    reachTop(menu);
                }
            }
        }catch (e){
        }

    }

    function fetchFoods(){
        getFoodsByMenu(id)
            .then(()=>setLoading(false))
            .catch(err=>console.log(err));
    }

    return(<div id={id} ref={ref}  className="p-2 mt-4">
        <h2 className="font-black text-xl text-gray-700">{menu.title}</h2>
        <p className="text-gray-500 text-md">{menu.description||''}</p>

        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-3">
            {
                !loading&&foods[id].map((product)=><SingleProduct product={product} key={product.dishId}/>)
            }
            {
                loading&&[0,1,2,3].map((item)=><LoadingCards type={2} key={item}/>)
            }
        </div>

    </div>);
}export default FoodSection;
