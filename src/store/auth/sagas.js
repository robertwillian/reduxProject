import { takeLatest, all, put } from 'redux-saga/effects'
import { authFailure, authRequest, authSuccess } from './actions';
import { authRequestService } from './services';


function* sagaRequestAuth(action) {
    let error = false;
    let data = false
    
    yield authRequestService(action.data)
    .then(result=> {
        data = result.data;
    })
    .catch(erro => {
        error = true
    })


    if(error !== false) {
        yield put(authFailure());
    }
    if(data !== false) {
        yield put(authSuccess(data));
    }
}

function* watchRequestAuth (){
    yield takeLatest(authRequest, sagaRequestAuth);
}


export default all([
    watchRequestAuth()
])