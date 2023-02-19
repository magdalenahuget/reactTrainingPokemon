import logo from './logo.svg';
import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import PokemonView from './components/PokemonView/PokemonView';
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const onClick = e => setCounter(counter + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PokemonView pokemonId={counter}/>
        <CounterButton counter={counter} onClick={onClick} />


      </header>
    </div>
  );
}

export default App;
