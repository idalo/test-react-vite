import './styles/PrimerComponente.css'
import React from 'react'
const string ="Esto es un texto"
const number = 123456
const array = ['Curso de react', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1+1
const objeto = {nombre:'Curso de JS', duracio:4}
const fecha = new Date()



export const PrimerComponente = () => {
  return (
    <>
      <p>
        { JSON.stringify(objeto) }
      </p>
      <p>
        { string }
      </p>
    </>
  )
}
