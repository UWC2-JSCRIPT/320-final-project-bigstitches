import React, {useState} from 'react';
import ModPokeArr from './ModPokeArr';
import PageThrough from './PageThrough';
import PropTypes from 'prop-types';
// import pokemon from './data/pokemon.json';
import smallerPoke from './data/smallerPoke.json';
// import PropTypes from 'prop-types';

function ListPokemon({teamA, teamB, handleButtonClickAddAlpha, handleButtonClickAddBravo}) {
  // const [pokemonPageArray, setPokePerPage] = useState([[]]);
  const [totalPages, _] = useState(7);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [twoPage, setTwoPage] = useState(3);
  // const mountedRef = useRef();
  
  const handleClick = event => {
    setPage(page + 1);
    console.log(event.target.name);
    switch(event.target.name) {
      case 'previousPage':
        // page before the homePage
        if (page === 1) {
          setPage(page);
          setNextPage(page + 1);
          setTwoPage(page + 2);
        } else {
          setPage(page - 1);
          setNextPage(page);
          setTwoPage(page + 1);
        }
        break;
      case 'homePage':
        // do nothing
        break;
      case 'onePageAfter':
        //
        setPage(nextPage);
        setNextPage(twoPage);
        setTwoPage(twoPage + 1);
        break;
      case 'twoPagesAfter':
        //
        setPage(page + 2);
        setNextPage(page + 3);
        setTwoPage(page + 4);
        break;
      case 'nextPage':
        //
        if (twoPage === totalPages) {
          return;
        } else {
          setPage(page + 1);
          setNextPage(page + 2);
          setTwoPage(page + 3);
        }
        break;
      case 'lastPage':
        //
        setPage(totalPages);
        setNextPage(totalPages);
        setTwoPage(totalPages);
        break;
    }
  };


  return (
    <>
      <PageThrough
        totalPages = {totalPages}
        nextPage = {nextPage}
        twoPage = {twoPage}
        page = {page}
        handleClick = {handleClick}>
      </PageThrough>
      <ul>
        {smallerPoke[(page-1)].map((element) =>
          <li key={element.name}>
            <button onClick={() => handleButtonClickAddAlpha(element)}>
              {teamA}
            </button>
            <span>{element.name}</span> :: <span>{element.type}</span> :: <span>{element.ability}</span>
            <button onClick={() => handleButtonClickAddBravo(element)}>
              {teamB}
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default ListPokemon;
