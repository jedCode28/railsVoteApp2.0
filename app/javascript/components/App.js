import React, { useState } from 'react';
import Items from './Items';
import axios from 'axios';
import ItemForm from './ItemForm';

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

  const addItem = async (obj) => {
    console.log(obj)
    // want to add to db 
    try{
    let res = await axios.post('/items', {...obj, likes:0 })
    // then update UI in App.js
    setItems([...items, res.data])
    } catch(err){
      handleError(err)
    }
  }

  const updateItem = async (itemObj, id) => {
    try {
      let res = await axios.put(`/items/${id}`, itemObj)

      let updateItems = items.map(i => i.id !== id ? i : res.data )

      setItems(updateItems)
    } catch(err){
      handleError(err)
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
    <ItemForm addItem={addItem}/>
    <Items updateItem={updateItem} deleteItem={deleteItem} header='Items yo' items={items} />
  </>
  )
}

export default App