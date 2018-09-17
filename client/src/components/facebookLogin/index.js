import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { login } from '../../actions/auth';

class FBLogin extends React.Component {
    constructor() {
        super();
        this.componentClicked = this.componentClicked.bind(this);
        this.callback = this.callback.bind(this);
    }

    componentClicked() {
        
    }

    callback(response) {
        this.props.login(response);
    }

    render() {
        return (
            <FacebookLogin 
                appId={process.env.REACT_APP_FACEBOOK_ID}
                autoLoad={false} 
                fields='name,email,picture' 
                onClick={this.componentClicked} 
                callback={this.callback} />
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(FBLogin);