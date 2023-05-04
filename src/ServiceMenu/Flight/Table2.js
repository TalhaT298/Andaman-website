import React from 'react';

const Table2 = () => {
    return (
			<table style={{ width: "60vw" }} className="  mt-3 text-sm">
				<thead className="bg-slate-200 text-slate-400">
					<tr>
						<th className="border border-slate-300 text-start"></th>
						<th className="border border-slate-300 text-start">Airline</th>
						<th className="border border-slate-300 text-start">
							Check-in Baggage
						</th>
						<th className="border border-slate-300 text-start">
							Cabin Baggage
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border border-slate-300 py-1 px-3">
							<img
								src="https://flight.easemytrip.com/Content/AirlineLogon/I5.png"
								alt=""
								width={28}
							/>
						</td>
						<td className="border border-slate-300 ...">
							AirAsia <br />
							<small className="text-slate-400">I5 - 743</small>
						</td>
						<td className="border border-slate-300 ...">15 kgs</td>
						<td className="border border-slate-300 ...">7 kgs</td>
					</tr>
					<tr>
						<td className="border border-slate-300 py-1 px-3">
							<img
								src="https://flight.easemytrip.com/Content/AirlineLogon/I5.png"
								alt=""
								width={28}
							/>
						</td>
						<td className="border border-slate-300 ...">
							AirAsia <br />
							<small className="text-slate-400">I5 - 762</small>
						</td>
						<td className="border border-slate-300 ...">15 kgs</td>
						<td className="border border-slate-300 ...">7 kgs</td>
					</tr>
				</tbody>
			</table>
		);
};

export default Table2;