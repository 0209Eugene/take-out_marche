import React, { FC } from 'react';
import './menu-item.styles.scss';

type MenuItemProps = {
  key: number,
  title: string,
  imageUrl: string,
  size?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ key, title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`} key={key}>
      <div className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className='subtitle'>Chicken Curry</span>
    </div>
    </div>
  )
};

export default MenuItem;