
// import PropTypes from 'prop-types'

export const ComponenteProps = ({titulo, subtitulo}) => {
    console.log(titulo);
  return (
    <h1>Props: {titulo} esta en la pocision {subtitulo}</h1>
  )
}

// ComponenteProps.propTypes = {
//     titulo: PropTypes.string.isRequired,
//     subtitulo: PropTypes.number.isRequired
// }

ComponenteProps.defautlProps = {
  titulo: 'Curso de React',
  subtitulo: 'Sesseon de props'
}