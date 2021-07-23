
import React, {useState} from 'react';
import ItemForm from './ItemForm';

const Item = (props) => {
  const {id, category, name, description, likes, deleteItem, updateItem, upVote} = props
  const [showForm, setShowForm] = useState(false)
  const renderItem = () => {
    return (
      <>
        <div className='item-header'>
            <h1>{name}</h1>
            <div>
              <p onClick={() => upVote(id)}>👍 {likes}</p>
            </div>
        </div>
          <p style={{margin: 0, }}>
            <span style={{padding: '5px', border:'1px solid red'}}>{category}</span>
          </p>
        <p>{description}</p>
        <div className='item-footer'>   
          <p onClick={()=> deleteItem(id)}>delete</p>
          <p onClick={() => setShowForm(true)}>edit</p>
          <p>Id: {id}</p>
        </div>
      </>
    )

  }

  return (
    <div className='item-container'>  
      {!showForm && renderItem()}
      {showForm && <ItemForm id={id} updateItem={updateItem} setShowForm={setShowForm} category={category} name={name} description={description} />}
    </div>
  )
}
export default Item