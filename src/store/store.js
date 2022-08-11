import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistConfig = {
    key: 'foodApp',
    storage,
    whitelist: [],  //save specific stores
    stateReconciler: autoMergeLevel2
};




const middleware = [thunk];


const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(

    persistedReducer,
    compose(
        applyMiddleware(...middleware)
    )
);


export const persistor = persistStore(store);










export default store;
