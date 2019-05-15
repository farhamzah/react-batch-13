import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextMeetup extends Component {
  render() {
    const {subTitle1, paragraphNM, date, paragraphNM1, paragraphNM2, paragraphNM3, paragraphNM4, paragraphNM5, paragraphNM6, paragraphNM7, paragraphNM8} = this.props;
    return (
      <div className="mx-3">
        <h5 className="font-weight-bold">{subTitle1}</h5>
        <div className="next-meetup border p-3 m-3">
          <p className="font-weight-bold">{paragraphNM}</p>
          <p className="text-black-50">{date}</p>
          <p>
            {paragraphNM1}<br/>
            {paragraphNM2}<br/>
            {paragraphNM3}<br/>
            {paragraphNM4}<br/>
            <br/>
            {paragraphNM5}<br/>
            <br/>
            {paragraphNM6}
            <br/>
            <br/>
            {paragraphNM7}
            <br/>
            {paragraphNM8}
          </p>
        </div>
      </div>
    );
  }
}

NextMeetup.propTypes = {
  subTitle1: PropTypes.string.isRequired,
  paragraphNM: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  paragraphNM1: PropTypes.string.isRequired,
  paragraphNM2: PropTypes.string.isRequired,
  paragraphNM3: PropTypes.string.isRequired,
  paragraphNM4: PropTypes.string.isRequired,
  paragraphNM5: PropTypes.string.isRequired,
  paragraphNM6: PropTypes.string.isRequired,
  paragraphNM7: PropTypes.string.isRequired,
  paragraphNM8: PropTypes.string.isRequired,
};
export default NextMeetup;
