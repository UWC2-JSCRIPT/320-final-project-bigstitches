import React, {useState, useEffect} from 'react';
// import Pages from './Pages';
import PokemonOnPage from './PageThrough';
import pokemon from './data/pokemon.json';

function AllOne() {
  const [pokemonPageArray, setPokePerPage] = useState([[]]);
  const [totalPages, calcPages] = useState(0);
  // const [maxPerPage, setMaxPerPage] = useState(15);
  const [mapped, setMap] = useState(false);

  useEffect(() => {
    if (!mapped) {
      let localCounter = 0;
      let pokemonBatched = [];
      pokemon.map(function (element) {
        pokemonBatched[localCounter] = element;
        localCounter++;
        if (localCounter >= 15) {
          // logic error here - missing the last parts of the json list
          // skips page 1, (first array is zero and empty)
          setPokePerPage(pokemonPageArray.concat([pokemonBatched]));
          /*
          setPokePerPage([
            ...pokemonPageArray,
            [pokemonBatched]
          ]);
          */
          // console.log(`here, ${localCounter}`);
          // reset the local counter
          localCounter = 0;
          // reset the batching array
          pokemonBatched = [];
          // calculate the number of pages
          calcPages(totalPages+1);
        }
      });
      // don't map through json file every time
      setMap(true);
      // console.log(`total number of pages: ${lclpgs}`);
      // props.calcPages(lclpgs);
    }
  }, [mapped]);
  
  if (!mapped) {
    return <>loading</>
  } else {
    return (
      <>
        <PokemonOnPage
          totalPages = {totalPages}
          pokemonPageArray = {pokemonPageArray}>
        </PokemonOnPage>
      </>
    );
  }
}

export default AllOne;
