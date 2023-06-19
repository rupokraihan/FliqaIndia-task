import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Trusted from './trusted';
import Featured from './Featured';
import Discover from './discover';
import Blogs from './Blogs';
import Weading from './Weading';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Trusted />
      <Featured />
      <Discover />
      <Blogs />
      <Weading/>
    </div>
  );
};

export default Home;