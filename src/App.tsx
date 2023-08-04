// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutPage from './components/About/AboutPage'
import HomePage from './components/Home/HomePage'
import ProfilePage from './components/Profile/ProfilePage'
import RootPage from './components/RootPage/RootPage'
import {Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface Pokemon {
  name: string;
  height: number;
  id: number;
  img: string;
  types: string[];
}

// function App() {
  // const [count, setCount] = useState(0)
const App: React.FC = () => {
  const [ pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemonData(){

      try {
        const response = await axios.get( // axios.post axios.put axios.patch axios
        "https://pokeapi.co/api/v2/pokemon/?offset-0Rlimit=30"
        );
const results = response.data.results;

const fetchedPokemonList: Pokemon[] = await Promise.all( 
  results.map(async (pokemon: {url: string }) => {
    const pokemonDataResponse = await axios.get(pokemon.url);

    console.log(pokemonDataResponse);
return{
  name: pokemonDataResponse.data.name,
  height: pokemonDataResponse.data.height,
  id: pokemonDataResponse.data.id,
  img: pokemonDataResponse.data.sprites.other.dream_world.front_default,
  types: pokemonDataResponse.data.types.map(
    (type:{type:{name: string}}) => type.type.name
  ),
};
  })
);
setPokemonList(fetchedPokemonList);
      } catch (error){
        console. error(" Error fetching Pokemon data:",  error);
      }
    }
    fetchPokemonData();
  },[]);

  return (
<>
    <Routes>
      <Route path="/" element={<RootPage/>}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Route>
    </Routes>
   {/* <section>
    <ul>
      {pokemonList.map((pokemon) =>(

<li>
<div>
  <h3>{pokemon.name}</h3>
  <h4>{pokemon.id}</h4>
</div>
<div>
  <img src={pokemon.img} alt={pokemon.name}/>
</div>

<ul>
  {pokemon.types.map((type) => (
<li>{type}</li>

 ))}
</ul>
</li>
      ))}
    </ul>
   </section> */}
    <section className="pokemon-cards">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
      <p className="id">
	    	<span className="number-prefix">#</span>{pokemon.id} </p>
          <div className="pokemon-image">
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
          <div className="pokemon-info">
            <div className='row'>

        <h3>{pokemon.name}</h3>

          {/* <h5>ID: {pokemon.id}</h5> */}
         
            </div>
     
            {/* <p>Height: {pokemon.height}</p> */}
          </div>
          <ul className={`pokemon-types ${pokemon.types[0].toLowerCase()}`}>
              {pokemon.types.map((type, index) => (
                <li key={index}>{type}</li>
                
              ))}
            </ul>
        </div>
      ))}
    </section>
    </>
  )
}

export default App
