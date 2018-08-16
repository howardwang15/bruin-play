import React from 'react';
import './styles.css';
import BottomBar from '../bottombar';
import Play from './play.png';
import Pause from './pause.png';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { updateSongs, playSong } from '../../actions/songs';

var song_info = [
    {
        name: 'Nice For What',
        artist: 'Drake',
        length: 211,
    },
    {
        name: 'Psycho',
        artist: 'Post Malone',
        length: 221,
    },
    {
        name: 'I Like It',
        artist: 'Cardi B',
        length: 252,
    },
    {
        name: 'God\'s Plan',
        artist: 'Drake',
        length: 188,
    },
    {
        name: 'Girls like you',
        artist: 'Maroon 5',
        length: 236,
    }
];

Object.compare = (obj1, obj2) => {
    console.log("comparing!");
    for (let key in obj1) {
        console.log(key);
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

class Songs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const songsURL = 'http://localhost:5000';
        // fetch(songsURL)
        // .then(res => res.json())
        // .then(json => console.log(json));
        this.props.updateSongs(song_info);
    }

    convertTime = (total_seconds) => {
        var minutes = Math.floor(total_seconds / 60);
        var seconds = total_seconds - minutes * 60;
        if (seconds < 10)
            seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    playSong(song) {
        this.props.playSong(song);
    }

    playSon = (song, index) => {
        var songs = this.props.songs.slice();
        if (this.props.currentSong && Object.compare(song, this.props.currentSong)) {
            song.playing = false;
            this.props.dispatch({
                type: 'UPDATE_STATE',
                state: {
                    currentSong: null
                }
            });
            return;
        }

        var songAlreadyPlaying = false;
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].playing) { 
                songAlreadyPlaying = true;
                if (Object.compare(songs[i], song)) {
                    songs[i].playing = false;   
                } 
                else {
                    console.log('different song so we must switch');
                    songs[i].playing = false;
                    song.playing = true; 
                    for (let j = 0; j < songs.length; j++) {
                        if (Object.compare(songs[j], song)) {
                            songs[j].playing = true;
                            break;
                        }
                    }
                }
            }   
        }

        if (!songAlreadyPlaying)
            song.playing = true;

        if (song.playing) {
            this.props.dispatch({
                type: 'UPDATE_STATE',
                state: {
                    currentSong: song
                }
            });
        }
    }

    render() {
        console.log(this.props.songs.currentPlaying);
        return (
            <div>
                <Button color='primary' >New Song</Button>
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
                                            className="narrow" onClick={() => this.playSong(song)}
                                            alt="Play"/>
                                    </div>
                                    <td>{song.name}</td>
                                    <td>{song.artist}</td>
                                    <td>{this.convertTime(song.length)}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {this.props.currentSong ? <BottomBar song={this.props.currentSong} /> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Songs)