import { compose, createStore, applyMiddleware } from 'redux';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import reducers from './reducers';
// import createHistory from 'history/createBrowserHistory';
// import logger from './middlewares/logger';

// import saga from 'redux-saga';
import createSagaMiddleware from 'redux-saga';
import watchFetchReviews from './middlewares/saga';
// export const history = createHistory();

// const middleware = [thunk, logger, routerMiddleware(history)];

// export default createStore(
//   connectRouter(history)(reducers),
//   composeWithDevTools(applyMiddleware(...middleware)),
// );

const sagaMiddleware = createSagaMiddleware();
// export default createStore(
//   reducers,
//   applyMiddleware(sagaMiddleware)
// );
export default compose(applyMiddleware(sagaMiddleware))(createStore)(reducers);

sagaMiddleware.run(watchFetchReviews);
