import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Past extends Component {
  render() {
    const {subTitle5, subTitle6, date1, paragraphP11, paragraphP12, paragraphP13, button2} = this.props;
    return (
      <div className="mx-3">
        <div className="row justify-content-between">
          <h5 className="col font-weight-bold">{subTitle5}</h5>
          <h5 className="col text-right mr-3">{subTitle6}</h5>
        </div>
        <div className="row m-3">
          <div className="card past-card col rounded-0 mr-2">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{date1}</h5>
              <p className="card-text">{paragraphP11}</p>
              <p className="card-text">{paragraphP12} <span className="text-black-50">{paragraphP13}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                {button2}
              </button>
            </div>
          </div>
          <div className="card past-card col rounded-0 ml-5 mr-2">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{date1}</h5>
              <p className="card-text">{paragraphP11}</p>
              <p className="card-text">{paragraphP12} <span className="text-black-50">{paragraphP13}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                {button2}
              </button>
            </div>
          </div>
          <div className="card past-card col rounded-0 ml-5">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{date1}</h5>
              <p className="card-text">{paragraphP11}</p>
              <p className="card-text">{paragraphP12} <span className="text-black-50">{paragraphP13}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}
              >
                {button2}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Past.propTypes = {
  subTitle5: PropTypes.string.isRequired,
  subTitle6: PropTypes.string.isRequired,
  date1: PropTypes.string.isRequired,
  paragraphP11: PropTypes.string.isRequired,
  paragraphP12: PropTypes.string.isRequired,
  paragraphP13: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
};

export default Past;
