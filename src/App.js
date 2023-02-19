import logo from './logo.svg';
import './App.css';
import CounterButton from './components/CounterButton/CounterButton';
import PokemonView from './components/PokemonView/PokemonView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PokemonView/>
{/* 
      <CounterButton/>
      <CounterButton/>
      <CounterButton/> */}

      </header>
    </div>
  );
}

export default App;
