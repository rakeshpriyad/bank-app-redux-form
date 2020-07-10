import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/submitUserAction';

import UserForm from './UserForm';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    console.log("-----USER--"+actionCreators)
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
