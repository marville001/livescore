import {fork } from 'redux-saga/effects'
import watchLivescoresSagas from './scores/scoresWatcher'

export default function* rootSaga() {
    yield fork(watchLivescoresSagas)
}