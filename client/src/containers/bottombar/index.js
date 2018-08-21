import React from 'react';
import { connect } from 'react-redux';
import './styles.css';


class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false
        };
    }

    render() {
        return (
            <audio controls controlsList='nodownload' autoPlay className='container'>
                <source src={this.props.songs.url} type='audio/mpeg'></source>
            </audio>
        )
    }
}

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(BottomBar);