import React, {useState} from 'react'

export const AgregarTarea = ({agregarTarea}) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const onSubmit = (event) => {
    
    event.preventDefault()
    agregarTarea(inputValue)
  }
  return (
      <form onSubmit={onSubmit}>
        <input type='text' 
          placeholder='Agregar tarea'
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
      </form>
  )
}
