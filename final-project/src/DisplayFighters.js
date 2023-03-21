import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import APILookup from './APILookup';
// import testing from './data/validJson.json'

function DisplayFighters(props) {
  DisplayFighters.defaultProps = {
    fightResultsAlphaAttack: [],
    fightResultsBravoAttack: [],
    pokeArrayAlpha: [],
    pokeArrayBravo: [],
  };
  DisplayFighters.propTypes = {
    fightResultsAlphaAttack: PropTypes.array,
    fightResultsBravoAttack: PropTypes.array,
    pokeArrayBravo: PropTypes.array,
    pokeArrayAlpha: PropTypes.array,
  };

  const [image, setImage] = useState('');
  const [baseExperience, setExperience] = useState(0);
  const [attackStat, setAttack] = useState(0);
  const [baseHPStat, setHP] = useState(0);


  return (
    <>
    <p>
      {props.pokeArrayAlpha[0].name}::{props.fightResultsAlphaAttack[0][0]}
    </p>
    <p>
      {props.pokeArrayBravo[0].name}::{props.fightResultsBravoAttack[0][0]}
    </p>
    <APILookup
      pokeAlphaName = {props.pokeArrayAlpha[0].name}>
    </APILookup>
    </>
  )
}

export default DisplayFighters;

/*
{pokeArrayAlpha.map((rental, rentalIndex) => (
        <li>
          <p>{img}</p>
          <p>{baseExperience}</p>
          <p>{attackStat}</p>
          <p>{baseHPStat}</p>
        </li>
      ))}
      */
