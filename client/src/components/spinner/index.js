import React from 'react';
import { connect } from 'react-redux';

class Spinner extends React.Component {
    render() {
        return (
            <div style={styles.spinner}></div>
        )
    }
}

const styles = {
    spinner: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: `rgba(0, 0, 0, .5)`,
        backgroundSize: '15%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(https://storage.googleapis.com/howardwang15/spinner-v2.0.gif)`,        
    }
};

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(Spinner);