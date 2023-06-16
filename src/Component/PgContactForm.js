import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import React, { useRef, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navforwithout from "../Navforwithout";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const form = useRef();
  const location = useLocation();
  const { state } = location;
  const { singleData, searchState, payLink, hotelUrl } = state;
  console.log("🚀 ~ file: PgContactForm.js:15 ~ ContactForm ~ state:", state);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Submit");
  //   let result = await response.json();
  //   alert(result.status);
  // };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const formValues = {};
    const formRef = form.current;

    for (let name in formRef.elements) {
      const element = formRef.elements[name];
      if (element.name) {
        formValues[element.name] = element.value;
      }
    }
    setStatus("Submit");
    navigate(payLink, { state: { singleData, formValues, hotelUrl } });
    // await emailjs
    //   .sendForm(
    //     "service_j38h615",
    //     "template_im7qgz9",
    //     form.current,
    //     "vVfAy9O62laKEC_Em"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       //       // alert(
    //       //       //   "Thank you for taking your time. Sublime Island will reach out to you in 2-3 hours or as soon as possible 😁✌🏻"
    //       //       // );

    //       const formValues = {};
    //       const formRef = form.current;

    //       for (let name in formRef.elements) {
    //         const element = formRef.elements[name];
    //         if (element.name) {
    //           formValues[element.name] = element.value;
    //         }
    //       }
    //       setStatus("Submit");
    //       navigate("/hotel-payment", { state: { singleData, formValues } });
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert(error.text);
    //       setStatus("Submit");
    //     }
    //   );
  };

  const date = new Date(searchState?.checkInDate || searchState?.checkOutDate);

  // Extract the date and time components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
  const timeDiff =
    searchState?.checkOutDate.getTime() - searchState?.checkInDate.getTime();

  // Convert milliseconds to days (change the conversion factor as needed)
  const daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <>
      <Navforwithout />
      <div className="h-full w-auto">
        <div className="font-montserrat">
          {/* -------------------Navigation---------------- */}

          <div className=" flex  items-center mt-5 ml-[5%] ms:mb-2 mb-[30px] ms:gap-0.5 gap-2">
            {/* {hotelUrl?.hotel ? (
              <>
                <a href={hotelUrl?.hotel} className="text-[#FF8682] ms:text-sm">
                  Paying Guest
                </a>
              </>
            ) : (
              <>
                <a href={"/Paying-Guest"} className="text-[#FF8682] ms:text-sm">
                  Paying Guest
                </a>
              </>
            )} */}
            <a
              href={hotelUrl?.hotel || "/Paying-Guest"}
              className="text-[#FF8682] ms:text-sm"
            >
              {hotelUrl ? "Hotels" : "Paying Guest"}
            </a>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <Link
              to={hotelUrl?.details || "/pg-details"}
              state={{ id: singleData?.link, hotelId: singleData?.id }}
              className="text-[#FF8682] ms:text-sm"
            >
              {singleData.title}
            </Link>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <span className=" ms:text-sm">Contact Form</span>
          </div>

          <div className="w-[90%] flex md:flex-col justify-center items-stretch mx-auto my-6 shadow-xl rounded-lg">
            <form
              ref={form}
              className="w-[50%] md:w-full lg:w-[55%] xl:w-[50%] bg-white overflow-hidden border border-gray-300 
                    p-12 md:p-6 lg:p-8 "
              onSubmit={handleSubmit}
            >
              <h1 className="text-[#699c78] text-[26px] md:text-2xl md:text-center font-montserrat font-bold mb-6 md:mb-3 tracking-wide">
                Book your
                {payLink === "/pg-payment" ? (
                  <span> PG</span>
                ) : (
                  <span> Hotel</span>
                )}
              </h1>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={singleData?.user_name}
                  placeholder="Name"
                  className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={singleData?.user_email}
                  placeholder="Email"
                  className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <input
                  type="number"
                  id="phone"
                  name="user_phone"
                  value={singleData?.user_phone}
                  placeholder="Phone number"
                  className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <input
                  type="text"
                  id="pg"
                  name="user_pg_name"
                  value={singleData?.title}
                  placeholder="Pg name"
                  className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                  disabled
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <input
                  type="text"
                  id="destination"
                  name="user_destination_location"
                  value={singleData?.location}
                  disabled
                  placeholder="Destination location"
                  className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              {searchState?.checkInDate ? (
                <>
                  <fieldset className="flex flex-col gap-1 mt-5 border border-gray-300 focus:border-2 focus:border-slate-400">
                    <legend className="">No. of Room</legend>

                    <input
                      type="number"
                      id="room"
                      name="room"
                      value={
                        singleData?.room || searchState?.travellerInfo?.room
                      }
                      placeholder="No. of Room"
                      className="h-[45px] outline-none px-4 rounded-md"
                      required
                    />
                  </fieldset>
                  <fieldset className="flex flex-col gap-1 mt-5 border border-gray-300 focus:border-2 focus:border-slate-400">
                    <legend className="">No. of People</legend>

                    <input
                      type="number"
                      id="people"
                      name="user_people"
                      value={
                        singleData?.user_people ||
                        searchState?.travellerInfo.adult +
                          searchState?.travellerInfo?.children +
                          searchState?.travellerInfo?.infant ||
                        null
                      }
                      placeholder="No. of People"
                      className="h-[45px] outline-none px-4 rounded-md"
                      required
                    />
                  </fieldset>{" "}
                  <div className="flex flex-col gap-1 mt-5">
                    <input
                      type="datetime-local"
                      id="arrival"
                      name="user_arrival"
                      value={formattedDate}
                      placeholder="Expected Arrival"
                      className="h-[45px] font-thin outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                      required
                    />
                  </div>
                  <fieldset className="flex flex-col gap-1 mt-5">
                    <legend>No. of Days Staying</legend>
                    <input
                      type="number"
                      id="staying"
                      name="staying"
                      value={singleData?.staying || daysDiff}
                      placeholder="No. of Days Staying"
                      className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                      required
                    />
                  </fieldset>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-1 mt-5">
                    <input
                      type="number"
                      id="room"
                      name="room"
                      value={singleData?.room}
                      placeholder="No. of Room"
                      className="h-[45px] outline-none px-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-5 ">
                    <input
                      type="number"
                      id="people"
                      name="user_people"
                      value={
                        singleData?.user_people ||
                        searchState?.travellerInfo.adult +
                          searchState?.travellerInfo?.children +
                          searchState?.travellerInfo?.infant ||
                        null
                      }
                      placeholder="No. of People"
                      className="h-[45px] outline-none px-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                      required
                    />
                  </div>{" "}
                  <div className="flex flex-col gap-1 mt-5">
                    <input
                      type="datetime-local"
                      id="arrival"
                      name="user_arrival"
                      value={singleData?.user_arrival}
                      placeholder="Expected Arrival"
                      className="h-[45px] font-thin outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-5">
                    <input
                      type="number"
                      id="staying"
                      name="staying"
                      value={singleData?.staying}
                      placeholder="No. of Days Staying"
                      className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                      required
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col gap-1 mt-5">
                <span className="font-bold ml-3">* optional *</span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="h-[90px] outline-none p-3 rounded-md resize-none border border-gray-300 focus:border-2 focus:border-slate-400"
                />
              </div>
              <button
                type="submit"
                className="bg-[#408c57] shadow-2xl hover:bg-[#51795d]
                  text-white text-[21px] md:text-[16px] tracking-wider font-montserrat font-semibold rounded-full
                  p-2 w-full mt-6"
              >
                {status}
              </button>
            </form>

            <div className="w-[50%] md:w-full lg:w-[45%] xl:w-[50%] text-center  bg-gradient-to-tl from-[#408c57] to-[#91c4a0] text-white border-l-0 border border-gray-300 ">
              <h1 className="mt-12 md:mt-8 text-[26px] md:text-2xl  font-montserrat font-semibold">
                Call us
              </h1>
              <p className="bg-white text-black w-[80%] mx-auto py-2 rounded-lg mt-4">
                <CallIcon className="text-white bg-[#699c78] rounded-2xl p-1 mr-1" />{" "}
                +918787883421
              </p>
              <p className="bg-white text-black w-[80%] ml:w-[90%] md:w-[80%] mx-auto py-2 rounded-lg mt-4 mb-12">
                <EmailIcon className="text-white bg-[#699c78] rounded-2xl p-1 mr-1 " />{" "}
                travel@sublimeislands.com
              </p>
              <p className="bg-white text-base font-semibold font-montserrat px-2 text-slate-900 w-[80%] ml:w-[90%] md:w-[80%] mx-auto py-3 rounded-lg mt-10 md:mt-4 mb-12">
                Thank you for submitting your details. Sublime Island will reach
                out to you in 2-3 hours or as soon as possible 😁✌🏻
              </p>
              <LazyLoadImage
                src={singleData?.imgSrc[2]}
                className="px-5 rounded-md w-full h-fit object-cover md:mb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
