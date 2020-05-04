import React from 'react';
import './homePage.styles.scss';

const HomePage: React.FC = () => {
  return(
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Sample Menu1</h1>
            <span className='subtitle'>Chicken Curry</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;