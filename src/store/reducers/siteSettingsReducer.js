import {OPEN_CLOSE_MENU, OPEN_CLOSE_PRODUCT_MODEL,} from '../types/siteSettingsType';


const init ={
    isMenuOpen:false,
    productModel:false
};

export default function siteSettingsReducer(state=init,action){
    switch (action.type){
    case OPEN_CLOSE_MENU:{
        return{
            ...state,
            isMenuOpen:action.payload
        };
    }
    case OPEN_CLOSE_PRODUCT_MODEL:{
        return{
            ...state,
            productModel:action.payload
        };
    }
    default:return state;
    }
}
