import React from 'react';
import { connect } from 'react-redux';
import SongsScreen from './containers/songsScreen';
import Dropzone from './containers/dropzone';
import Bottombar from './containers/bottombar';
import Spinner from './components/spinner';
import LoginScreen from './containers/LoginScreen';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Dropzone /> */}
        {/* { this.props.auth.loggedIn ? <Table /> : <LoginScreen /> }  */}
        <SongsScreen />
        { this.props.spinner.on ? <Spinner /> : null }
        { this.props.songs.currentPlaying ? <Bottombar /> : null }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
}

export default connect(mapStateToProps)(App);
