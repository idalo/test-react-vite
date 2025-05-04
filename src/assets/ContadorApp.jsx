import React, { useState } from 'react'

// (event) => handleClick(event, 'Otro argumento') mas de un argumento




export const ContadorApp = ({value}) => {
  
  const [contador, setContador] = useState( value )
  
  const handleClick =() => {
    setContador(contador + 1)
    console.log(value)
  }
  return (
    <>
      <h1>Contador: </h1>
      <p>{contador}</p>
      <button onClick={() => handleClick(value)}>Soy un boton</button>
    </>
  );
}
