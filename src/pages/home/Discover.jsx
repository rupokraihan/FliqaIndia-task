import React from "react";
import discoverimg from "../../assets/discover/discover.png";
import img1 from "../../assets/discover/img-1.png";
import img2 from "../../assets/discover/img-2.png";
import img3 from "../../assets/discover/img-3.png";
import img4 from "../../assets/discover/img-4.png";
import line from "../../assets/discover/Line.png";

const Discover = () => {
  return (
    <div className="mt-16 relative">
      <img className="w-full h-[402px]" src={discoverimg} alt="" />

      <div className="flex ">
        <img
          className="absolute top-[121px] left-[853px] border-8 border-black"
          src={img1}
          alt=""
        />
        <img
          className="absolute top-[57px] left-[1155px] border-8 border-black"
          src={img2}
          alt=""
        />
        <img
          className="absolute top-[125px] left-[1447px] border-8 border-black"
          src={img3}
          alt=""
        />
        <img
          className="absolute top-[92px] right-0 border-8 border-black"
          src={img4}
          alt=""
        />

        <img
          className="absolute top-0 h-32 w-0.5 left-[960px]  "
          src={line}
          alt=""
        />
        <img
          className="absolute top-0 h-16 w-0.5 left-[1262px]  "
          src={line}
          alt=""
        />
        <img
          className="absolute top-0 h-32 w-0.5 left-[1554px]  "
          src={line}
          alt=""
        />
        <img
          className="absolute top-0 right-[107px] h-24 w-0.5  "
          src={line}
          alt=""
        />
      </div>
      <h2 className="text-center font-bold tracking-wider text-4xl mt-12">
        Popular: Website Design Logo Design Brochure Label Design
      </h2>
      <ul className="border-2 mb-10 mt-12 border-black m-10"></ul>
    </div>
  );
};

export default Discover;
