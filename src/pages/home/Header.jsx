import React from "react";
import banner from "../../assets/banner/banner.png";
import img1 from "../../assets/header-section/img-1.png";
import img2 from "../../assets/header-section/img-2.png";
import img3 from "../../assets/header-section/img-3.png";
import img4 from "../../assets/header-section/img-4.png";

const Header = () => {
  return (
    <section>
      <img className="w-full" src={banner} alt="" />

      <div>
        <h1 className="text-center text-6xl font-jura tracking-wider mt-8 font-bold ">
          India’s Leading Creative Platform
        </h1>
        <p className="text-center text-3xl text-[#4C696D] font-josefinsans font-thin mt-3 tracking-wider ">
          Experience hassle-free bookings. Trusted by 2500+ Customers
        </p>
        <div className="mt-6 flex max-w-screen-lg mx-auto">
          <div className="relative w-full">
            <input
              className="w-full input input-bordered text-black rounded-full placeholder-gray-700 pr-20"
              style={{ borderColor: "black" }}
            />
            <div className="flex items-center justify-center absolute left-0 right-0 top-0 bottom-0">
              <span className="text-gray-500 josefinslab text-2xl tracking-wider">
                Search service, blog, and many more…
              </span>
            </div>
            <button className="absolute right-0 top-0 h-full px-20 py-2 border-0  bg-[#221010] text-white font-bold tracking-wider rounded-full">
              Search
            </button>
          </div>
        </div>

        <div className="flex justify-between mx-12 mt-14">
          <div className="flex gap-6 items-center">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <h4 className="font-bold text-2xl">Verified Reviews</h4>
              <p>For verified reviewers</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <h4 className="font-bold text-2xl">Top Articles</h4>
              <p>Helps you decide</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <h4 className="font-bold text-2xl">Write Share Win Contest</h4>
              <p>Earn cash for reviews</p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <img src={img4} alt="" />
            </div>
            <div>
              <h4 className="font-bold text-2xl">MouthShut for Brands</h4>
              <p>Request a Demo</p>
            </div>
          </div>
        </div>
        <ul className="border-2 mb-10 mt-12 border-black m-32"></ul>
      </div>
    </section>
  );
};

export default Header;