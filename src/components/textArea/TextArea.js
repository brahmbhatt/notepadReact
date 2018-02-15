import React from 'react';
import './textArea.css';

export default class TextArea extends React.Component {
  render() {
    return (
      <textarea
        maxLength={this.props.value.maxChar}
        value={this.props.value.title}
        onChange={(event) => {
        if (event.target.value.length > this.props.value.length) {
          event.target.className = 'titleArea red';
        } else {
          event.target.className = 'titleArea';
        }
        return this.props.onChange(event.target.value);
      }}
        rows="8"
        cols="20"
        className="titleArea"

      />
    );
  }
}
