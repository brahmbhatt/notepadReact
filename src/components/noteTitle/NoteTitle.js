import React from 'react';
import './noteTitle.css';

export default class NoteTitle extends React.Component {
  render() {
    return (
      <div className="Notetitle">
        <p className="para"><strong>{this.props.value.noteTitle}</strong></p>
        <button className="langButton"><strong>{this.props.value.buttonTitle}</strong></button>
      </div>
    );
  }
}
