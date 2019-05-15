import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  render() {
    const {subTitle2, paragraphAB, paragraphAB1} = this.props;
    return (
      <div className="mx-3">
        <h5 className="font-weight-bold">{subTitle2}</h5>
        <div className="m-3">
          <p>{paragraphAB}</p>
          <p>{paragraphAB1}</p>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  subTitle2: PropTypes.string.isRequired,
  paragraphAB: PropTypes.string.isRequired,
  paragraphAB1: PropTypes.string.isRequired,
};
export default About;
