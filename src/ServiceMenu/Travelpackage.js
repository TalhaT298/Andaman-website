import React from "react";
import travelpackage from "../Data/TravelPackage-Section/travelpackage";
import TravelPackageCover from "./TravelPackage/TravelPackageCover";

const Travelpackage = () => {
  const travelPackageData = travelpackage.map((travelPackage, index) => {
    return <TravelPackageCover key={index} {...travelPackage} />;
  });
  return (
    <div className="flex flex-wrap justify-center items-center m-auto gap-y-[68px] gap-x-[63px] p-auto font-normal text-lg font-montserrat py-10">
      {travelPackageData}
    </div>
  );
};

export default Travelpackage;
