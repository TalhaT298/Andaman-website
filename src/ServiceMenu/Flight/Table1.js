import React from 'react';

const Table1 = () => {
    return (
			<div>
				<table
					style={{ width: "60vw" }}
					className="border-collapse border border-slate-400 mt-3 text-sm">
					<thead className="bg-slate-200 ">
						<tr>
							<th className="border border-slate-300 text-start">
								Time Frame to cancel <br />
								<small className="font-normal">
									Before scheduled departure time
								</small>
							</th>
							<th className="border border-slate-300 text-start">
								Airline Fees
								<br />
								<small className="font-normal">per passengertime</small>
							</th>
							<th className="border border-slate-300 text-start">
								EaseMyTrip Fees <br />
								<small className="font-normal">per passengertime</small>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-slate-300 ...">
								Cancel Before 96 hours of departure time.
							</td>
							<td className="border border-slate-300 ...">3000</td>
							<td className="border border-slate-300 ...">300</td>
						</tr>
						<tr>
							<td className="border border-slate-300 ...">
								Cancel within 96 hours & before 4 hours of departure time.
							</td>
							<td className="border border-slate-300 ...">3500</td>
							<td className="border border-slate-300 ...">300</td>
						</tr>
					</tbody>
				</table>
				<table
					style={{ width: "60vw" }}
					className="border-collapse border border-slate-400 mt-3 text-sm">
					<thead className="bg-slate-200 ">
						<tr>
							<th className="border border-slate-300 text-start">
								Time Frame to reschedule <br />
								<small className="font-normal">
									Before scheduled departure time
								</small>
							</th>
							<th className="border border-slate-300 text-start">
								Airline Fees
								<br />
								<small className="font-normal">per passengertime</small>
							</th>
							<th className="border border-slate-300 text-start">
								EaseMyTrip Fees <br />
								<small className="font-normal">per passengertime</small>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border border-slate-300 ...">
								Reschedule before 96 hours of after departure time.
							</td>
							<td className="border border-slate-300 ...">2750</td>
							<td className="border border-slate-300 ...">300</td>
						</tr>
						<tr>
							<td className="border border-slate-300 ...">
								Reschedule within 96 hours & before 4 hours of departure time.
							</td>
							<td className="border border-slate-300 ...">3500</td>
							<td className="border border-slate-300 ...">300</td>
						</tr>
					</tbody>
				</table>
				<div className="mt-5 w-[50vw]">
					<h3>Terms & Conditions</h3>
					<ul className="text-xs list-disc list-inside">
						<li>
							Total Rescheduling Charges Airlines Rescheduling fees Fare
							Difference if applicable + EaseMyTrip Fees
						</li>
						<li>
							The airline cancel reschedule fees is indicative and can be
							changed without any prior notice by the airlines.
						</li>
						<li>
							EaseMyTrip does not guarantee the accuracy of cancel reschedule
							fees.
						</li>
						<li>
							Partial cancellation is not allowed on the flight tickets which
							are book under special round trip discounted fares.
						</li>
						<li>
							Airlines doesnt allow any additional baggage allowance for any
							infant added in the booking
						</li>
						<li>
							In certain situations of restricted cases, no amendments and
							cancellation is allowed
						</li>
						<li>
							Airlines cancel reschedule should be reconfirmed before requesting
							for a cancellation or amendment
						</li>
					</ul>
				</div>
			</div>
		);
};

export default Table1;