import React from "react";
import Card from "./card/Card";
import { data as InlandShips } from "./Data/InlandFerries";

const Inland = React.forwardRef((props, ref) => {
  const InlandShipsRender = InlandShips.map(
    ({ id, title, image, description }) => (
      <Card
        key={id}
        id={id}
        image={image}
        title={title}
        description={description}
      />
    )
  );

  return (
    <div id="inland" className="" ref={ref}>
      <h1
        className={` text-5xl sm:text-3xl mb-20 font-bold mt-[5rem] sm:mr-[-1rem] lg:mb-12 text-center`}
        style={{ fontFamily: "Glook" }}
      >
        Inland Ferries
      </h1>
      <div className="grid grid-cols-3   lg:grid-cols-2 md:grid-cols-1 gap-4">
        {InlandShipsRender}
      </div>
    </div>
  );
});

export default Inland;
