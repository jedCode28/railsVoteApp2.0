import React from 'react';
import Item from './Item';

const Items = (props) => {
  const {header, items, deleteItem, updateItem, upVote } = props
  
  const renderItems = () => {
    if(items.length == 0){
      return <p>no items</p>
    }
    return items.map( item => <Item upVote={upVote} updateItem={updateItem} deleteItem={deleteItem} key={item.id} {...item} />)
  }


  return (
    <>
      <div className='items-container'>
        <h1>{header ? header : 'Items'}</h1>
        {/* <p>items-container</p> */}
        {renderItems()}
      </div>
    </>
  )
}

export default Items