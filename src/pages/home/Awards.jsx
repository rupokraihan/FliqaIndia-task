import React from 'react';
import img1 from "../../assets/awards/img-1.png"
import img2 from "../../assets/awards/img-2.png"

const Awards = () => {
  return (
    <div className="mt-16 bg-[#DDF8F3] shadow-xl rounded-lg h-[402px] mx-10 ">
      <div className="flex justify-center pt-20  gap-28">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Awards;