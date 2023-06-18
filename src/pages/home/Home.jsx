import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Trusted from './trusted';
import Featured from './Featured';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Trusted />
      <Featured/>
    </div>
  );
};

export default Home;