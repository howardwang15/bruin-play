import React from 'react';
import './styles.css';
import BottomBar from '../bottombar/bar';
import Play from './play.png'
import Pause from './pause.png'
import { connect } from 'react-redux';

var song_info = [
    {
        name: 'Nice For What',
        artist: 'Drake',
        length: 211
    },
    {
        name: 'Psycho',
        artist: 'Post Malone',
        length: 221
    },
    {
        name: 'I Like It',
        artist: 'Cardi B',
        length: 252
    },
    {
        name: 'God\'s Plan',
        artist: 'Drake',
        length: 188
    },
    {
        name: 'Girls like you',
        artist: 'Maroon 5',
        length: 236
    }
];

var n_songs = song_info.length;

class Songs extends React.Component {
    constructor(props) {
        super(props);
        var songs_playing = [];
        for (let i = 0; i < n_songs; i++)
            songs_playing.push(false);
        this.state = {
            current_song: null,
            playing: songs_playing,
            being_played: false,
            posts: []
        };
    }

    convertTime = (total_seconds) => {
        var minutes = Math.floor(total_seconds / 60);
        var seconds = total_seconds - minutes * 60;
        if (seconds < 10)
            seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    playSong = (song, pos) => {
        var songs_playing = [];
        for (let i = 0; i < n_songs; i++) 
            songs_playing.push(this.state.playing[i]); //store old states into new array

        for (let i = 0; i < n_songs; i++) {
            if (songs_playing[i] && i !== pos) //if another song is being played
                songs_playing[i] = false; //pause the other song
        }
        songs_playing[pos] = !songs_playing[pos]; //toggle the current song

        var played = false;
        for (let i = 0; i < n_songs; i++) {
            if (songs_playing[i]) {
                console.log("name of playing song: " + song_info[i].name);
                played = true;
            }
        }

        this.setState({
            current_song: song,
            playing: songs_playing,
            being_played: played
        });
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
            </div>
        ));
        console.log(postItems[0])
        return (
            <div>
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
                            song_info.map((song) => 
                                <tr className="table_row">
                                    <div className="image_container">
                                        <img src={this.state.playing[song_info.indexOf(song)] ? Pause : Play} 
                                            className="narrow" onClick={() => this.playSong(song, song_info.indexOf(song))}
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
                {this.state.being_played ? <BottomBar song={this.state.current_song} /> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(Songs)