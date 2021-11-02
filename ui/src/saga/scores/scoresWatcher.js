import { takeLatest } from "@redux-saga/core/effects";
import { GET_LIVESCORES_LOAD } from "../../redux/types";
import { getLivescoresSaga } from "./scoresSaga";


export default function* watchLivescoresSagas() {
    yield takeLatest(GET_LIVESCORES_LOAD, getLivescoresSaga)
}