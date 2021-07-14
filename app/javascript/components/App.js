import React, { useState } from 'react';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, category: 'cat1', name: 'jon', likes: 2, description: 'desc'},
    {id: 2, category: 'cat2', name: 'jon2', likes: 3, description: 'desc1'},
  ])

  const getItems = () => {
    console.log('getItems called')
    setCount(10)
  }

  return(
  <>
    <h1>App</h1>
    <button onClick={getItems}>getItems</button>
    <Items header='Items yo' items={items} />
  </>
  )
}

export default App