import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import  rootSaga  from './sagas';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk];

const store = createStore(rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware, sagaMiddleware),  
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
);

sagaMiddleware.run(rootSaga);
export default store;