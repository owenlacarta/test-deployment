import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Link, Route, Routes } from 'react-router-dom'
import PokemonCardComponent from './Components/PokemonComponents/PokemonCardComponent'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'
import PokemonDetailsPage from './Components/PokemonPages/PokemonDetailsPage'
import IndexPage from './Components/Index/IndexPage'




function App() {
  

  return (
    <>
      
      <div>
        <IndexPage/>

      </div>
      

    </>
  )
}

export default App
