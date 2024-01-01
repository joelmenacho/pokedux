import {useEffect, useState} from 'react';
import {Col} from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from'./statics/logo.svg';
import './App.css';
import {getPokemon} from'./api';



function App() {
  const[pokemons, setPokemons] = useState([]);

  useEffect(()=>{
    const fetchpokemons = async () =>{
    const pokemonsRes =  await getPokemon();
     setPokemons(pokemonsRes);
    };
    fetchpokemons();
  },[]);

  return (
  <div className="App"> 
  <Col span={4} offset={10}>
    <img src={logo} alt="pokedux" />
  </Col>
  <Col span={8} offset={8}>
  <Searcher/> 
  </Col>
  <PokemonList  pokemons={pokemons}/>
  </div>
  );
}

export default App;
