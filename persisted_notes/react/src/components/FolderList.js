import React, { Component } from 'react';

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
      <div className="small-4 columns">
        <h1>This is the FolderList component</h1>
        {folders}
      </div>
    )
  }
}

export default FolderList;
