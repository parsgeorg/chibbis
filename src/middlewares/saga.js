import {requestReviewsStart, requestReviewsSuccess, requestReviewsError, fetchReviews} from '../actions';
import {takeEvery, put, call} from 'redux-saga/effects';
//import {fetchReviews} from '../api';

export default function* watchFetchReviews() {
  yield takeEvery('FETCH_REVIEWS', fetchReviewsAsync);
}

function* fetchReviewsAsync() {
  try {
    yield put(requestReviewsStart());
    // const data = yield call(() => {
    //   return fetch('https://arh.chibbistest.ru/test-api/v1/front-task')
    //           .then(res => res.json())
    //   }
    // );
    const data = yield call(() => {
      return fetchReviews()
      }
    );
    yield put(requestReviewsSuccess(data));
  } catch (error) {
    yield put(requestReviewsError());
  }
}