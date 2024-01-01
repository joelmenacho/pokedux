import {Col} from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from'./statics/logo.svg';
import './App.css';

function App() {
  return (
  <div className="App"> 
  <Col span={4} offset={10}>
    <img src={logo} alt="pokedux" />
  </Col>
  <Col span={8} offset={8}>
  <Searcher/> 
  </Col>
  <PokemonList />
  </div>
  );
}

export default App;
