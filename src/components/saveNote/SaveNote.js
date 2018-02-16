import React from 'react';
import PropTypes from 'prop-types';
import './saveNote.css';


export default class SaveNote extends React.Component {
  render() {
    return (
      <div className="SaveNote-saveTest">
        <button className="SaveNote-save" onClick={this.props.onClick}><strong>Save</strong></button>
        <span className="SaveNote-char"><strong>{this.props.countRem} chacters</strong></span>
      </div>
    );
  }
}
SaveNote.propTypes = {
  onClick: PropTypes.func,
};

SaveNote.defaultProps = {
  onClick: console.log,
};

SaveNote.propTypes = {
  countRem: PropTypes.string,
};

SaveNote.defaultProps = {
  countRem: '',
};
