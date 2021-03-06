import React from 'react';
import './preview-collection.style.scss';

import CollectionItem from '../collection-item/collection-item.component';


type CollectionPreviewProps = {
  title: string,
  items: 
    {
      id: number,
      name: string,
      imageUrl: string,
      price: number
    }[]
}


const CollectionPreview: React.FC< CollectionPreviewProps> = ({title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
          ))
        }
      </div>
    </div>
  )
}


export default CollectionPreview;