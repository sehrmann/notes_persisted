import React, { Component } from 'react';
import FolderList from './FolderList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFolderId: null,
      selectedNoteId: null
    }
  }

  render() {
    return(
      <div>
        < FolderList selectedFolderId = { this.state.selectedFolderId }/>
      </div>
    )
  }
}

export default App;
