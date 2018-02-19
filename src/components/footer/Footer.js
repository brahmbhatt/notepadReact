import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer"><strong>{this.props.value.title}</strong></footer>
    );
  }
}

Footer.propTypes = {
  value: PropTypes.shape({
    title: PropTypes.string,
  }),
};

Footer.defaultProps = {
  value: PropTypes.shape({
    title: '',
  }),
};

