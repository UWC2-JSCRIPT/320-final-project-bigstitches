import React from 'react';
import PropTypes from 'prop-types';

function PageThrough(props) {
  PageThrough.defaultProps = {
    totalPages: Number,
    page: Number,
    handleClick: () => Number,
    nextPage: Number,
    twoPage: Number
  };
  PageThrough.propTypes = {
    totalPages: PropTypes.number,
    page: PropTypes.number,
    handleClick: PropTypes.func,
    nextPage: PropTypes.number,
    twoPage: PropTypes.number
  };

  return (
    <>
      <button onClick={props.handleClick} name="previousPage">PREV</button>
      <button onClick={props.handleClick} name="homePage">{props.page}</button>
      <button onClick={props.handleClick} name="onePageAfter">{props.page + 1}</button>
      <button onClick={props.handleClick} name="twoPagesAfter">{props.page + 2}</button>
      <span>...</span>
      <button onClick={props.handleClick} name="lastPage">{props.totalPages}</button>
      <button onClick={props.handleClick} name="nextPage">NEXT</button>
    </>
  );
}

export default PageThrough;
