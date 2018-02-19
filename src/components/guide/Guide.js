import React from 'react';
import PropTypes from 'prop-types';
import './guide.css';

export default class Guide extends React.Component {
  render() {
    return (
      <div className="guide">
        <p className="guidePara"><strong>{this.props.value.title}</strong> <img className="noteImg"src="https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/note.png" /></p>

      </div>
    );
  }
}
Guide.propTypes = {
  value: PropTypes.shape({
    title: PropTypes.string,
  }),
};

Guide.defaultProps = {
  value: PropTypes.shape({
    title: '',
  }),
};
