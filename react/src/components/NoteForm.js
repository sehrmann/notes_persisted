import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="row">
        <div className="small-4 columns button" onClick={this.props.handleNewNote}>
          <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
          {' New Note'}
        </div>
        <div className="divider"></div>
        <div className="row collapse">
          <div className="small-6 columns right">
            <input type="text" placeholder="Find Stuff"></input>
          </div>
          <div className="small-2 columns">
            <a href="#" className="alert button expand">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NoteForm;
