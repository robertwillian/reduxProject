import { authFailure, authRequest, authSuccess } from "./actions";

const auth_state = {
    isLoading: false,
    error: false,
    data: {
        token: null,
        name: null
    }
}

const reducer = (state = auth_state, action) => {
    switch (action.type) {
        case authRequest:
            return {
                ...state,
                isLoading: true
            }

        case authSuccess:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }

        case authFailure:
            return {
                ...state,
                isLoading: false,
                error: true
            }
    
        default:
            break;
    }
}

export default reducer;