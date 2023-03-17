import React from 'react';
// import logo from '../logo.svg';
import PropTypes from 'prop-types';

function Home(props) {
  Home.defaultProps = {
    modList: () => [],
  };
  Home.propTypes = {
    modList: PropTypes.func,
  };

  return (
    <>Home</>
  )
}

export default Home;