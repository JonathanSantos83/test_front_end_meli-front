import * as types from '../../constants/ActionTypes';
import { getDetail } from '../../services/ApiServiceItems';

let initalState = {
    data: {
        author: null,
        item: null,
        categories: []
    },
    loading: false,
    error: false
};

export function fetchSearchDetail(id) {  
	return async (dispatch) => {    
        dispatch({      
            type: types.FETCH_ITEM_DETAIL    
        });
        try {      
            const response = await getDetail(id);
            const {data} = response;           
            dispatch({        
                type: types.FETCH_ITEM_DETAIL_SUCCESS, 
                data  
            });    
        } catch (err) {     
            dispatch({        
                type: types.FETCH_ITEM_DETAIL_ERROR, 
                err     
            });    
        }  
    };
}

export function searchItemDetailReducer(state = initalState, {type,  ...payload}) {
    switch (type) {
        case types.FETCH_ITEM_DETAIL:
            return {
                ...state,
                id: payload.id,
                loading: true
            };
        case  types.FETCH_ITEM_DETAIL_SUCCESS:
            return {
                ...state,
                data: payload.data,
                loading: false,
                error: false
            };
        case types.FETCH_ITEM_DETAIL_ERROR:
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