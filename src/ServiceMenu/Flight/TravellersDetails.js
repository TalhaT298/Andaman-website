import React, { useState } from "react";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	TextField,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const TravellersDetails = ({ step, setStep, data, setData }) => {
	const [numForms, setNumForms] = useState(1);
	const [isSelect, setIsSelect] = useState(false);

	const handleSubmit = (e) => {
		if (isSelect === false) alert("Please Select One");
		e.preventDefault();
		const codeNum = e.target.code.value;
		const phoneNum = e.target.phone.value;
		setData({ ...data, codeNum, phoneNum });
		setStep((prev) => prev + 1);
	};
	const handleSelectChange = () => {
		setIsSelect((prev) => !prev);
	};
	const handleTitleChange = (event) => {
		const title = event.target.value;
		setData({ ...data, title });
	};

	const handleFirstNameChange = (event) => {
		const firstName = event.target.value;
		setData({ ...data, firstName });
	};

	const handleLastNameChange = (event) => {
		const lastName = event.target.value;
		setData({ ...data, lastName });
	};

	return (
		<div className="">
			<div className="mt-5 bor">
				<div className="fd-h1">
					<span>Travellers Details</span>
					<div className="tv_right pb-">
						<div className="bg_si_d ng-scope pb-10">
							<img
								src="https://flight.easemytrip.com/M_Content/img/g-id-icon.png"
								width="21"
								height="16"
								alt="Name"
								className="spcer "
							/>
							Name should be same as in Government ID proof
						</div>
					</div>
				</div>
				{[...Array(numForms)].map((key, index) => {
					return (
						<div className="" key={index}>
							<div className="px-4 ">
								<h2 className="text-xl">ADULT</h2>
								<Accordion
									square
									elevation={0}
									className="shadow-pink-300 border-t mt-10 border-x">
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header">
										<Typography>
											<input
												tabIndex={index}
												type="checkbox"
												onChange={() => handleSelectChange()}
												name="title"
												id="title"
												className="w-4 h-4"
											/>{" "}
											<label htmlFor="title" className="uppercase font-bold">
												{data.title ? (
													<>
														{data.title} {data.firstName} {data.lastName}
													</>
												) : (
													<>Adult{numForms}</>
												)}
											</label>
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											<div className="w-[165%] flex  sm:flex-col gap-3 items-center">
												<div className="w-[16%] sm:w-[39.5%]">
													<FormControl
														fullWidth
														sx={{ m: 1, minWidth: 120 }}
														size="small">
														<InputLabel id="demo-select-small-label">
															Title
														</InputLabel>
														<Select
															labelId="demo-select-small-label"
															id="demo-select-small"
															label="Title"
															value={data.title}
															onChange={(event) => handleTitleChange(event)}>
															<MenuItem value="">
																<em>Title</em>
															</MenuItem>
															<MenuItem value={"MR"}>MR</MenuItem>
															<MenuItem value={"Mrs"}>Mrs</MenuItem>
															<MenuItem value={"MS"}>MS</MenuItem>
														</Select>
													</FormControl>
												</div>
												<div className="w-[39.5%]">
													<TextField
														onChange={(event) => handleFirstNameChange(event)}
														value={data.firstName}
														size="small"
														fullWidth
														id="outlined-basic"
														label="(First Name & (Middle name, if any)"
														variant="outlined"
													/>
												</div>
												<div className="w-[39.5%]">
													{" "}
													<TextField
														value={data.lastName}
														onChange={(event) => handleLastNameChange(event)}
														size="small"
														fullWidth
														id="outlined-basic"
														label="Last Name"
														variant="outlined"
													/>
												</div>
											</div>
										</Typography>
									</AccordionDetails>
								</Accordion>
								<div className="greyBgbtm">
									{" "}
									<div style={{ float: "left" }}>
										<div className="addTxtcol">Add-ons (Optional)</div>
										<div className="addTxtcol">
											Pre-booked meals, Seats and Baggage are 30% cheaper than
											on-board price.
										</div>
									</div>{" "}
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="phone">
					<span>Contact Details</span> <br />
					<small>
						Your Mobile number will be used only for sending flight related
						communication
					</small>
				</label>
				<div className="flex justify-between">
					<input
						type="tel"
						name="code"
						placeholder="+91"
						maxLength={3}
						minLength={3}
						required
						id="code"
						className="w-[10%] block py-2 pl-5 border-[#d2d2d2] border rounded shadow mt-2 outline-none"
					/>
					<input
						type="tel"
						name="phone"
						required
						id="phone"
						placeholder="Enter phone number"
						className="w-[80%] block py-2 pl-[10%] border-[#d2d2d2] border rounded shadow mt-2 outline-none"
					/>
				</div>
				{!isSelect && (
					<small className="text-red-500">Please Select Your Name</small>
				)}
				<div className="con">
					<button className="co" type="submit" disabled={!isSelect}>
						Continue Booking
					</button>
				</div>
			</form>
		</div>
	);
};

export default TravellersDetails;
