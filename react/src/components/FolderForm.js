import React, { Component } from 'react';

class FolderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="row collapse">
        <div className="small-2 columns button" onClick={this.props.handleNewFolder}>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
        <form className="small-10 columns">
          <input
            type="text"
            placeholder="New Folder"
            value={this.props.folderFormText}
            onChange={this.props.handleFolderFormTextChange}
          />
        </form>
      </div>
    )
  }
}

export default FolderForm;
