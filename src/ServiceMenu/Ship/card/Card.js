import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, id }) => {
  

  return (
    <Link to={`SingleInland/${id}`} target="_blank" rel="noreferrer">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl m-4" >
      <img
        src={image}
        alt={title}
        className="object-center h-[15rem] w-[25rem] transform hover:scale-110 transition duration-500 ease-in-out"
      />
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2 card-title">{title}</h2>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
    </Link>
  );
};
export default Card;