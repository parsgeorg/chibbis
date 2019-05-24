import {SEARCH_REVIEW, SET_DATA_LOADING} from '../actions/actionTypes';

const initialState = {
    filteredReviews: undefined,
    isDataLoading: false
};

export default (state = initialState, {type, payload}) => {
    
    switch (type) {
        case SEARCH_REVIEW:
            return {
                ...state,
                filteredReviews: payload,
            };
        case SET_DATA_LOADING:
            return {
                ...state,
                isDataLoading: payload,
            };
        default:
            return state;
    }
};