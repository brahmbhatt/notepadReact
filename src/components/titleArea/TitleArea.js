import React from 'react';
import './titleArea.css';

export default class TitleArea extends React.Component {
  render() {
    return (
      <textarea
        rows="1"
        cols="20"
        className="titleArea"
        value={this.props.value.title}
        onChange={event =>
        // console.log(event.target.value);
         this.props.onChange(event.target.value)
      }
      />
    );
  }
}
