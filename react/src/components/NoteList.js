import React, { Component } from 'react';
import NoteForm from './NoteForm';

class NoteList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let count = 0;
    let notes = this.props.notes.map((note) => {
      let handleNoteSelect = () => {
        return (
          this.props.handleNoteSelect(note.id)
        );
      }

      let className = "";
      if (note.id == this.props.selectedNoteId) {
        className = "selected-note"
      }

      count++;
      return(
        <h3 key={count} className={className} onClick={handleNoteSelect}>{note.body}</h3>
      );
    });

    return(
      <div className="small-4 columns callout">
        <h1>Notes</h1>
        < NoteForm
          handleNewNote = {this.props.handleNewNote}
        />
        {notes}
      </div>
    )
  }
}

export default NoteList;
