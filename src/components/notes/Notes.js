import React from 'react';
import './notes.css';


export default class Notes extends React.Component {
  render() {
    return (
      <div className="Notes-div" >
        <p className="Notes-title"><strong>{this.props.notesArray[this.props.index].title}</strong></p>
        <div className="Notes-text" style={{ cursor: 'pointer' }} onClick={this.props.onClickNote}><pre className="Notes-pre">{this.props.notesArray[this.props.index].text}</pre></div>
      </div>
    );
  }
}

