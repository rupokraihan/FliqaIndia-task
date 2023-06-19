import React from 'react';
import img1 from "../../assets/testimonials/img-1 (2).png"
import img2 from "../../assets/testimonials/img-2.png"
import img3 from "../../assets/testimonials/img-3.png"

const Testimonials = () => {
  return (
    <div className="mt-10 px-10">
      <div>
        <div className="text-center">
          <h1 className="text-4xl text-[#4C696D] font-bold tracking-wider">
            Testimonials
          </h1>
          <p className="text-xl text-[#0C0C0C] tracking-wider">
            Words from our clients
          </p>
        </div>
        <div className="flex justify-end mb-10">
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <img className="h-80 ml-40" src={img3} alt="" />
        </div>
        <div className="flex gap-4">
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
      <ul className="border-2 mb-10 mt-12 border-black"></ul>
    </div>
  );
};

export default Testimonials;