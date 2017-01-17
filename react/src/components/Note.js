import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="small-4 columns callout">
        <h1>This is the Note component</h1>
        <h3>{this.props.noteBody}</h3>
      </div>
    )
  }
}

export default Note;
