import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {default as reduxSaga} from "./reducer"

const reducers =  combineReducers({
    routing: routerReducer,
    reduxSaga: reduxSaga,
    form:  formReducer
});

export default reducers;