import { CLEAR_ERROR, RESET_PESQUISA, RESET_PESQUISA_DETALHADA, SET_ERROR, SET_LOADING, SET_PESQUISA, SET_PESQUISA_DETALHADA } from "./types";

function reducer(state, action) {
    switch (action.type) {
        case SET_PESQUISA:
            return {
                ...state,
                result: action.payload,
                isLoading: false
            };

        case RESET_PESQUISA:
            return {
                ...state,
                result: null
            };

        case SET_PESQUISA_DETALHADA:
            return {
                ...state,
                selected: action.payload
            };

        case RESET_PESQUISA_DETALHADA:
            return {
                ...state,
                selected: null
            };

        case SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            };

        default:
            return state;
    };
};

export default reducer;