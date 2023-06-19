import React from 'react';
import img1 from "../../assets/offer/img-1.png";
import img2 from "../../assets/offer/img-2.png";
import img3 from "../../assets/offer/img-3.png";
import img4 from "../../assets/offer/img-4.png";
import img5 from "../../assets/offer/line.png";

const Offer = () => {
  return (
    <div className=" mt-10 ">
      <div className=" text-center mb-8">
        <h1 className="text-4xl text-[#4C696D] font-bold tracking-wider">
          Best Offers
        </h1>
        <p className="text-xl text-[#0C0C0C] tracking-wider">
          Discover the best offers on our services
        </p>
      </div>
      <div className="flex justify-between px-16 bg-[#BADCDC] bg-opacity-50 py-6">
        <img src={img1} alt="" />
        <img className="h-[300px] flex mt-8" src={img5} alt="" />
        <img src={img2} alt="" />
        <img className="h-[300px] flex mt-8" src={img5} alt="" />
        <img src={img3} alt="" />
        <img className="h-[300px] flex mt-8" src={img5} alt="" />
        <img src={img4} alt="" />
      </div>
      <ul className="border-2 mb-10 mt-12 border-black m-8"></ul>
    </div>
  );
};

export default Offer;