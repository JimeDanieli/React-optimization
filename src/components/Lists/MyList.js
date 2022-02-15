import { memo } from "react";
//la memoization basicamente nos permite guardar los resultados de una funcion en un objeto de memoria, en vez de tener que volver a llamar a la funcion nuevamente, lo que lleva muchisimo menos tiempo
const Li =memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
}) 

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(e =>
        <Li
          key={e.name + e.lastname}
          fullname={`${e.name} ${e.lastname}`}
        />
      )}
    </ul>
  )
}

export default MyList
