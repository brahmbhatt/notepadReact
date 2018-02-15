import React from 'react';
import './button.css';

export default class Button extends React.Component {
  render() {
    return (
      <div className="NoteTitle-div">
        <button className="NoteTitle-button" onClick={this.props.onClick}><strong>{this.props.value.title}</strong></button>
      </div>
    );
  }
}
