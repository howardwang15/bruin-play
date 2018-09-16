import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

class FBLogin extends React.Component {
    constructor() {
        super();
        // this.componentClicked = this.componentClicked.bind(this);
        // this.callback = this.callback.bind(this);
    }

    componentClicked = () => {
        console.log('clicked');
    }

    callback = (response) => {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin 
                appId='160670254805959'
                autoLoad={true}
                fields='name,email,picture'
                onClick={this.componentClicked}
                callback={this.callback}
            />
        )
    }
}

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(FacebookLogin);