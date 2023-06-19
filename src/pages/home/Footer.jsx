import React from 'react';
import img1 from "../../assets/footer/img-1.png"
import img2 from "../../assets/footer/img-2.png"


const Footer = () => {
  return (
    <div className='mt-20'>
      <img className='w-full' src={img1} alt="" />
      <img className='w-full' src={img2} alt="" />
    </div>
  );
};

export default Footer;