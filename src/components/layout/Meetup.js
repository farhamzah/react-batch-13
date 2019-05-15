import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyButton from './Button';

class Meetup extends Component {
  
  render() {
    const {title, paragraph1, paragraph2, paragraph3, button1, paragraph40, paragraph41, paragraph42} = this.props;
    return (
      <div className="card meetup-card mb-4 mx-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img
              src="https://via.placeholder.com/180"
              className="card-img border"
              alt="placeholder-card"
            />
          </div>
          <div className="col-md-10">
            <div className="card-body py-0">
              <h5 className="card-title font-weight-bold">{title}</h5>
              <div className="row mt-3">
                <div className="col-2 pr-0">
                  <p>{paragraph1}</p>
                  <p>{paragraph2}</p>
                  <p>{paragraph3}</p>
                </div>
                <div className="col-4 pl-0">
                  <p>{paragraph40}</p>
                  <p>{paragraph41}</p>
                  <p>{paragraph42}</p>
                </div>
              </div>
              <MyButton
              myButton = {button1}
              ></MyButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Meetup.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  paragraph3: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  paragraph40: PropTypes.string.isRequired,
  paragraph41: PropTypes.string.isRequired,
  paragraph42: PropTypes.string.isRequired,
};
export default Meetup;
