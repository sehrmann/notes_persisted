import React, { Component } from 'react';
import FolderForm from './FolderForm';

class FolderList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let count = 0;
    let folders = this.props.folders.map((folder) => {

      let className = "";
      if (folder.id == this.props.selectedFolderId) {
        className = "selected-folder";
      }

      let handleFolderSelect = () => {
        return(
          this.props.handleFolderSelect(folder.id)
        );
      }

      count++;
      return(
        <h3 key={count} className={className} onClick={handleFolderSelect}>{folder.name}</h3>
      )
    });

    return(
      <div className="small-4 columns callout">
        <h1>Folders</h1>
        {folders}
        < FolderForm
          folderFormText = { this.props.folderFormText }
          handleFolderFormTextChange = { this.props.handleFolderFormTextChange }
          handleNewFolder = { this.props.handleNewFolder }
        />
      </div>
    )
  }
}

export default FolderList;
