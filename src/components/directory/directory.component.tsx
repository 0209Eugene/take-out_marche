import React, { useState, useCallback } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


type Section = {
  title: string
  subTitle: string
  imageUrl: string
  id: number
  size?: string
  linkUrl: string
}

const Directory :React.FC = () => {

  const sections: Section[] = [
    {
      title: 'Chicken Curry',
      subTitle: 'sample',
      imageUrl: 'https://livedoor.blogimg.jp/mantaro_club/imgs/c/1/c1302da0.jpg',
      id: 1,
      linkUrl: 'chicken-curry'
    },
    {
      title: 'Pork Curry',
      subTitle: 'sample',
      imageUrl: 'https://cdn.takeout.epark.jp/images/product/3281/103363/Q8rcJJneKqOMvw53OcKNioPZPsyl40tBT2GK1JnA.jpeg',
      id: 2,
      linkUrl: 'pork-curry'
    },
    {
      title: 'Beef Curry',
      subTitle: 'sample',
      imageUrl: 'https://img.hanako.tokyo/2020/05/11201603/cbf0500faf4689d810091e6d6fdd876b-768x512.jpg',
      id: 3,
      linkUrl: 'beef-curry'
    },
    { 
      title: '唐揚げ弁当',
      subTitle: '塩味',
      imageUrl: 'https://images.keizai.biz/sendai_keizai/headline/1569320255_photo.jpg',
      id: 4,
      size: 'large',
      linkUrl: 'karaage-bento'
    },
    {
      title: 'SandWitch',
      subTitle: 'sample',
      imageUrl: 'https://willstage.jp/member/wp/wp-content/uploads/780e929dd33f31f91688b1585d15fee7.gif',
      id: 5,
      size: 'large',
      linkUrl: 'sandwitch'
    },
  ];

    return (
      <div className='directory-menu'>
        {
          sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
      </div>
    )
};

export default Directory;
