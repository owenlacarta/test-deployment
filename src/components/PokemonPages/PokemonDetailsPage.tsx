import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TypeComponent from '../PokemonComponents/TypeComponent';

interface Stats{
  base_stat : number
  name : string
}

interface Pokemon{
  name: string
  height : number
  weight : number
  id: number
  img : string
  types: string[]
  abilities: string[]

}


 const PokemonDetailsPage = () => {
    const { PokeName } = useParams();
    const [pokemon, setPokemon] = useState<Pokemon>()
    

    useEffect(
      () => {
        async function FetchPokemonData() {
          try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${PokeName}`)
  
            const results = response.data

            const pokemonDetails : Pokemon = {
              name : results.name,
              height : results.height,
              id : results.id,
              img : results.sprites.other.home.front_shiny,
              types :results.types.map(
                (type : {type: {name:string}}) => type.type.name
              ),
              weight : results.weight,
              abilities : results.abilities.map(
                (ability : {ability : {name:string}}) => ability.ability.name
              )
            }
            
            setPokemon(pokemonDetails)
          }catch (error){
            console.error("Error Fetching Pokemondata:", error)
          }
        }
        FetchPokemonData()
      },[])
  


  return (
    <>
        <div className="card card-hover" style={{width: '18rem', height: '40rem', backgroundColor: '#faf7fc'}} >
            <div className='card-number'>
                <h6 className='card-title'>{pokemon?.id}</h6>
                
            </div>
            <img src={pokemon?.img} className="card-img-top pokemon" alt={pokemon?.name} />
            <div className="card-body">
            <h5 className="card-title text-description">{pokemon?.name}</h5>
            <p className='text-description'>Height: {pokemon?.height}</p>
            <p className='text-description'>Weight: {pokemon?.weight}</p>
                <div className='row'>
                    
                    {
                        pokemon?.types.map(
                            (type) =>
                            <div className='col'>
                                <TypeComponent type={type} />
                            </div>
                        )
                    }
                    

                </div>
                <h6>Abilities :</h6>
                <div className='row'>
                  {
                    pokemon?.abilities.map(
                      (ability_name) => 
                      <div className='col'>
                        <p>{ability_name}</p>
                      </div>
                    )
                  }

                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default PokemonDetailsPage