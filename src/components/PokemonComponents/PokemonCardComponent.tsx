import React from 'react'
import TypeComponent from './TypeComponent'
import { Link, useNavigate } from 'react-router-dom'

interface Pokemon{
    name: string
    id: number
    img : string
    types: string[]
  }
//const navigate= useNavigate()
const PokemonCardComponent = ({name,id,img,types}: Pokemon) => {
  return (
    <>
        <Link to={`/${name}`}>

        
        <div className="card card-hover" style={{width: '18rem', height: '30rem', backgroundColor: '#faf7fc'}} >
            <div className='card-number'>
                <h6 className='card-title'>{id}</h6>
                
            </div>
            <img src={img} className="card-img-top pokemon" alt={name} />
            <div className="card-body">
            <h5 className="card-title text-description mb-4">{name}</h5>
                <div className='row'>
                    
                    {
                        types.map(
                            (type) =>
                            <div className='col'>
                                <TypeComponent type={type} />
                            </div>
                        )
                    }
                    

                </div>
                
                
            </div>
        </div>
        </Link>
    </>
  )
}

export default PokemonCardComponent