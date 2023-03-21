import React from 'react';
import PropTypes from 'prop-types';
import ModFightArr from './ModFightArr';

/**
 * Set up app for vacation rental
 * @param {array} rentalsInCart, array of all rentals in cart
 * @return {JSX} The rendered shopping cart of rentals
 */
function FinalFighters(props) {
  FinalFighters.defaultProps = {
    refSetPokemonFight: () => [],
    fightingPokemonArr: [],
  };
  FinalFighters.propTypes = {
    refSetPokemonFight: PropTypes.func,
    fightingPokemonArr: PropTypes.array,
  };
  const listItems = props.fightingPokemonArr.map((pokemon) => {
    console.log(`you chose: ${pokemon}`);
    if (pokemon !== undefined) {
      if (pokemon !== 'empty') {
        return <li key={pokemon}>
          {pokemon}
          <ModFightArr
              elementName = {pokemon}
              alreadyAdded = {true}
              addPokemontoFightArr = {props.refSetPokemonFight}>
          </ModFightArr>
        </li>;
      } else {
        return;
      }
    } else {
      return;
    }
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default FinalFighters;
