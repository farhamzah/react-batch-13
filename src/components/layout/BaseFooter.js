import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseFooter extends Component {
  render() {
    const {footer} = this.props;
    return (
      <div className="base-footer">
        {footer}
      </div>
    );
  }
}

BaseFooter.propTypes = {
  footer: PropTypes.string.isRequired,
};
export default BaseFooter;
