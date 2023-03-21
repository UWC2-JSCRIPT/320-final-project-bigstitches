import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import pokemon from './data/pokemon.json';
// import pokemon from './data/smallerPoke.json';
import EachPokemon from './EachPokemon';

function ItemsOnPage(props) {
  ItemsOnPage.defaultProps = {
    maxPerPage: Number,
    page: Number,
    calcPages: () => Number,
  };
  ItemsOnPage.propTypes = {
    maxPerPage: PropTypes.number,
    page: PropTypes.number,
    calcPages: PropTypes.func,
  };

  const [mapped, setMap] = useState(false);
  const [pokemonPageArray, setPokePerPage] = useState([[]]);
  const [localPages, setPages] = useState(0);

  function initialMap() {
    let localCounter = 0;
    let pokemonBatched = [];
    // let lclpgs = 0;
    if (!mapped) {
      pokemon.map((element) => {
        pokemonBatched[localCounter] = element;
        localCounter++;
        if (localCounter > props.maxPerPage) {
          // logic error here - missing the last parts of the json list
          // skips page 1, (first array is zero and empty)
          setPokePerPage(pokemonPageArray.concat([pokemonBatched]));
          // console.log(pokemonBatched);
          localCounter = 0;
          setPages(localPages + 1);
          // lclpgs++;
          pokemonBatched = [];
        }
        return true;
      });
      setMap(true);
      // console.log(`total number of pages: ${lclpgs}`);
      // props.calcPages(lclpgs);
      return true;
    } else return false;
  }
  initialMap();
  useEffect(() => {
    props.calcPages(50);
    //console.log(`and ${localPages}`);
    //console.log(`first page: ${pokemonPageArray[props.page][0].name}`);
    //console.log(`first page: ${pokemonPageArray[props.page][1].name}`);
    //console.log(`first page: ${pokemonPageArray[props.page][2].name}`);
    //console.log(`first page: ${pokemonPageArray[props.page][3].name}`);
    //console.log(`first page: ${pokemonPageArray[props.page][4].name}`);
    //console.log(`first page: ${pokemonPageArray[props.page][5].name}`);
    //console.log(`first page: ${pokemonPageArray[props.page][6].name}`);
    //console.log(`first page: ${pokemonPageArray[props.page][7].name}`);
  }) //, [pokemonPageArray])

  // on Unmount
  // clear array
  // set mapped to false

  // return bool
  // function pokemonOnPage() {
  //  console.log(pokemonPageArray[props.page])
    // console.log(`${Math.floor(index/props.maxPerPage) + 1}, ${props.page}`)
    // return ((Math.floor(index/props.maxPerPage) + 1) === props.page);
  //  return pokemonPageArray[props.page];
  //}
  
  if (pokemonPageArray[props.page] === undefined) {
    return <>undefined</>
  }
  return (
    <>
      {console.log(pokemonPageArray.length)}
      <EachPokemon mapped = {mapped}
        pokemon = {pokemonPageArray[props.page]}>
      </EachPokemon>
    </>
  );
}

export default ItemsOnPage;
/*
<>
      {pokemonPageArray[props.page].map((element)=> {
        <li key={element.name}>
          {element.name} :: {element.type} :: {element.ability}
        </li>
      })}
    </>

    <>
      <EachPokemon mapped = {mapped}
        pokemon = {pokemonPageArray[props.page]}>
      </EachPokemon>
    </>
{pokemonOnPage().map(function (element) {
        <EachPokemon
          key={element.name}
          pokeName={element.name}
          type={element.type}
          ability={element.ability}>
        </EachPokemon>;
      })}
      */