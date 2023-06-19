import React from "react";
import { BsFlagFill } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useNavigate } from "react-router-dom";
import img1 from "../images/bad (1).png";
import pgIcon1 from "../images/pg-icon1.png";
import pgIcon2 from "../images/pg-icon2.png";
import pgIcon3 from "../images/pg-icon3.png";
import pgIcon4 from "../images/pg-icon4.png";
import pgIcon5 from "../images/pg-icon5.png";
import pgIcon6 from "../images/pg-icon6.png";
import pgIcon7 from "../images/pg-icon7.png";
import pgIcon8 from "../images/pg-icon8.png";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import BookButton from "./BookButton";
import TitleLocation from "./TitleLocation";
const CardCompo = ({
  singleData,
  searchState,
  payLink,
  linkUrl,
  hotelId,
  hotelUrl,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(linkUrl, {
      state: { singleData, hotelId, searchState, linkUrl, hotelUrl, payLink },
    });
  };

  return (
    <>
      {/* -----------------Title & Price--------------- */}
      <TitleLocation singleData={singleData} />
      {/*------------------ Room Images---------------- */}
      <PhotoProvider>
        <div className=" grid grid-cols-2 gap-2  rounded-xl ms:mt-5 mt-8 overflow-hidden">
          <PhotoView src={singleData?.imgSrc[2]}>
            <img
              src={singleData?.imgSrc[2]}
              alt="Paying-Guest"
              className="col-span-1 w-full h-full object-cover cursor-pointer"
              loading="lazy"
            />
          </PhotoView>
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-2 ">
              {singleData?.imgSrc.slice(0, 4).map((pic, i) => (
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
      <hr className="w-full ms:hidden my-16 md:my-10  bg-[#112211]/25" />
      {/*------------- Available Room --------- */}
      <h2 className="text-[#112211] ms:text-lg ms:mt-10 text-xl mb-8 ms:mb-4 font-bold">
        Available Room
      </h2>
      {[...Array(3)].map((_, i, array) => (
        <div
          key={i}
          className={`flex airbnbml:flex-col w-full sm:max-w-md airbnbml:gap-2 justify-between airbnbml:items-start items-center pb-4 mb-4 ${
            i === array.length - 1 ? "border-none" : "border-b-[0.5px]"
          }`}
        >
          <div className="flex justify-between ms:text-sm gap-4 items-center">
            <img src={img1} alt="bad" loading="lazy" />
            <p>Superior room - 1 double bed or 2 twin beds</p>
          </div>

          <div className="flex justify-between airbnbml:w-full airbnbml:gap-1 gap-[4.17vw] items-center">
            <div className="text-[#27273F] ms:text-lg text-[24px] font-medium">
              ₹{singleData?.price}
              <sub className="text-md">/night</sub>
            </div>
            <BookButton Click={handleClick}>Book Now</BookButton>
          </div>
        </div>
      ))}

      {/* <div className="flex justify-between gap-2 items-center py-4">
        <div className="flex justify-between gap-4 items-center">
          <img src={img1} alt="bad1" />
          <p>Superior room - 1 double bed or 2 twin beds</p>
        </div>

        <div className="flex justify-between airbnbml:flex-col airbnbml:gap-1 gap-[4.17vw] items-center">
          <div className="text-[#27273F] text-[24px] font-[600]">
            ₹{singleData?.price}
            <sub className="text-md">/night</sub>
          </div>
          <BookButton onClick={handleClick}>Book Now</BookButton>
        </div>
      </div> */}
      <hr className="my-20 md:my-10 ms:my-5" />
      {/*------------------ Room Facilities---------------- */}
      <div className="">
        <h2 className="font-bold ms:text-lg text-xl">Amenities</h2>
        <div className="w-full max-w-[720px]  mt-8">
          <div className="flex justify-between mb-7">
            <div
              className="
          grid gap-y-7
        "
            >
              <div className="flex">
                <img src={pgIcon1} alt="icon" />
                <p className="ml-2 ms:text-sm">Outdoor pool</p>
              </div>
              <div className="flex">
                <img src={pgIcon1} alt="icon" />
                <p className="ml-2 ms:text-sm">Indoor pool</p>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <img src={pgIcon4} alt="icon" />
                  <p className="ml-2 whitespace-nowrap ms:text-sm">
                    Spa and wellness center
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <img src={pgIcon6} alt="icon" />
                  <p className="ml-2 whitespace-nowrap ms:text-sm">
                    Restaurant
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img src={pgIcon8} className="w-[20px] h-[15px]" alt="icon" />
                  <p className="ml-2 whitespace-nowrap ms:text-sm">
                    Room service
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-7">
              <div className="flex items-center">
                <img
                  src={pgIcon2}
                  alt="icon"
                  className="w-[22.4px] h-[11.2px]"
                />
                <p className="ml-2 ms:text-sm">Outdoor pool</p>
              </div>
              <div className="flex items-center">
                <img src={pgIcon3} alt="icon" className="w-[15px] h-[18px]" />
                <p className="ml-2 ms:text-sm">Bar/Lounge</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img src={pgIcon5} alt="icon" className="w-6 h-6" />
                  <p className="ml-2 ms:text-sm">Free Wi-Fi</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={pgIcon7}
                    alt="icon"
                    className="w-[19.5px] h-[17.25]"
                  />
                  <p className="ml-2 ms:text-sm">Tea/coffee machine</p>
                </div>
              </div>
              <div className="flex justify-between ms:text-sm">
                <p className="text-[#FF8682]">+24 more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-16 md:my-10 ms:my-5" />
      {/* ----------------- Users Review--------------- */}
      <div className="mt-3">
        <div className="flex justify-between">
          <h3 className="font-bold ms:text-lg text-xl">Reviews</h3>
          {/* <BookButton>Give your review</BookButton> */}
        </div>

        {/*------------- Review Start------------ */}
        {/* -----Review 1---- */}
        <div className="flex gap-4 py-6  border-b-[0.5px]">
          <img
            src={user1}
            alt="user"
            className="rounded-full h-[45px] max-w-[45px] w-full overflow-hidden"
          />
          <article>
            <div className="flex justify-between w-auto">
              <div>
                <span className="font-semibold">5.0 Amazing |</span>{" "}
                <span>Omar Siphron</span>
              </div>
              <BsFlagFill className="fill-[#4c584c]" />
            </div>
            <p className="text-justify ms:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              enim harum ipsa labore voluptatem sit laborum voluptatibus,
              reiciendis dignissimos reprehenderit provident exercitationem fuga
              omnis architecto iure eaque modi.
            </p>
          </article>
        </div>
        {/* -----Review 2---- */}
        <div className="flex gap-4 py-6  border-b-[0.5px]">
          <img
            src={user2}
            alt="user"
            className="rounded-full h-[45px] max-w-[45px] w-full overflow-hidden"
          />
          <article>
            <div className="flex justify-between w-auto">
              <div>
                <span className="font-semibold">5.0 Amazing |</span>{" "}
                <span>Cristofer Ekstrom Bothman</span>
              </div>
              <BsFlagFill className="fill-[#4c584c]" />
            </div>
            <p className="ms:text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              enim harum ipsa labore voluptatem sit laborum voluptatibus,
              reiciendis dignissimos reprehenderit provident exercitationem fuga
              omnis architecto iure eaque modi.
            </p>
          </article>
        </div>
        {/* -----Review 3---- */}
        <div className="flex gap-4 py-6  border-b-[0.5px]">
          <img
            src={user3}
            alt="user"
            className="rounded-full h-[45px] max-w-[45px] w-full overflow-hidden"
          />
          <article>
            <div className="flex justify-between w-auto">
              <div>
                <span className="font-semibold">5.0 Amazing |</span>{" "}
                <span>Kaiya Lubin</span>
              </div>
              <BsFlagFill className="fill-[#4c584c]" />
            </div>
            <p className="ms:text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              enim harum ipsa labore voluptatem sit laborum voluptatibus,
              reiciendis dignissimos reprehenderit provident exercitationem fuga
              omnis architecto iure eaque modi.
            </p>
          </article>
        </div>
        {/* -----Review 4---- */}
        <div className="flex gap-4 py-6  border-b-[0.5px]">
          <img
            src={user4}
            alt="user"
            className="rounded-full h-[45px] max-w-[45px] w-full overflow-hidden"
          />
          <article>
            <div className="flex justify-between w-auto">
              <div>
                <span className="font-semibold">5.0 Amazing |</span>{" "}
                <span>Erin Septimus</span>
              </div>
              <BsFlagFill className="fill-[#4c584c]" />
            </div>
            <p className="ms:text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
              enim harum ipsa labore voluptatem sit laborum voluptatibus,
              reiciendis dignissimos reprehenderit provident exercitationem fuga
              omnis architecto iure eaque modi.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default CardCompo;
