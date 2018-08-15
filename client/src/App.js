import React, { Component } from 'react';
import Songs from './containers/table';
import Dropzone from './containers/dropzone';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bruin Play</h1>
        <Dropzone />
        <Songs />
      </div>
    );
  }
}

export default App;
