import React, { Component } from 'react';
import Table from './containers/table';
import Dropzone from './containers/dropzone';
import Bottombar from './containers/bottombar';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bruin Play</h1>
        <Dropzone />
        <Table />
        { this.props.songs.currentPlaying ? <Bottombar /> : null }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
}

export default connect(mapStateToProps)(App);
