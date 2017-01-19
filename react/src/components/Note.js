import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="small-4 columns callout">
        <form className="small-11 columns">
          <textarea
            placeholder="New Note"
            value={this.props.noteText}
            onChange={this.props.handleNoteTextChange}
          />
        </form>
      </div>
    )
  }
}

export default Note;
