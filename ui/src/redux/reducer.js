import { GET_LIVESCORES_FAIL, GET_LIVESCORES_LOAD, GET_LIVESCORES_SUCCESS } from './types'

export const fetchLiveScoresReducer = (state = { livescores: [] }, action) => {
    switch (action.type) {
        case GET_LIVESCORES_LOAD:
            return {
                ...state,
                loading: true
            };
        case GET_LIVESCORES_SUCCESS:
            return {
                ...state,
                loading: false,
                livescores: [action.livescores]
            };
        case GET_LIVESCORES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}