import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/submitUserAction';

import {ConnectedCreateUserForm} from './UserForm';

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
       /*  initialValues: {
            id: ownProps.users.id,
            userName: ownProps.users.userName,
            emailAddress: ownProps.users.mailAddress,
            mobileNo: ownProps.users.tel
          } */
    };

    
}

function mapDispatchToProps(dispatch) {
    console.log("-----USER--"+actionCreators)
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedCreateUserForm);
