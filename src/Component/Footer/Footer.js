import { BsDot, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import linkedin from "../../images/linkedin.png";
import twiter from "../../images/twiter.png";
const Footer = () => {
  return (
    <footer>
      <div className="bg-black h-[92px] md:pr-[165px]  px-10 py-2 flex md:flex-row md:hidden  items-center justify-between font-[poppins]">
        {" "}
        <div>
          <small className="text-[14px] text-[#EEEEEE] flex items-center">
            <span>All Rights Reserved Unicorniz Innovation</span>
            <BsDot className="w-5 h-5" />
            <Link to={"/"}>Home</Link>
            <BsDot className="w-5 h-5" />
            <Link to={"/"}>Contact Us</Link>
            <BsDot className="w-5 h-5" />
            <Link to={"/"}>About Us</Link>
          </small>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#18181C] hover:bg-orange-500 h-10 w-10 flex items-center justify-center rounded-2xl">
            <img src={twiter} alt="icons" />
          </div>
          <div className="bg-[#18181C] hover:bg-orange-500 h-10 w-10 flex items-center justify-center rounded-2xl">
            <img src={linkedin} alt="icons" />
          </div>
          <div className="bg-[#18181C] hover:bg-orange-500 h-10 w-10 flex items-center justify-center rounded-2xl">
            <BsFacebook fill="#fff" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
