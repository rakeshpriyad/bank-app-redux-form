import React, { Component } from 'react';
import AccountCreate from '../component/forms/Accounts/index';
import {connect} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';

export class Home extends Component {
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                 <Container maxWidth="sm"> 
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                    <div className="row">
                    <div className="column"></div>
                    <div className="column"><AccountCreate /></div>
                    <div className="column"></div>
                    </div>
                    </Typography>
                </Container>
            </React.Fragment>
    )
    }
}

export default connect({
})(Home);
