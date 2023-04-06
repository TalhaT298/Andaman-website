import React, { lazy, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Navforwithout = lazy(() => import('../Navforwithout'))

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const form = useRef();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    await emailjs.sendForm('service_j38h615', 'template_im7qgz9', form.current, 'vVfAy9O62laKEC_Em')
      .then((result) => {
          console.log(result.text);
          alert("Thanks for taking the time. The Sublime Island team will contact you soon.")
      }, (error) => {
          console.log(error.text);
          alert(error.text)
      });

    setStatus("Submit");
  };

  return (
    <>
    <Navforwithout />
    <div className="font-Nunito_Sans ">
    
    <div className="w-[62%] flex md:flex-col justify-center items-stretch mx-auto my-6 shadow-xl rounded-lg">
    <form ref={form}
      className="w-[50%] md:w-full lg:w-[55%] xl:w-[50%] bg-white overflow-hidden border border-gray-300 
                    p-12 md:p-6 lg:p-8 " 
      onSubmit={handleSubmit}>
      <h1 className="text-[#699c78] text-[26px] md:text-2xl font-bold mb-6 md:mb-3 tracking-wide">Contact Us</h1>
      <div className="flex flex-col gap-1">
        <input type="text" id="name" name="user_name" placeholder="Name"
          className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400" 
          required 
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <input type="email" id="email" name="user_email" placeholder="Email"
         className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400" 
         required         
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <input type="number" id="phone" name="user_phone" placeholder="Phone number"
         className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400" 
         required         
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <input type="datetime-local" id="arrival" name="user_arrival" placeholder="Expected Arrival"
         className="h-[45px] font-thin outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400" 
         required         
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <textarea id="message" name="message" placeholder="Message"
          className="h-[90px] outline-none p-3 rounded-md resize-none border border-gray-300 focus:border-2 focus:border-slate-400" 
          required
        />
      </div>
      <button type="submit" 
              className="bg-[#408c57] shadow-2xl hover:bg-[#51795d]
                  text-white text-[18px] md:text-[16px] tracking-wider font-bold rounded-full
                  p-2 w-full mt-6">
      {status}
      </button>
    </form>

    <div className="w-[50%] md:w-full lg:w-[45%] xl:w-[50%] text-center  bg-gradient-to-tl from-[#408c57] to-[#91c4a0] text-white border-l-0 border border-gray-300 ">
      <h1 className="mt-12 md:mt-8 text-[26px] md:text-2xl font-semibold">Call us</h1>
      <p className="bg-white text-black w-[80%] mx-auto py-2 rounded-lg mt-4">
        <CallIcon className="text-white bg-[#699c78] rounded-2xl p-1 mr-1" /> +918787883421 
      </p>
      <p className="bg-white text-black w-[80%] mx-auto py-2 rounded-lg mt-4 mb-12">
        <EmailIcon className="text-white bg-[#699c78] rounded-2xl p-1 mr-1"/> travel@sublimeislands.com
      </p>
    </div>
    </div>

    </div>
    </>
  );
};

export default ContactForm;