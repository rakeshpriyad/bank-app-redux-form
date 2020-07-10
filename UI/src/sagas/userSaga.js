

import { takeLatest, call, fork, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';


function submitToServer(data){
    console.log("User submit to server: "+JSON.stringify(data));
   return fetch('http://localhost:3000/comments', {
       method: 'POST',
       headers: {
           'Content-type' : 'application/json'
       },
       body: JSON.stringify(data)
   }).then( res => res.json()).catch(error => console.error(error));
}

function* callSubmit(action){
    yield put(startSubmit('UserForm'));
    let errors = {};
    const result = yield call(submitToServer, action.data);
    if(result.errors){
        console.log("Error occured : "+ result.errors)
        yield put({ type: 'ADD_USER_FAILED', errors: result.errors});
    } else {
       yield put({ type: 'ADD_USER_SUCCESSFULL'});
    }
    yield put(stopSubmit('UserForm', errors));
}

function* submitUserSaga(){
   yield takeLatest('ADD_USER', callSubmit);
}

export function* userSaga(){
    yield [
        fork(submitUserSaga)
    ]
}

