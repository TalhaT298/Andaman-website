import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

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
    <div className="h-[100vh] w-full flex justify-center items-center font-Nunito_Sans ">
    
    <form ref={form}
      className="w-[30%] sm:w-[60%] lg:w-[50%] xl:w-[40%] bg-white rounded-lg overflow-hidden shadow-xl border border-gray-300 p-10 md:p-6 lg:p-8" 
      onSubmit={handleSubmit}>
      <h1 className="text-indigo-600 text-[26px] md:text-2xl font-bold mb-6 md:mb-3 tracking-wide">Contact Us</h1>
      <div className="flex flex-col gap-1">
        <input type="text" id="name" name="user_name" placeholder="Name"
          className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-[rgba(0, 206, 158, 1)]" 
          required 
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <input type="email" id="email" name="user_email" placeholder="Email"
         className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-[rgba(0, 206, 158, 1)]" 
         required         
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <input type="number" id="phone" name="user_phone" placeholder="Phone number"
         className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-[rgba(0, 206, 158, 1)]" 
         required         
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <input type="datetime-local" id="arrival" name="user_arrival" placeholder="Expected Arrival"
         className="h-[45px] font-thin outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-[rgba(0, 206, 158, 1)]" 
         required         
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <textarea id="message" name="message" placeholder="Message"
          className="h-[90px] outline-none p-3 rounded-md resize-none border border-gray-300 focus:border-2 focus:border-[rgba(0, 206, 158, 1)]" 
          required
        />
      </div>
      <button type="submit" 
              className="bg-indigo-600 shadow-2xl hover:bg-indigo-500
                  text-white text-[16px] tracking-wider font-bold rounded-full
                  p-2 w-full mt-5">
      {status}
      </button>

    </form>
    </div>
  );
};

export default ContactForm;