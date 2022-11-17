import React from "react";

import CardHandler from "./travelpackage";
import { Grow } from "@material-ui/core";
import { Container} from "@nextui-org/react";
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
      <Container fluid>
        <center><h3>Explore Our best tour Packages</h3></center>
        <p>{cardObject}</p>
      </Container>
    </Grow>
  );
};

export default Service;
