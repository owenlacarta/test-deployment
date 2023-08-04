import React from 'react'
import TypeComponent from '../PokemonComponents/TypeComponent'
import { useNavigate } from 'react-router-dom'

interface Pokemon{
    name: string
    height : number
    weight : number
    id: number
    img : string
    types: string[]
  }



const PokemonPage = ({name, height, weight,id,img,types}: Pokemon) => {
  return (
    <>
        <div className="card" style={{width: '18rem', height: '30rem'}}>
            <img src={img} className="card-img-top pokemon" alt={name}/>
            <div className="card-body">
                <div className='row'>
                    <div className='col-9'>
                        <h5 className="card-title text-description">{name}</h5>
                    </div>
                    <div className='col-3'>
                        <h6 className='card-title'>{id}</h6>
                    </div>
                </div>
                
                <p className="card-text text-description">Height: {height}</p>
                <p className="card-text text-description">Weight: {weight}</p>
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
        <button type="button" className="btn btn-secondary">Back</button>
    </>
  )
}


export default PokemonPage
