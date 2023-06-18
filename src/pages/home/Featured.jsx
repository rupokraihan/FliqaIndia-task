import React from 'react';
import right from "../../assets/featured/right.png"
import left from "../../assets/featured/left.png"
import img1 from "../../assets/featured/img-1.png"
import img2 from "../../assets/featured/img-2.png"
import img3 from "../../assets/featured/img-3.png"
import img4 from "../../assets/featured/img-4.png"


const Featured = () => {
  return (
    <div className="px-10 mt-14">
      <h1 className="text-4xl text-[#4C696D] font-bold tracking-wider">
        Our Featured Services
      </h1>
      <p className="text-xl text-[#0C0C0C] tracking-wider">
        Discover the range of services provided by FliqaIndia
      </p>

      <div className="flex justify-between items-center mt-10">
        <img className="h-10" src={left} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img className="h-10" src={right} alt="" />
      </div>
    </div>
  );
};

export default Featured;