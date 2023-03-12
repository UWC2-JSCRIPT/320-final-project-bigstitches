import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function Page(props) {
  Page.defaultProps = {
    setPage: () => Number,
    totalPages: 1,
    page: 1,
  };
  Page.propTypes = {
    setPage: PropTypes.func,
    totalPages: PropTypes.number,
    page: PropTypes.number,
  };

  useEffect(() => {

  })

  return (
    <>
      <button onClick={props.setPage(1)}>1</button>
      <button onClick={props.setPage(2)}>2</button>
      <button onClick={props.setPage(3)}>3</button>
      ...
      <button onClick={props.setPage(props.totalPages)}>{props.totalPages}</button>
    </>
  );
}

export default Page;
