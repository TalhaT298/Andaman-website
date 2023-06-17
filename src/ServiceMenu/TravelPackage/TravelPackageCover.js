import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import vector1 from "../../images/package/Vector-1.svg";
import vector2 from "../../images/package/Vector-2.svg";
import vector3 from "../../images/package/Vector-3.svg";
import vector from "../../images/package/Vector.svg";
// import TravelPackagePage from './TravelPackagePage';
import {
  Button,
  Paper,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import Modal from "react-modal";

import { Link } from "react-router-dom";

const TravelPackageCover = (props) => {
  //getting no of days
  let packageLength = 0;
  for (let key in props) {
    if (key === `fullDescription${packageLength + 1}`) packageLength++;
  }

  return (
    <Link
      to={"/package-details"}
      state={{ props }}
      className="bg-white rounded-lg  p-4 flex flex-col  w-[342px] shadow-[0px_4px_16px_rgba(158,158,158,0.25)]"
    >
      <div className="max-w-80 items:center">
        <LazyLoadImage
          src={props.imageLink}
          alt={props.name}
          className="flex rounded-md w-[310px] h-52 transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform"
        />
      </div>
      <div className="flex flex-col pt-4">
        <p
          className={`text-2xl text-start text-slate-900 ${
            props.name.length > 20 && "text-lg"
          }`}
        >
          {props.name}
        </p>
        <div className="flex justify-between">
          <p className="">
            {props.duration.replace(/\//g, "").replace(/\s+/g, " ")}
          </p>
        </div>
        <div className="mt-7 flex justify-between items-end">
          <div className="grid justify-items-center gap-y-3">
            <img src={vector} alt="vector" className="border-[#b7b7b7]" />
            <p className="text-xs whitespace-nowrap">2 Flights</p>
          </div>
          <div className="grid justify-items-center gap-y-3">
            <img src={vector1} alt="vector1" className="border-[#b7b7b7]" />
            <p className="text-xs whitespace-nowrap">1 Hotel</p>
          </div>
          <div className="grid justify-items-center gap-y-3">
            <img src={vector2} alt="vector2" className="border-[#b7b7b7]" />
            <p className="text-xs whitespace-nowrap">2 Transfers</p>
          </div>
          <div className="grid justify-items-center gap-y-3">
            <img src={vector3} alt="vector3" className="border-[#b7b7b7]" />
            <p className="text-xs whitespace-nowrap">4 Activities</p>
          </div>
        </div>
        <ul className="list-disc list-inside mt-6 text-sm text-black/50">
          <li>Tour combo with return airport transfer</li>
          <li>City Tour</li>
          <li>Curious Corner</li>
        </ul>
        <div className="mt-7 flex gap-4">
          <p className="line-through">₹88,952</p>
          <h1 className="font-bold text-2xl">
            ₹88,952{" "}
            <sub className="font-normal text-xs -ml-1 whitespace-nowrap">
              per person
            </sub>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default TravelPackageCover;
