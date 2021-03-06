import { useState, useCallback,useMemo } from 'react'
//useCallback es una funcion de memorizacion que lo que hace es recordar la funcion y en el caso de que esta sea la misma va a devolver la misma instancia y no una nueva
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'

function App() {
  const [valores, setValores] = useState([])
  const handleSubmit =useCallback( (values) => {
    setValores(data=>([
      ...data,
      values
    ]))
  },[])

  const iterador=50000000
  console.time('memo')
  //recibe dos argumentos, el primero es una funcion donde guarda el resultado siempre y cuando los resultados no hayan cambiado, y el segundo son los argumentos que va a recibir nuestra funcion
  const memoized=useMemo(()=>{
    let total=0
    for(let i=0; i < iterador ; i++ ){
    total = total * iterador
  } return total
  
  }, [iterador]) 
  console.timeEnd('memo')
//frena un timer que llamaba antes al tiempo e imprime el resultado
  return (
    <div>
      <Title>My title</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
