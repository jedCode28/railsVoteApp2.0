import React from 'react';

const Item = (props) => {
  const {id, category, name, description, likes} = props
  return (
    <div className='item-container'>
        <div className='item-header'>
          <h1>{name}</h1>
          <div>
            <p>{category}</p>
            <p>{likes}</p>
          </div>
      </div>
      <p>{description}</p>
      <div className='item-footer'>   
        <p>delete</p>
        <p>edit</p>
        <p>Id: {id}</p>
      </div>
    </div>
  )
}
export default Item