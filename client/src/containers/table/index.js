import React from 'react';
import './styles.css';
import Play from './play.png';
import Pause from './pause.png';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
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
                <Table style={{margin: '2%'}}>
                    <TableHead>
                        <TableRow className="tableHeader">
                            <TableCell className="narrow"></TableCell>
                            <TableCell><b>SONG</b></TableCell>
                            <TableCell><b>ARTIST</b></TableCell>
                            <TableCell><b>DURATION</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.songs.data.map((song, index) => 
                                <TableRow key={index}>
                                    <div className="imageContainer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <img src={ this.props.songs.currentPlaying && this.props.songs.currentPlaying.name === 
                                            song.name ?  Pause : Play  } 
                                            className="narrow" onClick={() => this.props.playSong(song)}
                                            alt="Play"/>
                                    </div>
                                    <TableCell className='cell'>{song.name}</TableCell>
                                    <TableCell>{song.artist}</TableCell>
                                    <TableCell>{this.convertTime(song.duration)}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
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