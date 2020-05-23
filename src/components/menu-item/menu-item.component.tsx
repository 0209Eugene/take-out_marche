import React, { FC } from 'react';
import { withRouter, RouteComponentProps, RouteChildrenProps } from 'react-router-dom';

import './menu-item.styles.scss';

interface MenuItemProps extends RouteComponentProps<{}> { 
  key: number,
  title: string,
  imageUrl: string,
  size?: string,
  linkUrl: string
};


const MenuItem: React.FC<MenuItemProps> = ({ key, title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div className={`${size} menu-item`} key={key}
      onClick={() => history.push(`${ match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);