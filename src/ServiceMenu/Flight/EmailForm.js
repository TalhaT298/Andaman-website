import React from "react";

const EmailForm = ({ step, setStep,data, setData }) => {
	const handleClick = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		setData({...data,email});
		if (step > 1 || step < 0) return;
		setStep((prev) => prev + 1);
	};
	return (
		<form onSubmit={handleClick}>
			<label htmlFor="email">
				<span>Contact Information</span>{" "}
				<small>Your ticket will be sent to this email address</small>
			</label>
			<input
				type="email"
				name="email"
				required
				id="email"
				placeholder="Enter Email address"
				className="w-[90%] block py-2 pl-[10%] border-[#d2d2d2] border rounded shadow mt-2 outline-none"
			/>
			<div className="con">
				<button className="co" type="submit">
					Continue Booking
				</button>
			</div>
		</form>
	);
};

export default EmailForm;
