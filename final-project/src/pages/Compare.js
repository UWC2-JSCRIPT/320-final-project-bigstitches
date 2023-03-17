import React from 'react';
import PropTypes from 'prop-types';

function Compare({pokeArrayAlpha, pokeArrayBravo}) {
  return (
    <div>
      
      <p>
      {pokeArrayAlpha[0].name} vs {pokeArrayBravo[0].name}
      </p>
      
      <p>
      {pokeArrayAlpha[1].name} vs {pokeArrayBravo[1].name}
      </p>
      
      <p>
      {pokeArrayAlpha[2].name} vs {pokeArrayBravo[2].name}
      </p>
    </div>
  )
}

export default Compare;