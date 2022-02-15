import { useState, useCallback } from 'react'
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

  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
