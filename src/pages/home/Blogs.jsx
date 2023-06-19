import React from "react";
import img1 from "../../assets/blogs/img-1.png";
import img2 from "../../assets/blogs/img-2.png";
import img3 from "../../assets/blogs/img-3.png";
import img4 from "../../assets/blogs/img-4.png";
import img5 from "../../assets/blogs/img-5.png";

const Blogs = () => {
  return (
    <div className="px-10 mt-10 bg-[#DDF8F3] h-[456px]">
      <div className="pt-8">
        <h1 className="text-4xl text-[#4C696D] font-bold tracking-wider">
          Our Blogs
        </h1>
        <p className="text-xl text-[#0C0C0C] tracking-wider">
          Check out our Latest Blog
        </p>
      </div>
      <div className="flex mt-6">
        <div className="flex">
          <div className="relative">
            <img className="h-[290px]" src={img1} alt="" />
            <div className="absolute inset-0 bg-black h-[280px] w-[427px] rounded-lg bg-opacity-70 flex items-center justify-center">
              <div className="text-white text-3xl font-thin">
                Featured on: Sep 15, 2021 <br />
                <span className="text-5xl">
                  Wedding <br /> Photography <br /> at Goa
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img className="h-[290px]" src={img2} alt="" />
            <div className="absolute inset-0 bg-black h-[280px] rounded-lg w-[427px] bg-opacity-70 flex items-center justify-center">
              <div className="text-white text-3xl font-thin">
                Featured on: Sep 15, 2021 <br />
                <span className="text-5xl">
                  Photography: <br /> Expectations <br /> vs. Reality
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-20 flex items-center">
          <div>
            <div className="flex justify-between mb-4">
              <h6 className="text-2xl">Trending Now</h6>
              <p className="">View All</p>
            </div>
            <div>
              <div className="flex gap-4">
                <div>
                  <img className="w-[100px] " src={img3} alt="" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    Creative Industries are on the verge of depletion due to
                    COVID-19
                  </h5>
                  <p>
                    In a period where many industries remain highly unclear,
                    others <br /> want to grasp how COVID-19 impact
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <img className="w-[100px] " src={img4} alt="" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    Photography: Expectations vs. Reality
                  </h5>
                  <p>
                    Most of the time without any hands-on experience in
                    photography, <br /> professional and advanced photography
                    actually
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <img className="w-[100px] " src={img5} alt="" />
                </div>
                <div>
                  <h5 className="text-xl font-semibold">
                    Wedding Photography at Goa Wedding Photography in Goa
                  </h5>
                  <p>
                    If not, every couple when they make their list of
                    Pre-wedding shoot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
