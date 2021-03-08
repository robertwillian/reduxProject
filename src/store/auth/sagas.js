import { takeLatest, all, put } from 'redux-saga/effects'
import { actionAuthFailure, actionAuthSuccess, authRequest } from './actions';
import { authRequestService } from './services';


function* sagaRequestAuth(action) {
    let error = false;
    let data = false
    
    yield authRequestService(action.data)
    .then(result=> {
        console.log(result.data);
        data = {
            token: result.data.token,
            name: result.data.user.name
        };
    })
    .catch(erro => {
        error = true
    })


    if(error !== false) {
        yield put(actionAuthFailure());
    }
    if(data !== false) {
        yield put(actionAuthSuccess(data));
    }
}

function* watchRequestAuth (){
    yield takeLatest(authRequest, sagaRequestAuth);
}


export default all([
    watchRequestAuth()
])