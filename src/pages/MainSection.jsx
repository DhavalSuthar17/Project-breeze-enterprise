import React from "react";
import img1 from "../asset/Dhaval file/photo/MainSectionImg.png";
import CTAbtn from "../component/common/CTAbtn";

const MainSection = () => {
  return (
    <div className="bg-white flex xl:flex-row flex-col  lg:flex-row justify-between items-center  lg:min-h-[90vh] xl:min-h-[90vh]  w-11/12 mx-auto ">
      <div>
        <div className="font-inter mx-8">
          <p className="xl:text-[100px] lg:text-[95px] text-[50px] font-semibold text-[#D82782]">
            Breeze
          </p>
          <p className="xl:text-[100px] lg:text-[95px] text-[50px]  font-semibold text-[#46BBCD] xl:mt-[-40px] lg:mt-[-40px] mt-[-25px]">
            Enterprise
          </p>
          <p className=" xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-semibold text-amber-700">
            Your Source for Pharmaceutical Raw Materials
          </p>
        </div>
        <div className="mx-6 my-4 ">
          <CTAbtn linkto="/products">Explore</CTAbtn>
        </div>
      </div>
      <div className="">
        <img
          src={img1}
          alt="Home-Section-Img"
          className="lg:w-[750px] xl:w-[750px]"
        />
      </div>
    </div>
  );
};

export default MainSection;
