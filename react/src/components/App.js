import React, { Component } from 'react';
import FolderList from './FolderList';
import NotesList from './NoteList';
import Note from './Note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFolderId: null,
      selectedNoteId: null,
      folders: [],
      notes: []
    };

    this.handleNoteSelect = this.handleNoteSelect.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
  }

  selectNotes(folderId, notes) {
    let selectedNotes = [];
    for (let note of notes) {
      if (note.folder_id == folderId) {
        selectedNotes.push(note)
      }
    };
    return(selectedNotes);
  }

  handleNoteSelect(id) {
    let newSelectedNoteId = id;
    this.setState({ selectedNoteId: newSelectedNoteId });
  }

  handleFolderSelect(id) {
    let newSelectedFolderId = id;
    let newSelectedNoteId = null;
    this.setState({
      selectedFolderId: newSelectedFolderId,
      selectedNoteId: newSelectedNoteId
    });
  }

  componentDidMount () {
    fetch('/folders.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}, (${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let newFolders = body.folders;
        let newNotes = body.notes;
        let newSelectedFolderId = newFolders[0].id;
        this.setState({
          folders: newFolders,
          notes: newNotes,
          selectedFolderId: newSelectedFolderId
        });
      });
  }

  render() {
    let noteBody = "";
    for (let note of this.state.notes) {
      if (note.id == this.state.selectedNoteId) {
        noteBody = note.body;
        break;
      }
    }

    let selectedNotes = this.selectNotes(this.state.selectedFolderId, this.state.notes);

    return(
      <div className="row callout">
        < FolderList
          folders = { this.state.folders }
          selectedFolderId = { this.state.selectedFolderId }
          handleFolderSelect = { this.handleFolderSelect }
        />
        < NotesList
          notes = { selectedNotes }
          selectedFolderId = { this.state.selectedFolderId }
          selectedNoteId = { this.state.selectedNoteId }
          handleNoteSelect = { this.handleNoteSelect }
        />
        < Note
          selectedFolderId = { this.state.selectedFolderId }
          selectedNoteId = { this.state.selectedNoteId }
          noteBody = { noteBody }
        />
      </div>
    )
  }
}

export default App;
