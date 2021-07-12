import React from 'react';
import './Home.scss';

import BasicTextPanel from '../../componenets/BasicTextPanel/BasicTextPanel';

const Home = () => {
  return (
    <div className='home'>
      <BasicTextPanel />
      <div className='home__fourPanelSection'>
        <img src='/src/assets/logo.jpeg' alt='logo' />
        <img src='/src/assets/building.jpeg' alt='building' />
        <img src='/src/assets/car.jpeg' alt='car' />
        <img src='/src/assets/board.jpeg' alt='board' />
      </div>
      <div className='home__imagePanel'>
        <img src='/src/assets/warsaw.jpeg' alt='Warsaw' />
        <div className='home__imagePanel__cover'></div>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          repellat! Ipsa, accusantium. Hic totam excepturi soluta?
        </h2>
      </div>
      <BasicTextPanel />
    </div>
  );
};

export default Home;
