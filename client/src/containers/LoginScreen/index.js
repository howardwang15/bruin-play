import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import FacebookLogin from '../../components/facebookLogin';
import GoogleLogin from '../../components/googleLogin';

class LoginScreen extends React.Component {
    render() {
        return (
            <div id='login-screen'>
                <div className='row'> 
                    <div className='col-12' id='login'>
                        <h1>Bruin Play</h1>
                        <FacebookLogin />
                        <span>OR</span>
                        <GoogleLogin />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(LoginScreen)
