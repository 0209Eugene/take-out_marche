import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/preview-collection/preview-collection';

const data = {
  collections: SHOP_DATA
};

const ShopPage: React.FC = () => {

  const { collections } = data;
  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}


export default ShopPage;