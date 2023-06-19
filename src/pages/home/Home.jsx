import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Trusted from './trusted';
import Featured from './Featured';
import Discover from './discover';
import Blogs from './Blogs';
import Weading from './Weading';
import Offer from './Offer';
import Testimonials from './Testimonials';
import Awards from './Awards';
import Success from './Success';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Trusted />
      <Featured />
      <Discover />
      <Blogs />
      <Weading />
      <Offer />
      <Testimonials />
      <Awards />
      <Success/>
    </div>
  );
};

export default Home;