import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import Dots from '../../resources/three-dots.png';
import Download from '../../resources/download-icon.png';
import { downloadSong } from '../../actions/songs';

class ActionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            download: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            download: !this.state.download
        });
    }

    render() {
        console.log(this.props.song);
        return this.state.download ? (
            <img src={Download} width='15%' onClick={() => this.props.downloadSong(this.props.song)}></img>
        ) : 
        <img src={Dots} width='15%' onClick={() => this.toggle()}></img>
    }
}

const mapStateToProps = state => {
    return { ...state };
}

const mapDispatchToProps = dispatch => {
    return {
        downloadSong: song => dispatch(downloadSong(song))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
