import React from 'react';
import './styles.css';
import Play from '../../resources/play.png';
import Pause from '../../resources/pause.png';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ActionButton from '../../components/actionButton';
import { updateSongs, playSong, downloadSong, sortSongs } from '../../actions/songs';
import { toggleSpinner } from '../../actions/spinner';

class SongsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpened: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpened: !this.state.dropdownOpened
        });
    }

    convertTime = (total_seconds) => {
        var minutes = Math.floor(total_seconds / 60);
        var seconds = total_seconds - minutes * 60;
        if (seconds < 10)
            seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    async componentWillMount() {
        const songsURL = 'http://localhost:3000/songs';
        const res = await fetch(songsURL)
        const data = await res.json();
        this.props.updateSongs(data);
    }

    render() {
        return (
            <div>
                <Button onClick={() => {}}>LOGOUT</Button>
                <Button variant='contained'>New Song</Button>
                <table className='table table-striped'>
                    <thead>
                        <tr className="tableHeader">
                            <th className='narrow'></th>
                            <th className='col-md-2' onClick={() => this.props.sortSongs('name')}><b>SONG</b></th>
                            <th className='col-md-2' onClick={() => this.props.sortSongs('artist')}><b>ARTIST</b></th>
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
                                    <td>
                                        <ActionButton song={song}/>
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
        updateSongs: songs => dispatch(updateSongs(songs)),
        playSong: song => dispatch(playSong(song)),
        downloadSong: song => dispatch(downloadSong(song)),
        sortSongs: method => dispatch(sortSongs(method)),
        toggleSpinner: () => dispatch(toggleSpinner())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(SongsTable)