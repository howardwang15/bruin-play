import React from 'react';
import { connect } from 'react-redux';
import Table from './containers/table';
import Dropzone from './containers/dropzone';
import Bottombar from './containers/bottombar';
import Spinner from './components/spinner';
import FacebookLogin from './components/facebookLogin';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Bruin Play</h1>
        <FacebookLogin />
        {/* <Dropzone /> */}
        <Table />
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
