import React from 'react';
import img1 from "../../assets/weading/img-1.png"
import img2 from "../../assets/weading/img-2.png"
import img3 from "../../assets/weading/img-3.png"
import img4 from "../../assets/weading/img-4.png"
import img5 from "../../assets/weading/img-5.png"
import img6 from "../../assets/weading/img-6.png"

const Weading = () => {
  return (
    <div className="px-10 mt-10 ">
      <div className="pt-8">
        <h1 className="text-4xl text-[#4C696D] font-bold tracking-wider">
          Real Wedding
        </h1>
        <p className="text-xl text-[#0C0C0C] tracking-wider">
          List your wedding and browse portfolio
        </p>
      </div>
      <div className='flex justify-between px-16'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className='relative flex justify-center mt-14'>
        <img src={img5} alt="" />
        <img
          src={img6}
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Weading;