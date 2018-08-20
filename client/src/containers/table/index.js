import React from 'react';
import './styles.css';
import Play from './play.png';
import Pause from './pause.png';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { updateSongs, playSong } from '../../actions/songs';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const songsURL = 'http://localhost:3000/songs';
        fetch(songsURL)
        .then(res => res.json())
        .then(json => this.props.updateSongs(json));
    }

    convertTime = (total_seconds) => {
        var minutes = Math.floor(total_seconds / 60);
        var seconds = total_seconds - minutes * 60;
        if (seconds < 10)
            seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    render() {
        return (
            <div>
                <Button color='primary'>New Song</Button>
                <table>
                    <thead>
                        <tr className="table_header">
                            <td className="narrow"></td>
                            <td><b>SONG</b></td>
                            <td><b>ARTIST</b></td>
                            <td><b>DURATION</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.songs.data.map((song, index) => 
                                <tr key={index} className="table_row">
                                    <div className="image_container">
                                        <img src={ this.props.songs.currentPlaying && this.props.songs.currentPlaying.name === 
                                            song.name ?  Pause : Play  } 
                                            className="narrow" onClick={() => this.props.playSong(song)}
                                            alt="Play"/>
                                    </div>
                                    <td>{song.name}</td>
                                    <td>{song.artist}</td>
                                    <td>{this.convertTime(song.duration)}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { ...state };
}

const mapDispatchToProps = dispatch => {
    return {
        updateSongs: payload => dispatch(updateSongs(payload)),
        playSong: payload => dispatch(playSong(payload))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Table)