import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Pokedex from '../PokemonPages/Pokedex'
import PokemonDetailsPage from '../PokemonPages/PokemonDetailsPage'

const IndexPage = () => {
  return (
    <Routes>
       <Route path='*' element={<NotFoundPage/>}/>
       <Route path='/' element={<Pokedex/>}/>
       <Route path='/:PokeName' element={<PokemonDetailsPage/>}/>
       
    </Routes>
  )
}
export default IndexPage