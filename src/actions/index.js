import * as types from './actionTypes';
import * as api from '../api';

// export const fetchReviews = () => async dispatch => {
//     dispatch({type: types.FETCH_REVIEWS_START});

//     try {
//         const response = await api.fetchReviews();
//         return dispatch({
//             type: types.FETCH_REVIEWS_SUCCESS,
//             payload: response,
//         });

//     } catch (err) {
//         dispatch({
//             type: types.FETCH_REVIEWS_FAILURE,
//             payload: err,
//             error: true,
//         });
//     }
// };

export const requestReviewsStart = () => {
    return { type: 'REQUEST_REVIEWS_START' }
  };
  
export  const requestReviewsSuccess = data => {
    return { type: 'REQUEST_REVIEWS_SUCCESS', data}
  };
  
  export  const requestReviewsError = () => {
    return { type: 'REQUEST_REVIEWS_FAILURE' }
  };
  
  export  const fetchReviews = () => async dispatch => {
    //return await dispatch({ type: 'FETCH_REVIEWS' })
    const response = await api.fetchReviews();
        return dispatch({
            type: types.FETCH_REVIEWS,
            payload: response,
        });
  };

//export  const fetchReviews = () => {
//     return { type: 'FETCHED_REVIEWS' }
//   };

export const fetchReviewById = id => async dispatch => {
    dispatch({type: types.FETCH_REVIEW_BY_ID_START});

    try {
        const product = await api.fetchReviewById(id);
        const payload = {
            ...product,
            id,
        };

        dispatch({
            type: types.FETCH_REVIEW_BY_ID_SUCCESS,
            payload,
        });
    } catch (err) {
        dispatch({
            type: types.FETCH_REVIEW_BY_ID_FAILURE,
            payload: err,
            error: true,
        });
    }
};

export const searchReviews = filteredReviews => dispatch => {
    dispatch({
        type: types.SEARCH_REVIEW,
        payload: filteredReviews
    });
};

export const setDataLoading = (flag) => dispatch => {
    // console.log('setDataLoading', flag);
    dispatch({
        type: types.SET_DATA_LOADING,
        payload: flag,
    });
}

export const showModal = options => dispatch => {
    dispatch({
        type: types.SHOW_MODAL,
        payload: options,
    });
};

export const hideModal = () => dispatch => {
    dispatch({
        type: types.HIDE_MODAL
    });
};


