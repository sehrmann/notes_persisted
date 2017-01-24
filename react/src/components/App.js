import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import Note from './Note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFolderId: null,
      selectedNoteId: null,
      folders: [],
      notes: [],
      folderFormText: "",
      noteText: ""
    };

    this.handleNoteSelect = this.handleNoteSelect.bind(this);
    this.handleFolderSelect = this.handleFolderSelect.bind(this);
    this.handleFolderFormTextChange = this.handleFolderFormTextChange.bind(this);
    this.handleNewFolder = this.handleNewFolder.bind(this);
    this.handleNoteTextChange = this.handleNoteTextChange.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);
    this.handleUpdateNote = this.handleUpdateNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
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

  selectNote(noteId) {
    for (let note of this.state.notes) {
      if (note.id == noteId) {
        return(note);
      }
    }
  }

  handleNoteSelect(id) {
    let newSelectedNoteId = id;
    let newNoteText = this.selectNote(id).body;
    this.setState({
      selectedNoteId: newSelectedNoteId,
      noteText: newNoteText
    });
  }

  handleFolderSelect(id) {
    let newSelectedFolderId = id;
    let newSelectedNoteId = null;
    this.setState({
      selectedFolderId: newSelectedFolderId,
      selectedNoteId: newSelectedNoteId
    });
  }

  handleFolderFormTextChange(event) {
    let newFolderFormText = event.target.value;
    this.setState({ folderFormText: newFolderFormText });
  }

  handleNoteTextChange(event) {
    let newNoteText = event.target.value;
    this.setState({ noteText: newNoteText });
  }

  handleNewFolder() {
    let data = {
      folder: {
        name: this.state.folderFormText
      }
    }
    let jsonStringData = JSON.stringify(data);

    fetch('/folders.json', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStringData
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
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
            let newFolderFormText = "";
            this.setState({
              folders: newFolders,
              notes: newNotes,
              selectedFolderId: newSelectedFolderId,
              folderFormText: newFolderFormText
            });
          });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleNewNote() {
    let data = {
      note: {
        body: "New Note!",
        folder_id: this.state.selectedFolderId
      }
    }
    let jsonStringData = JSON.stringify(data);

    fetch('/notes.json', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStringData
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
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
            let newSelectedNoteId = newNotes[newNotes.length-1].id;
            this.setState({
              folders: newFolders,
              notes: newNotes,
              selectedNoteId: newSelectedNoteId
            });
          });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUpdateNote() {
    let data = {
      note: {
        body: this.state.noteText,
        folder_id: this.state.selectedFolderId,
      }
    }
    let jsonStringData = JSON.stringify(data);

    fetch(`/notes/${this.state.selectedNoteId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStringData
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
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
            let newNotes = body.notes;
            this.setState({
              notes: newNotes
            });
          });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleDeleteNote() {
    let data = {
      note: {
        body: this.state.noteText,
        folder_id: this.state.selectedFolderId,
      }
    }
    let jsonStringData = JSON.stringify(data);

    fetch(`/notes/${this.state.selectedNoteId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStringData
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
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
            let newNotes = body.notes;
            let newSelectedNoteId = null;
            this.setState({
              notes: newNotes,
              selectedNoteId: newSelectedNoteId
            });
          });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
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
    let selectedNotes = this.selectNotes(this.state.selectedFolderId, this.state.notes);

    let selectedNote = null;
    if (this.state.selectedNoteId) {
      selectedNote = this.selectNote(this.state.selectedNoteId);
    }

    return(
      <div className="row callout">
        < FolderList
          folders = { this.state.folders }
          selectedFolderId = { this.state.selectedFolderId }
          handleFolderSelect = { this.handleFolderSelect }
          folderFormText = { this.state.folderFormText }
          handleFolderFormTextChange = { this.handleFolderFormTextChange }
          handleNewFolder = { this.handleNewFolder }
        />
        < NoteList
          notes = { selectedNotes }
          selectedFolderId = { this.state.selectedFolderId }
          selectedNoteId = { this.state.selectedNoteId }
          handleNoteSelect = { this.handleNoteSelect }
          handleNewNote = { this.handleNewNote }
        />
        < Note
          selectedNote = { selectedNote }
          noteText = { this.state.noteText }
          handleNoteTextChange = { this.handleNoteTextChange }
          handleUpdateNote = { this.handleUpdateNote }
          handleDeleteNote = { this.handleDeleteNote }
        />
      </div>
    )
  }
}

export default App;
