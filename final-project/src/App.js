import logo from './logo.svg';
import './App.css';
import ChoosePokeFighters from './ChoosePokeFighters';
// import ListPageDisperse from './ListPageDisperse';
// import smallerPoke from './data/smallerPoke.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ChoosePokeFighters/>
    </div>
  );
}

export default App;

// <PageListPokemon/>