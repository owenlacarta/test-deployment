import React from 'react'

interface PokeType{
    type:string
}

const TypeComponent = ({type}:PokeType) => {

    
    return (
      <>
          <div>
              <p className={type+' poke-type pt-2 pb-2'}>
                  {type}
              </p>
          </div>
      </>
    )
  }

export default  TypeComponent