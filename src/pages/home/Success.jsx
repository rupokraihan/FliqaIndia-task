import React from 'react';
import img1 from "../../assets/success/img-1.png";
import img2 from "../../assets/success/img-2.png";
import img3 from "../../assets/success/img-3.png";
import img4 from "../../assets/success/img-4.png";
import img5 from "../../assets/success/img-5.png";

const Success = () => {
  return (
    <div className="mt-10 mx-10 bg-[#ACCBC7] h-[459px] shadow-xl rounded-lg">
      <div className="text-center pt-10">
        <h1 className="text-4xl text-[#4C696D] font-bold tracking-wider">
          Our Success
        </h1>
        <p className="text-xl text-[#0C0C0C] tracking-wider">
          Journey of our success.
        </p>
      </div>
      <div className='flex justify-between px-[170px] mt-12'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />

      </div>
    </div>
  );
};

export default Success;