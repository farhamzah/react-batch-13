import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Members extends Component {
  render() {
    const {subTitle3, subTitle4, title3, paragraphM, paragraphM1} = this.props;
    return (
      <div className="mx-3">
        <div className="row justify-content-between">
          <h5 className="col font-weight-bold">{subTitle3}</h5>
          <h5 className="col text-right mr-3">{subTitle4}</h5>
        </div>
        <div className="media media-members p-3 m-3">
          <img
            src="https://via.placeholder.com/60"
            className="border rounded-circle mr-3"
            alt="avatar-member"
          />
          <div className="media-body">
            <h5 className="mt-0">{title3}</h5>
            <div className="row">
              <div className="col-2 pr-0">
                <p>{paragraphM}</p>
              </div>
              <div className="col-4 pl-0">
                <p>{paragraphM1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Members.propTypes = {
  subTitle3: PropTypes.string.isRequired,
  subTitle4: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  paragraphM: PropTypes.string.isRequired,
  paragraphM1: PropTypes.string.isRequired,
};
export default Members;


