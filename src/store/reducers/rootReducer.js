import {combineReducers} from 'redux';
import siteSettingsReducer from './siteSettingsReducer';
import foodsReducer from './foodsReducer';


const rootReducer =combineReducers({
    siteSettings:siteSettingsReducer,
    foods: foodsReducer
});
export default rootReducer;
