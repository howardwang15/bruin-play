import React from 'react';
import './styles.css';
import Play from '../../resources/play.png';
import Pause from '../../resources/pause.png';
import Dots from '../../resources/three-dots.png';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { updateSongs, playSong } from '../../actions/songs';

class SongsTable extends React.Component {
    convertTime = (total_seconds) => {
        var minutes = Math.floor(total_seconds / 60);
        var seconds = total_seconds - minutes * 60;
        if (seconds < 10)
            seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    componentWillMount() {
        const songsURL = 'http://localhost:3000/songs';
        fetch(songsURL)
        .then(res => res.json())
        .then(json => this.props.updateSongs(json));
    }

    render() {
        return (
            <div>
                <Button variant='contained'>New Song</Button>
                <table className='table'>
                    <thead>
                        <tr className="tableHeader">
                            <th className='narrow'></th>
                            <th className='col-md-2'><b>SONG</b></th>
                            <th className='col-md-2'><b>ARTIST</b></th>
                            <th className='col-md-2'><b>DURATION</b></th>
                            <th className='col-md-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.songs.data.map((song, index) => 
                                <tr key={index}>
                                    <td className='narrow'>
                                        <img src={this.props.songs.currentPlaying && this.props.songs.currentPlaying.name === 
                                            song.name ?  Pause : Play } onClick={() => this.props.playSong(song)} className='actionButton'>
                                        </img>
                                    </td>
                                    <td className='col-md-2'>{song.name}</td>
                                    <td className='col-md-2'>{song.artist}</td>
                                    <td className='col-md-2'>{this.convertTime(song.duration)}</td>
                                    <td className='col-md-2'>
                                        <img src={Dots} style={{width: '20%'}}></img>
                                    </td>
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

export default connect(mapStateToProps, mapDispatchToProps)(SongsTable)