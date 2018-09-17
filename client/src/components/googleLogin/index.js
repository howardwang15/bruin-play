import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class GoogleClientLogin extends React.Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
    }
    
    login(response) {
        this.props.login(response);
    }

    render() {
        return (
            <GoogleLogin 
                clientId={process.env.REACT_APP_GOOGLE_ID}
                buttonText='Sign in with Google'
                onSuccess={this.login}
                onFailure={this.login} />
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
}

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleClientLogin);