import * as types from '../../constants/ActionTypes';
import { search }  from '../../services/ApiServiceItems';

let initalState = {
    data: {
        author: null,
        categories: [],
        items: []
    },
    loading: false,
    error: false
};

export function fetchSearchItems(query) {  
	return async (dispatch) => {    
        dispatch({      
            type: types.SEARCH_ITEMS,
            query    
        });
        try {      
            const response = await search(query) ;       
            const {data} = response;    
            dispatch({        
                type: types.SEARCH_ITEMS_SUCCESS, 
                data  
            });    
        } catch (err) {     
            dispatch({        
                type: types.SEARCH_ITEMS_ERROR, 
                err     
            });    
        }  
    };
}

export function searchItemsReducer(state = initalState, {type,  ...payload}) {
    switch (type) {
        case types.SEARCH_ITEMS:
            return {
                ...state,
                q: payload.query,
                loading: true
            };
        case types.SEARCH_ITEMS_SUCCESS:
            return {
                ...state,
                data: payload.data,
                loading: false,
                error: false
            };
        case types.SEARCH_ITEMS_ERROR:
            return {
                ...state,
                data: null,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}