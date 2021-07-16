import React, { useState } from 'react';
import Items from './Items';
import axios from 'axios';

const dummyData = [
{id: 1, category: 'cat1', name: 'jon', likes: 2, description: 'desc'},
{id: 2, category: 'cat2', name: 'jon2', likes: 3, description: 'desc1'},
]

const App = () => {
  const handleError = (error) => {
    console.log(error)
    alert('error in api')
  }


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
      handleError(err)
      setLoading(false)
    }
  }

  const deleteItem = async (id) => {
    console.log('clicked, ID:', id)
    try {

      let res = await axios.delete(`/items/${id}`) 

       //response.data should be the thing deleted
       // remove id from UI
       //filter id out if items in new array with filter

      let filterItems = items.filter( i => i.id !== id )

       // setItems with newArray

       setItems(filterItems)
    }catch(err){
      handleError(err)
      setLoading(false)
    }
  }

  // const getItemsNoAsync = () => {                   <--------- Old ES5 way of doing callbacks
  //   // promiseCall().then((res)=>{}).catch((err)=>{})
  //   axios.get('/items').then((res)=>{
  //     // finished: success
  //     setLoading(false)
  //     setItems(res.data)
  //   }).catch(err)=>{
  //     // finished: success
  //     console.log(err)
  //     alert('error in api')
  //     setLoading(false)
  //   })
  // }

  return(
  <>
    <h1>App</h1>
    <button disabled={loading} onClick={getItems}>{loading ? 'loading' : 'getItems'}</button>
    <Items deleteItem={deleteItem} header='Items yo' items={items} />
  </>
  )
}

export default App