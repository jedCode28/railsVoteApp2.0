import React, { useState } from 'react';

const ItemForm = (props) => {
  const {addItem, setShowForm, category:catty, name:nammy, description:descy, id, updateItem} = props

  const [name, setName] = useState(nammy ? nammy : '')
  const [category, setCategory] = useState(catty ? catty : '')
  const [description, setDescription] = useState(descy ? descy : '')

  

  const handleSubmit = (e) => {
    e.preventDefault()
    // here are the fields
    if(id){
      updateItem({name, category, description}, id)
      //toggle form here
      setShowForm(false)
    } else {
      addItem({name, category, description})  
    }
    
    // clears form
    setDescription('')
    setCategory('')
    setName('')
  }

  return(
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <h1>{id ? `Editing ${id}` : "Add Item"}</h1>
      <p>name</p>
      <input
        style={styles.input}
        value={name}
        onChange={(e)=> setName(e.target.value)}
      />
      <p>category</p>
      <input 
        style={styles.input}
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
      />
      <p>description</p>
      <input 
        style={styles.input}
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
      />
      <br />
      <button type='submit'>{id ? 'Edit' : 'Add'}</button>
      {setShowForm && <button onClick={() => setShowForm(false)}>cancel</button>} 
    </form>
  )
}

const styles = {
  formContainer: {
    border: '10px',
    margin: '10px',
    padding: '10px',
  },
  input: {
    width: '600px',
    height: '20px',
    marginBottom: '10px',
  }
}

export default ItemForm