import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'
import { fetchLiveScoresReducer } from './reducer';
import rootSaga from '../saga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers({
         scores: fetchLiveScoresReducer
        }),
        composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger))
    );

    sagaMiddleware.run(rootSaga)

    return store
}