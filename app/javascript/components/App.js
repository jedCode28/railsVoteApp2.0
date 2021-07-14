import React, { useState } from 'react';
import Items from './Items';
import axios from 'axios';

const dummyData = [
{id: 1, category: 'cat1', name: 'jon', likes: 2, description: 'desc'},
{id: 2, category: 'cat2', name: 'jon2', likes: 3, description: 'desc1'},
]

const App = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const getItems = async () => {
    console.log('getItems called')
    try{
    setLoading(true)
    let res = await axios.get('/items')
    setLoading(false)
    setItems(res.data)
    } catch(err){
      console.log(err)
      alert('error in axios')
      setLoading(false)
    }
  }

  return(
  <>
    <h1>App</h1>
    <button disabled={loading} onClick={getItems}>{loading ? 'loading' : 'getItems'}</button>
    <Items header='Items yo' items={items} />
  </>
  )
}

export default App