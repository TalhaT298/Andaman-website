import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const PhotoCompo = ({ singleData }) => {
  //getting no of days
  const imgSrc = [
    singleData?.imageLink1,
    singleData?.imageLink2,
    singleData?.imageLink3,
    singleData?.imageLink4,
  ];
  return (
    <div>
      {" "}
      <PhotoProvider>
        <div className=" grid grid-cols-2 gap-2  rounded-xl ms:mt-5 mt-8 overflow-hidden">
          <PhotoView src={singleData?.imageLink}>
            <img
              src={singleData?.imageLink}
              alt="Paying-Guest"
              className="col-span-1 w-full h-full object-cover cursor-pointer"
              loading="lazy"
            />
          </PhotoView>
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-2 ">
              {imgSrc.slice(0, 4).map((pic, i) => (
                <PhotoView key={i} src={pic}>
                  <img
                    key={i}
                    tabIndex={i}
                    src={pic}
                    alt="Paying-Guest"
                    className="w-full max-h-[16.67vw] h-[100vh] object-cover cursor-pointer"
                    loading="lazy"
                  />
                </PhotoView>
              ))}
            </div>
          </div>
        </div>{" "}
      </PhotoProvider>
    </div>
  );
};

export default PhotoCompo;
