import React, {useEffect, useState} from 'react'

export const UsersApp = () => {

  const [users, setUsers] = useState([])

  const fetchUsers = async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  const hendleFetc = () => {
    fetchUsers()
  }

  return (
    <>
      <h1>Lista de Usuraios:</h1>
      <ul>
        {users.map(user => <li key={user.id}>Nombre: {user.name} Email: {user.email}</li>)}
      </ul>
      <button onClick={hendleFetc}>Cargar Api</button>
    </>
  )
}
