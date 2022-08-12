import store from '../store';
import {GET_FOODS, GET_MENUS} from '../types/foodsType';
import foods from '../../assets/data/foods.json';
import menus from '../../assets/data/menuItems.json';

export const getMenus = ()=>{
    return new Promise((resolve)=>{

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


