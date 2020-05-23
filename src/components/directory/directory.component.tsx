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
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sukiya.jp%2Fmenu%2Fout%2Fcurry%2F301300%2F&psig=AOvVaw3ztpACYTd3nijxWvXiv2-F&ust=1589212064615000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPicgL3SqekCFQAAAAAdAAAAABAD',
      id: 2,
      linkUrl: 'pork-curry'
    },
    {
      title: 'Beef Curry',
      subTitle: 'sample',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftakeout.epark.jp%2Fsaitama%2F372%2Fcafe%2F6319%2Fmenu%2F105040&psig=AOvVaw0nxdDz44pvNMzKdr1xSjPI&ust=1589212020010000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCND23ajSqekCFQAAAAAdAAAAABAD',
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
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Frtrp.jp%2Farticles%2F120092%2F&psig=AOvVaw2gMYHTRPOoXRfGQ-fWpZd5&ust=1589212161408000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICEuOnSqekCFQAAAAAdAAAAABAD',
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
