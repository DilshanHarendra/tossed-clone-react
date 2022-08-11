import {OPEN_CLOSE_MENU, OPEN_CLOSE_PRODUCT_MODEL} from '../types/siteSettingsType';
import store from '../store';

export const openCloseMenu = (action)=>{
    store.dispatch({
        type: OPEN_CLOSE_MENU,
        payload:action
    });

};

export const openCloseProductModel = (action)=>{
    store.dispatch({
        type: OPEN_CLOSE_PRODUCT_MODEL,
        payload:action
    });

};

