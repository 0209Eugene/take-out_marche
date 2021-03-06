import React from 'react';

import './collection-item.style.scss';


interface CollectionItemProps {
  id?: number, // TODO: To Fix because id must not to be undefined
  name: string,
  price: number,
  imageUrl: string
}

const CollectionItem: React.FC<CollectionItemProps>
  = ({ id, name, price, imageUrl }) => {
  return (
    <div key={id} className='collection-item'>
      <div className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'> {name}</span>
        <span className='price'> {price}</span>
      </div>
    </div>
  )
}

export default CollectionItem;