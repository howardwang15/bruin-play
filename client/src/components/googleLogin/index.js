import React from 'react';
import GoogleLogin from 'react-google-login';

class GoogleClientLogin extends React.Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
    }
    
    login(response) {
        try {
            console.log(response);
        } catch (err) {
            console.log(err);
        }
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

export default GoogleClientLogin;