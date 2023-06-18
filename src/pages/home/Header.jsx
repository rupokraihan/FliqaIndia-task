import React from 'react';
import banner from "../../assets/banner/banner.png"

const Header = () => {
  return (
    <div>
      <img className='w-full' src={banner} alt="" />
    </div>
  );
};

export default Header;