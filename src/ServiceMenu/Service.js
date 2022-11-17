import React from "react";

import CardHandler from "./travelpackage";
import { Grow } from "@material-ui/core";
import datas from "../Data/CardData";

const cardObject = datas.map(function(data) {
  return (
    <CardHandler
      key={data.id}
      id={data.id}
      num={data.num}
      name={data.name}
      duration={data.duration}
      description={data.description}
      fullDescription1={data.fullDescription1}
      fullDescription2={data.fullDescription2}
      fullDescription3={data.fullDescription3}
      fullDescription4={data.fullDescription4}
      fullDescription5={data.fullDescription5}
      fullDescription6={data.fullDescription6}
      fullDescription7={data.fullDescription7}
      fullDescription8={data.fullDescription8}
      imageLink={data.imageLink}
    />
  );
});

const Service = () => {
  return (
    <Grow in>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1 style={{ backgroundColor:"rgba(24, 24, 23, 0.219)",color:"whitesmoke"}}>
                <center>Explore Our best Packages</center>
              </h1>
              <h1>{cardObject}</h1>
            </div>
          </div>
        </div>
      </div>
    </Grow>
  );
};

export default Service;
