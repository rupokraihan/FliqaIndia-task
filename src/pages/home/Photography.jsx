import React from "react";
import img1 from "../../assets/photography/img-1.png";
import img2 from "../../assets/photography/img-2.png";
import img3 from "../../assets/photography/img-3.png";

const Photography = () => {
  return (
    <div className="mt-10 mx-4 relative shadow-xl">
      <img className="w-full" src={img1} alt="" />
      <img
        src={img2}
        alt=""
        className="absolute top-1/2 left-[1400px] transform -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={img3}
        alt=""
        className="absolute top-1/2 left-[180px] transform translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Photography;
