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

    toggle(e) {
        //e.stopPropagation();
        this.setState({
            download: !this.state.download
        });
    }

    reset() {
        this.setState({
            download: false
        });
    }

    render() {
        return this.state.download ? (
            <div>
                <div className='shield' onClick={() => this.reset()}></div>
                <img src={Download} width='15%' onClick={(e) => this.props.downloadSong(this.props.song, e)}></img>
            </div>
        )
        : (
            <div>
                <img src={Dots} width='15%' onClick={(e) => this.toggle(e)} className='image'></img>
            </div>
        )
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
