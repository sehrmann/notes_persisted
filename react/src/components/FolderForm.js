import React, { Component } from 'react';

class FolderForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="row">
        <button className="small-1 columns" onClick={this.props.handleNewFolder}>
          <i className="fa fa-2x fa-plus-circle" aria-hidden="true"></i>
        </button>
        <form className="small-11 columns">
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
