import React, { Component } from 'react';

class NoteHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let date = "";
    if (this.props.selectedNote) {
      let jsDate = new Date(this.props.selectedNote.updated_at);
      let month = jsDate.getMonth() + 1;
      let day = jsDate.getDate();
      let year = jsDate.getFullYear();
      date = `Updated on ${month}/${day}/${year}`;
    }

    return(
      <div className="row expanded">
        <div className="small-6 columns">
          <p>{date}</p>
        </div>
        <div className="small-3 columns button" onClick={this.props.handleUpdateNote}>Update</div>
        <div className="small-3 columns button alert" onClick={this.props.handleDeleteNote}>Delete</div>
      </div>
    )
  }
}

export default NoteHeader;
