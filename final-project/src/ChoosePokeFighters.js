import './App.css';
import PageListPokemon from './PageListPokemon';
import FinalFighters from './FinalFighters';
import React, {useState} from 'react';
// import ListPageDisperse from './ListPageDisperse';
// import smallerPoke from './data/smallerPoke.json';

function ChoosePokeFighters() {

  const [fightingPokemonArr, setPokemontoFightArr] = useState(['empty']);
  /**
   * local function to keep cart unique items only
   * @param {object} value element of array
   * @param {number} index index of element
   * @param {array} self whole array
   * @return {array} unique item
   */
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  /**
   * local function to keep cart unique items only
   * @param {object} value element of array
   * @param {number} index index of element
   * @param {array} self whole array
   * @return {bool} unique item
   */
  let tempPokeHoldArr;
  /**
   * Change the state of the cart depnding
   * @param {object} vacaElement element to add or remove
   * @param {boolean} fighting true ? add : remove
   */
  function refSetPokemonFight(pokeElement, fighting) {
    if (fighting) {
      if (fightingPokemonArr[0] === 'empty') {
        tempPokeHoldArr = ([pokeElement]); // simple replace
      } else {
        tempPokeHoldArr = (fightingPokemonArr.concat(fightingPokemonArr,
            [pokeElement]));
      }
    } else {
      if (fightingPokemonArr.length === 1) {
        tempPokeHoldArr = ['empty'];
      } else {
        tempPokeHoldArr = (
          fightingPokemonArr.filter((a) => {
            return a !== pokeElement;
          }));
      }
    }
    setPokemontoFightArr(tempPokeHoldArr.filter(onlyUnique));
  }; // end function refModCart(vacaElement)  
  return (
    <div className="App">
      <FinalFighters
        fightingPokemonArr = {fightingPokemonArr}
        refSetPokemonFight = {refSetPokemonFight}>
      </FinalFighters>
      <PageListPokemon 
        refSetPokemonFight = {refSetPokemonFight}>
      </PageListPokemon>
    </div>
  );
}

export default ChoosePokeFighters;

// <PageListPokemon/>