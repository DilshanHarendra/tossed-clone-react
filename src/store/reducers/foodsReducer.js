import {GET_FOODS, GET_MENUS} from '../types/foodsType';

const init ={
    menus:[],
    foods:{}

};

export default function foodsReducer(state=init,action){
    switch (action.type){
    case GET_MENUS:{
        return{
            ...state,
            menus:action.payload
        };
    }
    case GET_FOODS:{

        let id = action.payload.id;
        if (!state.foods[id]){
            return {
                ...state,
                foods: {...state.foods,[id]:action.payload.data}
            };
        }else {
            return state;
        }


    }

    default:return state;
    }
}
