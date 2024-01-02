import {useEffect} from 'react';
import { connect } from 'react-redux';
import {Col} from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from'./statics/logo.svg';
import './App.css';
import {getPokemon} from'./api';
import { setPokemons as setPokemonsActions } from './actions';

function App({pokemons, setPokemons}) {
console.log("🚀 ~ file: App.js:12 ~ App ~ pokemons:", pokemons)


  // const[pokemons, setPokemons] = useState([]);

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
const mapStateToProps = (state) =>({
  pokemons: state.pokemons,
});
const mapDispachToProps = (dispatch) => ({
  setPokemons: (value)=> dispatch(setPokemonsActions(value)),
});

// const mapDispachToProps = (dispatch)=> ({
//   setPokemons:(value) =>dispatch(setPokemonsActions(value)),
// });
export default connect(mapStateToProps, mapDispachToProps) (App);
