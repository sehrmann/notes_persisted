import React, { Component } from 'react';

class FolderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: []
    }
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
        let newFolders = body;
        this.setState({ folders: newFolders });
      })
  }

  render() {
    let count = 0;
    let folders = this.state.folders.map((folder) => {
      count++;
      return(
        <h3 key={count}>{folder.name}</h3>
      )
    });

    return(
      <div>
        <h1>This is the FolderList</h1>
        {folders}
      </div>
    )
  }
}

export default FolderList;
