import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: []
    }
  }

  render() {
    return(
      <h1>This is the app Component</h1>
    )
  }
}

export default App;
