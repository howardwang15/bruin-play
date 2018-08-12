import React, { Component } from 'react';
import Songs from './containers/songs';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bruin Play</h1>
        <Songs />
      </div>
    );
  }
}

export default App;
