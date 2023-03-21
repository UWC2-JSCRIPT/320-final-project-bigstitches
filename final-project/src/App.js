import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChoosePokeFighters from './ChoosePokeFighters';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Compare from './pages/Compare';
import {useReducer} from 'react';
import {initialState, pokemonArrayReducer} from './pokemonArrayReducer';

function reducer(_, action) {
  switch (action.type) {
    case 'changed_name': {
      return {
        name: action.nextName,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

function App() {
  const [pokeArrayAlpha, dispatchPokemonAlpha] = useReducer(pokemonArrayReducer, initialState);
  const [pokeArrayBravo, dispatchPokemonBravo] = useReducer(pokemonArrayReducer, initialState);
  const [stateNameA, dispatchNameA] = useReducer(reducer, {name: 'TeamA'});
  const [stateNameB, dispatchNameB] = useReducer(reducer, {name: 'TeamB'});
  
  function handleButtonClickAddAlpha(e) {
    dispatchPokemonAlpha({ 
      type: 'add_Pokemon',
      pokeElement: {name: e.name, type: e.type, ability: e.ability}, 
    });
  }
  function handleButtonClickAddBravo(e) {
    dispatchPokemonBravo({ 
      type: 'add_Pokemon',
      pokeElement: {name: e.name, type: e.type, ability: e.ability}, 
    });
  }

  function handleButtonClickRemoveAlpha(e) {
    dispatchPokemonAlpha({ 
      type: 'remove_Pokemon',
      pokeElement: {name: e.name, type: e.type, ability: e.ability},
    });
  }

  function handleButtonClickRemoveBravo(e) {
    dispatchPokemonBravo({ 
      type: 'remove_Pokemon',
      pokeElement: {name: e.name, type: e.type, ability: e.ability},
    });
  }

  function handleInputChangeA(e) {
    dispatchNameA({
      type: 'changed_name',
      nextName: e.target.value
    });
  }

  function handleInputChangeB(e) {
    dispatchNameB({
      type: 'changed_name',
      nextName: e.target.value
    });
  }

  let listChosenPokemonAlpha = pokeArrayAlpha?.map((element) =>
    <li key={element.name}>
      <span>{element.name}</span> :: <span>{element.type}</span> :: <span>{element.ability}</span>
      <button onClick={() => handleButtonClickRemoveAlpha(element)}>
        REMOVE
      </button>
    </li>
  );

  let listChosenPokemonBravo = pokeArrayBravo?.map((element) =>
    <li key={element.name}>
      <span>{element.name}</span> :: <span>{element.type}</span> :: <span>{element.ability}</span>
      <button onClick={() => handleButtonClickRemoveBravo(element)}>
        REMOVE
      </button>
    </li>
  );

  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home></Home>}/>
              <Route path="/compare" element={
                <Compare
                pokeArrayAlpha = {pokeArrayAlpha}
                pokeArrayBravo = {pokeArrayBravo}>
                </Compare>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
      
      <br></br>
      <>
      <input
          value={stateNameA.name}
          onChange={handleInputChangeA}
        />
      </>
      <ul>
        {listChosenPokemonAlpha}
      </ul>
      <>
      <input
          value={stateNameB.name}
          onChange={handleInputChangeB}
        />
      </>
      <ul>
        {listChosenPokemonBravo}
      </ul>
      
      <ChoosePokeFighters
        teamA = {stateNameA.name}
        teamB = {stateNameB.name}
        handleButtonClickAddAlpha = {handleButtonClickAddAlpha}
        handleButtonClickAddBravo = {handleButtonClickAddBravo}
      />
    </div>
  );
}

export default App;
