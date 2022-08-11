import store from '../store';
import {GET_FOODS, GET_MENUS} from '../types/foodsType';
import foods from '../../assets/data/foods.json';
import menus from '../../assets/data/menuItems.json';

export const getMenus = ()=>{
    return new Promise((resolve,reject)=>{
        // const menus=[
        //     {
        //         name: "Salads",
        //         description:"Freshly made to every order, we think these are the best salads in London. Choose one of our favourites or create your own!"
        //     },
        //     {
        //         name: "Rainbow Wraps",
        //         description:"Made fresh for each and every order this is what a wrap should be like! Filling, fresh and packed full of good stuf"
        //     },
        //     {
        //         name: "Hot Power Bowls",
        //         description:"Fresh, Filling, healthy hot food. All made to order and totally customizable."
        //     },
        //     {
        //         name: "Protein HIITS",
        //         description:"Post workout? Pimp your protein with a HIIT!"
        //     },
        //     {
        //         name: "Snacks",
        //         description:"something extra"
        //     },
        //     {
        //         name: "Fresh Fruit",
        //         description:"something extra"
        //     },
        //     {
        //         name: "Desserts",
        //         description:"to satisfy your sweet tooth!"
        //     },
        //     {
        //         name: "Smoothies",
        //         description:"made with fresh ingredients!"
        //     },
        //     {
        //         name: "Freshly Squeezed Juices",
        //         description:""
        //     },
        //     {
        //         name: "Cold Drinks",
        //         description:""
        //     },
        //     {
        //         name: "Smoothies",
        //         description:"made with fresh ingredients!"
        //     }
        // ]
        setTimeout(()=>{
            store.dispatch({
                type: GET_MENUS,
                payload:menus
            });
            resolve(menus);
        },1000);
    });


};

export const getFoodsByMenu = (id)=>{


    return new Promise((resolve,reject)=>{

        let payload = foods.find(food=>food.id==id);
        if (payload){
            setTimeout(()=>{
                store.dispatch({
                    type: GET_FOODS,
                    payload
                });
                resolve(payload);
            },1000);
        }else{
            reject({message:'Invalid ID'});
        }

    });


};


