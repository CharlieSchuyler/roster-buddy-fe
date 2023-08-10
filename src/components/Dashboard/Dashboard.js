import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

// components
import Header from "./Header";

import Settings from "./pages/Settings";

import Upcoming from "./widgets/Upcoming";
import Whatson from "./widgets/Whatson";

// Dashboard is the main component the lies below the header/navbar

const Dashboard = (props) => {
	const [userdata, setUserdata] = useState({});
	const [activeDisplay, setActiveDisplay] = useState("Dashboard");
	const [fetchedFlightData, setFetchedFlightData] = useState(null);
	// gets the user data from the backend
	useEffect(() => {
		fetchFlightData();
	}, []); // The empty dependency array makes sure the effect runs only once after initial render


	function userData() {
		return { name: { first: "Charlie", last: "Schuyler" }, device: { lat: "0", lng: "0" } };
	}

	async function fetchFlightData() {
		try {
			const response = await flightData();
			// Call your existing flightData function
			setFetchedFlightData(response);
		} catch (error) {
			console.error(error);
		}
	}

	async function flightData() {
		try {
			const response = await axios.post("http://rbserver.charlieschuyler.com/roster", {
				accessToken: localStorage.getItem("accessToken")
			});
			return response.data;
		} catch (error) {
			throw error;
		}
	}
	return (
		<div>
			<Header></Header>
			{/* <Settings></Settings> */}
			<h1 className="header2">Welcome Back, {userData().name.first}</h1>k
			<div className="contentSpace">
				<Upcoming userData={userData().device} flightData={fetchedFlightData} ></Upcoming>
			</div>
			{!props.ValidToken && <Navigate to="/" replace={true} />}
		</div>
	);
};

export default Dashboard;
