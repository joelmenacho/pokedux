import {useEffect} from 'react';
// import { connect } from 'react-redux';
import{useDispatch, useSelector} from 'react-redux';
import {Col} from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from'./statics/logo.svg';
import './App.css';
import {getPokemon, getpokemonDetails} from'./api';
import { setPokemons } from './actions';

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch =useDispatch();
  // const[pokemons, setPokemons] = useState([]);
  useEffect(()=>{
    const fetchpokemons = async () =>{
    const pokemonsRes =  await getPokemon();
    const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getpokemonDetails(pokemon)));
     dispatch(setPokemons(pokemonsRes));
     dispatch(setPokemons(pokemonsDetailed))
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

