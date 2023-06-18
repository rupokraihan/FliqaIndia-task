import React from 'react';
import img1 from "../../assets/trusted-section/img-1.png"
import img2 from "../../assets/trusted-section/img-2.png"
import img3 from "../../assets/trusted-section/img-3.png"
import img5 from "../../assets/trusted-section/img-5.png"
import img6 from "../../assets/trusted-section/img-6.png"

const Trusted = () => {
  return (
    <div className="bg-[#A1E3D8] h-[451px] mt-20">
      <div className="flex justify-between pt-12 px-10">
        <div>
          <h2 className="text-4xl text-[#4C696D] font-bold tracking-wider">
            Find Trusted Associate
          </h2>
          <p className="text-xl text-[#0C0C0C] tracking-wider">
            Find the best Fliqa Associate for your special day.
          </p>
        </div>
        <div className="text-2xl text-[#4C696D] tracking-wider pr-14">
          <p>See More</p>
        </div>
      </div>
      <div className='flex justify-between mt-16 mx-12'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </div>
  );
};

export default Trusted;