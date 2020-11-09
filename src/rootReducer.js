import { combineReducers } from 'redux';
import { searchItemsReducer as items } from './ducks/items';
import { searchItemDetailReducer as details } from './ducks/detail'

/**
 * Reducer App
 */
export default combineReducers({
    items,  
    details
});