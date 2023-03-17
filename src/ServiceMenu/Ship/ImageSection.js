import React from "react";

const ImageSection = ({ handleClick }) => {
  return (
    <>
      <div className="flex flex-row lg:flex-col mt-10 pt-6 rounded-lg shadow-2xl bg-white">
        <div
          className="flex-1 text-center p-4 relative cursor-pointer"
          onClick={() => handleClick("mainland")}
        >
          <img
            className="w-full h-[28rem] lg:h-[25rem] md:h-[20rem] sm:h-[16rem] xs:w-full xs:h-[15.5 rem] "
         
            src="https://images7.alphacoders.com/560/560824.jpg"
            alt="Left"
          />
          <p
            className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-2xl  font-bold "
            style={{ fontFamily: "Glook" }}
          >
            Mainland Freight
          </p>
        </div>
        <div
          className="flex-1 text-center p-4 relative cursor-pointer"
          onClick={() => handleClick("inland")}
        >
          <img
            className="w-full h-[28rem] lg:h-[25rem] md:h-[20rem] sm:h-[16rem] xs:w-full xs:h-full"
            src="https://wallpaperaccess.com/full/1921731.jpg"
            // src="https://c4.wallpaperflare.com/wallpaper/755/228/962/sea-trees-nature-rocks-wallpaper-preview.jpg"
            alt="Right"
          />
          <p
            className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold sm:text-2xl"
            style={{ fontFamily: "Glook" }}
          >
            Inland Freight
          </p>
        </div>
        <div className="flex flex-col gap-y-3"></div>
      </div>
    </>
  );
};

export default ImageSection;
