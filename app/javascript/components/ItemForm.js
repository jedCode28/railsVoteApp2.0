import React, { useState } from 'react';

const ItemForm = (props) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const {addItem, setShowForm} = props

  const handleSubmit = (e) => {
    e.preventDefault()
    // here are the fields
    addItem({name, category, description})

    // clears form
    setDescription('')
    setCategory('')
    setName('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <p>name</p>
      <input
        value={name}
        onChange={(e)=> setName(e.target.value)}
      />
      <p>category</p>
      <input 
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
      />
      <p>description</p>
      <input 
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
      />
      <button>add</button>
      {setShowForm && <button onClick={() => setShowForm(false)}>cancel</button>} 
    </form>
  )
}

export default ItemForm