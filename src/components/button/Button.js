import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class Button extends React.Component {
  render() {
    return (
    // <div className="NoteTitle-div">
      <button className="NoteTitle-button" onClick={this.props.onClick}><strong>{this.props.value.title}</strong></button>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: console.log,
};

Button.propTypes = {
  title: PropTypes.string,
};

Button.defaultProps = {
  title: '',
};
