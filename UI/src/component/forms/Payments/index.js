import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/submitAction';
import Payments from './Payments';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    console.log(actionCreators)
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
