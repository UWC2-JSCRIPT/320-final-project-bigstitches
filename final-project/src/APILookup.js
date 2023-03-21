import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
// import EachPokemon from './EachPokemon';
// import testing from './data/validJson.json'

function APILookup(props) {
  APILookup.defaultProps = {
    pokeAlphaName: '',
  };
  APILookup.propTypes = {
    pokeAlphaName: PropTypes.string,
  };

  const [image, setImage] = useState('');
  const [baseExperience, setExperience] = useState(0);
  const [attackStat, setAttack] = useState(0);
  const [baseHPStat, setHP] = useState(0);
  
  let list = '';

  let jsonObject = {
    image: '',
    base_exp: 0,
    set_att: 0,
    set_hp: 0,
  };

  function displayInfo(json) {
    jsonObject.image = json.sprites.front_default;
    jsonObject.base_exp = json.base_experience;
    jsonObject.set_att = json.stats[1].base_stat;
    jsonObject.set_hp = json.stats[0].base_stat;
    console.log(json.sprites.front_default);
    console.log(json.base_experience);
    console.log(json.stats[1].base_stat);
    console.log(json.stats[0].base_stat);
    setImage(json.sprites.front_default);
    setExperience(json.base_experience);
    setAttack(json.stats[1].base_stat)
    setHP(json.stats[0].base_stat);  
    list = <li>{json.sprites.front_default}</li>

    return jsonObject
  }


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
  //let firstFighter = getPokemonInfo(props.pokeAlphaName);
  //console.log('first fighter: '+firstFighter.image);
  //let flist = '';
  getPokemonInfo(props.pokeAlphaName);
  useEffect(() => {
    
  }, []);

  return (
    <>
    <p><img src={image} alt='Picture of the Pokemon'></img></p>
    <div>{attackStat}</div>
    <div>{baseExperience}</div>
    <div>{baseHPStat}</div>
    </>
  )
}

export default APILookup;

/*
{pokeArrayAlpha.map((rental, rentalIndex) => (
        <li>
          <p><img src={image} alt='Picture of the Pokemon'></img></p>
          <p>{baseExperience}</p>
          <p>{attackStat}</p>
          <p>{baseHPStat}</p>
        </li>
      ))}
      */
