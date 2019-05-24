import { REQUEST_REVIEWS_START, REQUEST_REVIEWS_SUCCESS, REQUEST_REVIEWS_FAILURE, FETCH_REVIEW_BY_ID_SUCCESS } from '../actions/actionTypes';
import * as R from 'ramda';

const initialState = {
    items: [],
    loading: false,
    error: false
};

export default (state = initialState, {type, data}) => {
    switch (type) {
        
        case REQUEST_REVIEWS_START:
            return {
                items: '',
                loading: true,
                error: false,
            };
        case REQUEST_REVIEWS_SUCCESS:
            return {
                ...state,
                items: data, //[...state.items, ...data]
                loading: false,
                error: false,
            };
        case REQUEST_REVIEWS_FAILURE:
            return {
                items: '',
                loading: false,
                error: true,
            };
        // case LOAD_MORE_REVIEWS_SUCCESS:
        //     return state;
        // case FETCH_REVIEW_BY_ID_SUCCESS:
        //     return R.assoc(payload.id, payload, state);
        default:
            return state;
    }
};