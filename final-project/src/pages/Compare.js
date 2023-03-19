import React from 'react';
import {typeReference} from '../data/typeChart';
import {effectMatrix} from '../data/typeMatrix';
// import PropTypes from 'prop-types';

function Compare({pokeArrayAlpha, pokeArrayBravo}) {
  // console.log(typeReference);
  let fightResultsAlphaAttack = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  let fightResultsBravoAttack = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  pokeArrayAlpha?.map((element, index) => {
    // console.log(`${element.name} and ${element.type}`);
    let rowAttackPoke = (typeReference.find(e => e.type === element.type)).colRow;
    // console.log(`${element.name} at ${rowAttackPoke}`);
    pokeArrayBravo?.map((belement, bindex) => {
      let colDefendPoke = (typeReference.find(b => b.type === belement.type)).colRow;
      // need to go into effectMatrix to compare
      let resultsAlphaAttacks = effectMatrix[rowAttackPoke][colDefendPoke];
      let resultsBravoAttacks = effectMatrix[colDefendPoke][rowAttackPoke];
      fightResultsAlphaAttack[index][bindex] = resultsAlphaAttacks >= resultsBravoAttacks ? element.name : belement.name;
      fightResultsBravoAttack[index][bindex] = resultsBravoAttacks >= resultsAlphaAttacks ? element.name : belement.name;
      
      console.log(`${element.type} vs ${belement.type}: ${resultsAlphaAttacks} or ${resultsBravoAttacks}`);
      console.log('wins: ' + fightResultsAlphaAttack[index][bindex]);
    })
  });

  // <li key={`${element.name} vs ${belement.name}`}><span>{possibleFightResults[index][bindex]}</span></li>
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