import { GET_LIVESCORES_FAIL, GET_LIVESCORES_LOAD, GET_LIVESCORES_SUCCESS } from "./types"

export const getLiveScoresLoad = () => {
    return ({
        type: GET_LIVESCORES_LOAD
    })
}

export const getLiveScoresSuccess = (livescores) => {
    return ({
        type: GET_LIVESCORES_SUCCESS,
        livescores
    })
}

export const getLiveScoresFail = (error) => {
    return ({
        type: GET_LIVESCORES_FAIL,
        error
    })
}