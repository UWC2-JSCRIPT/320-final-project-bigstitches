import React from 'react';
import PropTypes from 'prop-types';

function EachPokemon(props) {
  EachPokemon.defaultProps = {
    // pokeName: '',
    // type: '',
    // ability: '',
    pokemon: [],
    mapped: false,
  };
  EachPokemon.propTypes = {
    // pokeName: PropTypes.string,
    // type: PropTypes.string,
    // ability: PropTypes.string,
    pokemon: PropTypes.array,
    mapped: PropTypes.bool,
  };

  if (props.mapped) {
    return (
      <ul>
        {props.pokemon.map((element) =>
          <li key={element.name}>
            <span>{element.name}</span> :: <span>{element.type}</span> :: <span>{element.ability}</span>
          </li>
        )}
      </ul>
    );
  } else {return <></>}
}

export default EachPokemon;
/*
    <ul>
      <li>{props.pokemon[0].name}</li>
      <li>{props.pokemon[1].name}</li>
      <li>{props.pokemon[2].name}</li>
      <li>{props.pokemon[3].name}</li>
      <li>{props.pokemon[4].name}</li>
      <li>{props.pokemon[5].name}</li>
      <li>{props.pokemon[6].name}</li>
      <li>{props.pokemon[7].name}</li>
      <li>{props.pokemon[8].name}</li>
      <li>{props.pokemon[9].name}</li>
      <li>{props.pokemon[10].name}</li>
      <li>{props.pokemon[11].name}</li>
      <li>{props.pokemon[12].name}</li>
      <li>{props.pokemon[13].name}</li>
      <li>{props.pokemon[14].name}</li>
    </ul>

<li>{props.pokemon[7].name}</li>

{props.pokemon.map((element)=> {
        <li key={element.name}>
          {element.name} :: {element.type} :: {element.ability}
        </li>
      })}

      <li key={props.pokemon[0].name}>
          {props.pokemon[0].name} :: {props.pokemon[0].type} :: {props.pokemon[0].ability}
        </li>
        <li key={props.pokemon[1].name}>
          {props.pokemon[1].name} :: {props.pokemon[1].type} :: {props.pokemon[1].ability}
        </li>
        <li key={props.pokemon[2].name}>
          {props.pokemon[2].name} :: {props.pokemon[2].type} :: {props.pokemon[2].ability}
        </li>
        <li key={props.pokemon[3].name}>
          {props.pokemon[3].name} :: {props.pokemon[3].type} :: {props.pokemon[3].ability}
        </li>

        key={props.pokemon[0].name}>
          {props.pokemon[0].name} :: {props.pokemon[0].type} :: {props.pokemon[0].ability}
        
*/