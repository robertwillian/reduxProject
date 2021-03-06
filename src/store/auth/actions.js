export const authRequest = "AUTH_REQUEST";
export const authSuccess = "AUTH_SUCCESS";
export const authFailure = "AUTH_FAILURE";


export const actionAuthRequest = (data) => ({
    type: authRequest,
    data: data
})

export const actionAuthSuccess = (data) => ({
    type: authSuccess,
    data: data
})

export const actionAuthFailure = () => ({
    type: authFailure
})
