import React, { useState } from "react";
import "./Review.css";
import EmailForm from "./EmailForm";
import TravellersDetails from "./TravellersDetails";
import Table1 from "./Table1";
import Table2 from "./Table2";
const Review = () => {
	const [showTotal, setShowTotal] = useState(false);
	const [step, setStep] = useState(0);
	const [step2, setStep2] = useState(0);
	const [data, setData] = useState([
		{
			title: "",
			firstName: "",
			lastName: "",
		},
	]);

	const handleStep1 = () => {
		if (step === 1) setStep(0);
	};
	const handleStep2 = () => {
		if (step === 2) setStep(1);
	};
	const handleAlert = () => {
		alert(
			`Thank you ${data.title} ${data.firstName} ${data.lastName} for using Sublime Island. Sublime Island will reach out to you in 2-3 hours or as soon as possible 😁✌🏻`
		);
	};

	return (
		<div className=" px-16 sm:px-2">
			<div className="w-full">
				<ol className="flex gap-4 items-center">
					<li
						onClick={handleStep1}
						className={`${
							step === 0 ? "font-semibold text-[#055c9b]" : "cursor-pointer"
						} rev Review ac`}>
						1.Review
					</li>

					<li>
						<span className="arr"></span>
					</li>
					<li
						onClick={handleStep2}
						className={`${step === 1 && "font-semibold text-[#055c9b]"} ${
							step === 2 && "cursor-pointer"
						} rev1 Travelers`}>
						2.Travellers
					</li>

					<li>
						<span className="arr"></span>
					</li>
					<li
						className={`${step === 2 && "font-semibold text-[#055c9b]"} rev2`}>
						3.Payment
					</li>
				</ol>
			</div>
			<div className="grid grid-cols-4 gap-10">
				{/* Left Side */}
				<div className="col-span-3 sm:col-span-4">
					<div className="bor pb-3 mb-5">
						<div className="fd-h">
							{step === 0 && <span>Fight Details</span>}
							{step === 1 && <span>Booking Details</span>}
						</div>
						<div className="px-4">
							<div className="px-2 tr-cn-m">
								{step === 0 && <div className="dprtBg">Depart</div>}

								<div className="mt-10">
									<div className="fd-des">
										<span className="pl-[1%] text-[20px]">Delhi - Mumbai</span>|{" "}
										<span className="text-[14px] text-[#6a6868]">
											Sun-18Jun2023
										</span>
									</div>
									<div className="flex md:flex-col w-full">
										<div className="w-[20%]">
											<div className="mt-3 ">
												<div className="w-[30%] grid grid-cols-2 items-center ">
													<img
														src="https://flight.easemytrip.com/Content/AirlineLogon/I5.png"
														alt=""
														width={28}
													/>
													<div className="ml-[10%] w-[100%]">
														<span>AirAsia</span>
														<span className="text-[#6a6868] text-[12px] block">
															I5-741
														</span>
													</div>
												</div>
											</div>
											<span className="px-2 py-0.5 font-semibold rounded-full bg-[#eae8e8] text-[13px]">
												Low fare
											</span>
										</div>
										<div className="w-[80%] flex justify-between">
											<div className="w-[33%]">
												<div className="text-xl font-bold">05:00</div>
												<small className="font-semibold block">
													Delhi (DEL)
												</small>
												<small className="block">Mon-19Jun2023</small>
												<small className="">Terminal - 3</small>
											</div>{" "}
											<div className="w-[33%] relative text-center">
												<div className="text-[12px] text-[#6a6868]">
													00h 50m
												</div>
												<div className="lin2 lindvd">
													<div className="fli-i"></div>
												</div>
												<div className="ref">Refundable</div>
											</div>{" "}
											<div className="w-[34%] pl-32">
												<div className="text-xl font-bold">05:50</div>
												<small className="font-semibold block">
													Jaipur (JAI)
												</small>
												<small className="block">Mon-19Jun2023</small>
											</div>{" "}
										</div>
									</div>
								</div>
								<div className="mt-3">
									<div className="layover ng-scope">
										<span>
											<strong className="ng-binding">3h :45m</strong> Layover in{" "}
											<strong className="ng-binding">Jaipur (JAI)</strong>
										</span>
									</div>
								</div>
								<div className="mt-10">
									<div className="w-full flex md:flex-col justify-between">
										<div className="w-[20%]">
											<div className="mt-3 ">
												<div className="w-[30%] grid grid-cols-2 items-center ">
													<img
														src="https://flight.easemytrip.com/Content/AirlineLogon/I5.png"
														alt=""
														width={28}
													/>
													<div className="ml-[10%] w-[100%]">
														<span className="">AirAsia</span>
														<span className="text-[#6a6868] text-[12px] block">
															I5-741
														</span>
													</div>
												</div>
											</div>
											<span className="px-2 py-0.5 font-semibold rounded-full bg-[#eae8e8] text-[13px]">
												Low fare
											</span>
											<div className="flex gap-3 mt-2">
												<small
													onClick={() => setStep2(1)}
													tabIndex={1}
													className="focus:border-b-2 border-slate-400 cursor-pointer">
													Fare Rules
												</small>
												<small
													onClick={() => setStep2(2)}
													tabIndex={2}
													className="focus:border-b-2 border-slate-400 cursor-pointer">
													Baggage
												</small>
											</div>
											{step2 === 1 && (
												<div className="w-full ">
													<Table1/>
												</div>
											)}
											{step2 === 2 && (
												<><Table2/></>
											)}
										</div>
										<div className="w-[80%] flex justify-between">
											<div className="w-[33%]">
												<div className="text-xl font-bold">05:00</div>
												<small className="font-semibold block">
													Delhi (DEL)
												</small>
												<small className="block">Mon-19Jun2023</small>
												<small className="">Terminal - 3</small>
											</div>{" "}
											<div className="w-[33%] relative text-center">
												<div className="text-[12px] text-[#6a6868]">
													00h 50m
												</div>
												<div className="lin2 lindvd">
													<div className="fli-i"></div>
												</div>
												<div className="ref">Refundable</div>
											</div>{" "}
											<div className="w-[34%] pl-32">
												<div className="text-xl font-bold">05:50</div>
												<small className="font-semibold block">
													Jaipur (JAI)
												</small>
												<small className="block">Mon-19Jun2023</small>
											</div>{" "}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						{step === 0 && (
							<EmailForm
								setStep={setStep}
								step={step}
								setData={setData}
								data={data}
							/>
						)}
						{step === 1 && (
							<TravellersDetails
								setStep={setStep}
								step={step}
								setData={setData}
								data={data}
							/>
						)}
						{step === 2 && (
							<div className="con">
								<button className="co" onClick={handleAlert}>
									Pay Now
								</button>
							</div>
						)}
					</div>
				</div>
				{/* Right Side */}
				<div className="col-span-1 sm:hidden">
					<div className="bor sticky top-3">
						<div className="prc-mm">
							<div className="prc-h">
								<span>Summary</span>
							</div>
							<div className="prc-h2 ">1</div>
							<div className="prc-h3 ">0</div>
							<div className="prc-h4 ">0</div>
						</div>
						<div className="px-3">
							<div className="flex justify-between items-center border-[#e5e3e3] border-b">
								<div>Adult x 1</div>
								<div>₹ 3745</div>
							</div>
							<div className="flex justify-between items-center border-[#e5e3e3] border-b">
								<div
									className="cursor-pointer"
									onClick={() => setShowTotal((prev) => !prev)}>
									Total Taxes {showTotal ? <span>-</span> : <span>+</span>}
								</div>
								<div>₹ 655</div>
							</div>
							<div className="flex justify-between items-center border-[#e5e3e3] border-b">
								<div>Insurance</div>
								<div>₹ 199</div>
							</div>
							<div className="flex justify-between items-center border-[#e5e3e3] border-b">
								<div>Discount</div>
								<div>₹ 300</div>
							</div>
							<div className="flex justify-between items-center text-xl font-bold text-[orange] border-[#e5e3e3] border-b">
								<div>Grand Total</div>
								<div>₹ 3745</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
