import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// import EachPokemon from './EachPokemon';
// import testing from './data/validJson.json'

function APIPokemon(props) {
  APIPokemon.defaultProps = {
    fightResultsAlphaAttack: [],
    fightResultsBravoAttack: [],
    pokeArrayAlpha: [],
    pokeArrayBravo: [],
  };
  APIPokemon.propTypes = {
    fightResultsAlphaAttack: PropTypes.array,
    fightResultsBravoAttack: PropTypes.array,
    pokeArrayBravo: PropTypes.array,
    pokeArrayAlpha: PropTypes.array,
  };

  const [image, setImage] = useState('');
  const [baseExperience, setExperience] = useState(0);
  const [attackStat, setAttack] = useState(0);
  const [baseHPStat, setHP] = useState(0);
  
  let list = '';
  function displayInfo(json) {
    console.log(json.sprites.front_default);
    console.log(json.base_experience);
    console.log(json.stats[1].base_stat);
    console.log(json.stats[0].base_stat);
    setImage(json.sprites.front_default);
    setExperience(json.base_experience);
    setAttack(json.stats[1].base_stat)
    setHP(json.stats[0].base_stat);  
    list = <li>{json.sprites.front_default}</li>
  }

  let jsonObject = {
    image: '',
    base_exp: 0,
    set_att: 0,
    set_hp: 0,
  };

  function displayInfoObject(json) {
    jsonObject.image = json.sprites.front_default;
    jsonObject.base_exp = json.base_experience;
    jsonObject.set_att = json.stats[1].base_stat;
    jsonObject.set_hp = json.stats[0].base_stat;
    // console.log(jsonObject.image);
    setImage(json.sprites.front_default);
    setExperience(json.base_experience);
    setAttack(json.stats[1].base_stat)
    setHP(json.stats[0].base_stat);  

    return jsonObject; 
  }

  function getPokemonInfo(pokemonName) {
    pokemonName = pokemonName.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    // fetch(`https:deliberategarbage`, {  
      method: 'get',  
    })
    .then(response => { 
      if (response.status >= 200 && response.status <= 299) {
        return response.json(); 
      } else if (response.status === 404) {
        throw Error(`${pokemonName} isn't in the database!`)
      } else {
        throw Error(response.statusText);
      }
    })  
    .then(pokemon => { 
      console.log(`HERE ${pokemon}`); 
      // return displayInfo(allPokemon);
      // console.log('here: '+(displayInfoObject(allPokemon)).image)
      // return pokemon;
      return displayInfo(pokemon);
    })
    .catch((e) => {
      // network errors
      if (e instanceof TypeError) {
        throw Error(`${e}: Check your network.
          Then check the API at https://pokeapi.co/`);
      } 
    });
  }

  // getPokemonInfo(props.pokeArrayAlpha[0].name);
  let firstFighter = getPokemonInfo(props.pokeArrayAlpha[0].name);
  // console.log('first fighter: '+firstFighter);
  useEffect(() => {
    // jsonObject = getPokemonInfo(props.pokeArrayAlpha[0].name);
    // console.log('API Image: '+jsonObject.image)
  }, [props.pokeArrayAlpha[0].name]);

  return (
    <>
    <p>
      {props.pokeArrayAlpha[0].name}::{props.fightResultsAlphaAttack[0][0]}
    </p>
    <p>
      {props.pokeArrayBravo[0].name}::{props.fightResultsBravoAttack[0][0]}
    </p>
    <div>{attackStat}</div>
    </>
  )
}

export default APIPokemon;

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
