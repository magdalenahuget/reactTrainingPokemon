import logo from './logo.svg';
import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import PokemonView from './components/PokemonView/PokemonView';
import {useState} from 'react';
import {Slider} from '@mui/material';

function App() {
  const [counter, setCounter] = useState(1);
  const onClick = e => setCounter(counter + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PokemonView pokemonId={counter}/>
        <CounterButton counter={counter} onClick={onClick} />
        <div className="mySlider">
          <Slider defaultValue={30} 
          aria-label="Disabled slider" 
          onChange={e => setCounter(e.target.value)} />
        </div>
      </header>
    </div>
  );
}

export default App;
