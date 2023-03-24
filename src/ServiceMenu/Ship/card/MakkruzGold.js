import React from "react";
import { Link } from "react-router-dom";

const MakkruzGold = () => {
  return (
    <Link to={"/MakkruzGold"} target="_blank" rel="noreferrer">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl m-4" >
      <img
        src="https://tourtravelandaman.com/images/Makruzz-Gold.jpg"
        alt=''
        className="object-center h-[15rem] w-[25rem] transform hover:scale-110 transition duration-500 ease-in-out"
      />
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2 card-title">Makkruz Gold</h2>
        <p className="text-gray-600 text-base">Updated 3 minutes ago</p>
      </div>
    </div>
    </Link>
  );
};
export default MakkruzGold;