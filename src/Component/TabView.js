import React from "react";
import { Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

// import {Text} from "@nextui-org/react";
// import Flights from '../ServiceMenu/Flights';

import Flights from "../ServiceMenu/Flights";
import Ship from "../ServiceMenu/Ship";
import Hotel from "../ServiceMenu/Hotel";
import Cab from "../ServiceMenu/Cab";
import Bus from "../ServiceMenu/Bus";
import Ferry from "../ServiceMenu/Ferry.js";
import Activity from "../ServiceMenu/Activity";
import Dinning from "../ServiceMenu/Dinning";
import Trekking from "../ServiceMenu/Trekking.js";
import Pg from "../ServiceMenu/Pg.js";
import Travelpackage from "../ServiceMenu/Travelpackage";
import Shop from "../ServiceMenu/Shop.js";
import { Container } from "@nextui-org/react";
import Lottie from "react-lottie";
import * as FlightData from "../Icons/flight.json";
import * as HotelData from "../Icons/hotel.json";
import * as ShipData from "../Icons/ship.json";
import * as BusData from "../Icons/Bus.json";
import * as CabData from "../Icons/Cab.json";
import * as FerryData from "../Icons/ferry.json";
import * as DivingData from "../Icons/diving.json";
import * as GuestData from "../Icons/guest.json";
import * as TravelData from "../Icons/travel.json";
import * as DinningData from "../Icons/dinning.json";
import * as TrekkingData from "../Icons/trekking.json";
import * as ShopData from "../Icons/shop.json";

import { fire } from "../fire";

// let card = []
// let flightcard = []
// let cabcard = []
// let pgcard = []

const TabView = () => {
	const [value, setValue] = React.useState({
		value: 0,
		weight: "",
		tabcolor: "",
	});

	const location = useLocation();

	React.useEffect(() => {
		const { pathname } = location;
		if (pathname === "/Hotels") {
			setValue({ value: 1 });
		} else if (pathname === "/Ships") {
			setValue({ value: 2 });
		} else if (pathname === "/Bus") {
			setValue({ value: 3 });
		} else if (pathname === "/Cabs") {
			setValue({ value: 4 });
		} else if (pathname === "/Ferries") {
			setValue({ value: 5 });
		} else if (pathname === "/Water-Sports") {
			setValue({ value: 6 });
		} else if (pathname === "/Paying-Guest") {
			setValue({ value: 7 });
		} else if (pathname === "/Package") {
			setValue({ value: 8 });
		} else if (pathname === "/Dinnings") {
			setValue({ value: 9 });
		} else if (pathname === "/Trekking") {
			setValue({ value: 10 });
		} else if (pathname === "/Shops") {
			setValue({ value: 11 });
		} else {
			setValue({ value: 0 });
		}
	}, [location]);

	const handleTabs = (e, val) => {
		console.warn(val);
		setValue({ value: val, weight: "bolder", tabcolor: "#100E09" });
	};

	function TabPanel(props) {
		const { children, value, index } = props;
		console.log(value, typeof index);
		return <div>{value.value === index && <h1>{children}</h1>}</div>;
	}

	const size = 40;

	//Icons
	const FlightIcon = {
		loop: true,
		autoplay: true,
		animationData: FlightData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const HotelIcon = {
		loop: true,
		autoplay: true,
		animationData: HotelData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const ShipIcon = {
		loop: true,
		autoplay: true,
		animationData: ShipData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const BusIcon = {
		loop: true,
		autoplay: true,
		animationData: BusData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const CabIcon = {
		loop: true,
		autoplay: true,
		animationData: CabData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const FerryIcon = {
		loop: true,
		autoplay: true,
		animationData: FerryData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const DivingIcon = {
		loop: true,
		autoplay: true,
		animationData: DivingData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const GuestIcon = {
		loop: true,
		autoplay: true,
		animationData: GuestData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const TravelIcon = {
		loop: true,
		autoplay: true,
		animationData: TravelData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const DinningIcon = {
		loop: true,
		autoplay: true,
		animationData: DinningData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const TrekkingIcon = {
		loop: true,
		autoplay: true,
		animationData: TrekkingData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const ShopIcon = {
		loop: true,
		autoplay: true,
		animationData: ShopData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<Container fluid>
			<Tabs
				value={value.value || 0}
				onChange={handleTabs}
				variant="scrollable"
				textColor="#757574"
				indicatorColor="#757574"
				centered={true}
				scrollButtons="auto"
				TabIndicatorProps={{
					style: {
						backgroundColor: "#757574",
					},
				}}>
				<Tab
					label="Flights"
					component={Link}
					to="/Flights"
					icon={<Lottie options={FlightIcon} height={size} width={size} />}
					style={{
						color: value === 0 ? value.tabcolor : "#757574",
						fontWeight: value === 0 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Hotels"
					component={Link}
					to="/Hotels"
					icon={<Lottie options={HotelIcon} height={size} width={size} />}
					style={{
						color: value === 1 ? value.tabcolor : "#757574",
						fontWeight: value === 1 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Ship"
					component={Link}
					to="/Ships"
					icon={<Lottie options={ShipIcon} height={size} width={size} />}
					style={{
						color: value === 2 ? value.tabcolor : "#757574",
						fontWeight: value === 2 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Bus"
					component={Link}
					to="/Bus"
					icon={<Lottie options={BusIcon} height={size} width={size} />}
					style={{
						color: value === 3 ? value.tabcolor : "#757574",
						fontWeight: value === 3 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Cabs"
					component={Link}
					to="/Cabs"
					icon={<Lottie options={CabIcon} height={size} width={size} />}
					style={{
						color: value === 4 ? value.tabcolor : "#757574",
						fontWeight: value === 4 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Ferry"
					component={Link}
					to="/Ferries"
					icon={<Lottie options={FerryIcon} height={size} width={size} />}
					style={{
						color: value === 5 ? value.tabcolor : "#757574",
						fontWeight: value === 5 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Water Sports"
					component={Link}
					to="/Water-Sports"
					icon={<Lottie options={DivingIcon} height={size} width={size} />}
					style={{
						color: value === 6 ? value.tabcolor : "#757574",
						fontWeight: value === 6 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Paying Guest"
					component={Link}
					to="/Paying-Guest"
					icon={<Lottie options={GuestIcon} height={size} width={size} />}
					style={{
						color: value === 7 ? value.tabcolor : "#757574",
						fontWeight: value === 7 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Package"
					component={Link}
					to="/Package"
					icon={<Lottie options={TravelIcon} height={size} width={size} />}
					style={{
						color: value === 8 ? value.tabcolor : "#757574",
						fontWeight: value === 8 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Dinning"
					component={Link}
					to="/Dinnings"
					icon={<Lottie options={DinningIcon} height={size} width={size} />}
					style={{
						color: value === 9 ? value.tabcolor : "#757574",
						fontWeight: value === 9 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Trekking"
					component={Link}
					to="/Trekking"
					icon={<Lottie options={TrekkingIcon} height={size} width={size} />}
					style={{
						color: value === 10 ? value.tabcolor : "#757574",
						fontWeight: value === 10 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
				<Tab
					label="Shop"
					component={Link}
					to="/Shops"
					icon={<Lottie options={ShopIcon} height={size} width={size} />}
					style={{
						color: value === 11 ? value.tabcolor : "#757574",
						fontWeight: value === 11 ? value.weight : "lighter",
						fontSize: "11px",
					}}
				/>
			</Tabs>

			<TabPanel value={value || 0} index={0}>
				{/* <Flights flightdata={flightcard} /> */}
				<Flights />
			</TabPanel>
			<TabPanel value={value} index={1}>
				{/* <Hotel carddata={card} /> */}
				<Hotel />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Ship />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Bus />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Cab />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<Ferry />
			</TabPanel>
			<TabPanel value={value} index={6}>
				<Activity />
			</TabPanel>
			<TabPanel value={value} index={7}>
				<Pg />
			</TabPanel>
			<TabPanel value={value} index={8}>
				<Travelpackage />
			</TabPanel>
			<TabPanel value={value} index={9}>
				<Dinning />
			</TabPanel>
			<TabPanel value={value} index={10}>
				<Trekking />
			</TabPanel>
			<TabPanel value={value} index={11}>
				<Shop />
			</TabPanel>
		</Container>
	);
};

export default TabView;
