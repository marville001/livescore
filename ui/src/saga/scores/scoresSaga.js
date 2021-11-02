import { call, put } from "@redux-saga/core/effects";
import { getLiveScoresFail, getLiveScoresSuccess } from "../../redux/action";
import { getLivescoresService } from "../../service/livescoreService";

export function* getLivescoresSaga(action) {
    try {
        const livescores = yield call(getLivescoresService)
        yield put(getLiveScoresSuccess(livescores))
    } catch (error) {
        yield put(getLiveScoresFail('Failed to load your projects'))
    }
}