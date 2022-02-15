import { memo } from "react";
import {isEqual} from "lodash"
//la memoization basicamente nos permite guardar los resultados de una funcion en un objeto de memoria, en vez de tener que volver a llamar a la funcion nuevamente, lo que lleva muchisimo menos tiempo
/* const Li =memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
})  */
//la ventaja que tiene la funcion de memo es que el primer argumento que le pasamos es la funcion y el segundo arg es la estrategia de como van a compararse las props
const Li =memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)

/* const MyList = ({ data }) => {
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
} */
const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(e =>
        <Li key={e.name + e.lastname}>
          {e.name} {e.lastname}
        </Li>
      )}
    </ul>
  )
}

export default memo(MyList)
