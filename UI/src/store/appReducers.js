import {default as reduxThunk} from "../redux-thunk/reducer"
import {default as reduxSaga} from "../reducers/reducer"
import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';


const reducers = combineReducers({
    reduxThunk: reduxThunk,
    reduxSaga: reduxSaga,
    form: formReducer
});

export default reducers;