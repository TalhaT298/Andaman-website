

import twiter from "../../images/twiter.png"
import discord from "../../images/discord.png"
import linkedin from "../../images/linkedin.png"
import {BsDot, BsFacebook} from 'react-icons/bs'
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer>
			{/* <div
				className="bg-[#0D0D0D] w-full min-h-[268px] px-10 lg:px-[165px] flex md:flex-row flex-col justify-between items-center
">
				<div>
					<Image src={logo} className="w-10 pt-5" alt="logo" />{" "}
					<p className="w-[303px] text-[14px] text-[#9E9E9E] md:mt-[22px]">
						A good design is not only aesthetically pleasing, but also
						functional. It should be able to solve the problem{" "}
					</p>
				</div>
				<div className="pt-5">
					<p className="text-white font-semibold">Sections</p>{" "}
					<div className="text-[14px] text-[#9E9E9E] flex gap-[104px]">
						<ul className="leading-[38px]">
							<li>Home</li>
							<li>Section One</li>
							<li>Section Two</li>
							<li>Section Three</li>
						</ul>
						<ul className="leading-[38px]">
							<li>Home</li>
							<li>Section One</li>
							<li>Section Two</li>
							<li>Section Three</li>
						</ul>
						<ul className="leading-[38px]">
							<li>Home</li>
							<li>Section One</li>
							<li>Section Two</li>
							<li>Section Three</li>
						</ul>
					</div>
				</div>
			</div> */}
			<div className="bg-black h-[92px] md:pr-[165px]  px-10 py-2 flex md:flex-row sm:hidden  items-center justify-between font-[poppins]">
				{" "}
				<div>

				<small className="text-[14px] text-[#EEEEEE] flex items-center">
					<span>
					All Rights Reserved Unicorniz Innovation
					</span>
					<BsDot className="w-5 h-5"/>
					<Link to={"/"}>Home</Link>
					<BsDot className="w-5 h-5"/>
					<Link to={"/"}>Contact Us</Link>
					<BsDot className="w-5 h-5"/>
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
						<BsFacebook fill="#fff" className="w-5 h-5"/>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;