import React, {useEffect, useState} from 'react'
import { UserList } from './components/userList'


export const UsersApp = () => {

  const [endPoint, setEndPoint] = useState('users')

  const hendleFetc = () => {
    setEndPoint('comments')
  }

  return (
    <>
      <h1>Lista de Usuraios en APP:</h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={hendleFetc}>Cargar Api</button>
    </>
  )
}
