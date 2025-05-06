import { useFetchData } from "../hooks/useFetchData"

export const UserList = ({ endPoint }) => {
	const { data, isLoading } = useFetchData(endPoint)
  return (
    <>
			<ul>
        { isLoading 
            ? <p>Cargando...</p> 
            : endPoint == 'users' 
              ? data.map(item => <li key={item.id}>Nombre: {item.name} Email: {item.email}</li>)
			        : data.map(item => <li key={item.id}>Nombre: {item.name} Email: {item.body}</li>)
        }
      </ul>
		</>
  )
}
