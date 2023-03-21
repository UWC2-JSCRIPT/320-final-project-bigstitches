import React, {useEffect, useState} from 'react';
import {typeReference} from '../data/typeChart';
import {effectMatrix} from '../data/typeMatrix';
// import APIPokemon from '../APIPokemon';
import DisplayFighters from '../DisplayFighters';

/*
/  Some Pokemon Types are more effective than others against 
/  certain types.  Compare component takes the chosen list of Pokemon
/  from both teams and compares the type multiplier.
*/
function Compare({pokeArrayAlpha, pokeArrayBravo}) {
  let createAlphaAttackArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  let createBravoAttackArray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const [fightResultsAlphaAttack, setAlphaAttackArr] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [fightResultsBravoAttack, setBravoAttackArr] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

  useEffect(() => {
    // console.log(`${pokeArrayAlpha[0].name}, ${pokeArrayBravo[0].name}`)
    pokeArrayAlpha?.map((element, index) => {
      // console.log(`${element.name} of type ${element.type}`);
      let rowPoke = (typeReference.find(e => e.type === element.type)).colRow;
      // console.log(`${element.name} at ${rowPoke}`);
      pokeArrayBravo?.map((belement, bindex) => {
        // console.log('in Bravo pokeArray');
        let colPoke = (typeReference.find(b => b.type === belement.type)).colRow;
        // effectMatrix to compare
        createAlphaAttackArray[index][bindex] = effectMatrix[rowPoke][colPoke];
        createBravoAttackArray[index][bindex] = effectMatrix[colPoke][rowPoke];
      });
    });

    setAlphaAttackArr(createAlphaAttackArray);
    setBravoAttackArr(createBravoAttackArray);
  }, [pokeArrayAlpha, pokeArrayBravo]);


  return (
    <div className='App-rentals'>
      <DisplayFighters
        fightResultsAlphaAttack = {fightResultsAlphaAttack}
        fightResultsBravoAttack = {fightResultsBravoAttack}
        pokeArrayAlpha = {pokeArrayAlpha}
        pokeArrayBravo = {pokeArrayBravo}>
      </DisplayFighters>
    </div>
  )
}

export default Compare;

/*
      <APIPokemon
        fightResultsAlphaAttack = {fightResultsAlphaAttack}
        fightResultsBravoAttack = {fightResultsBravoAttack}
        pokeArrayAlpha = {pokeArrayAlpha}
        pokeArrayBravo = {pokeArrayBravo}>
      </APIPokemon>

      */