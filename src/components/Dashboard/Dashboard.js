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
	// gets the user data from the backend
	function userData() {
		return { name: { first: "Charlie", last: "Schuyler" }, device: { lat: "0", lng: "0" } };
	}
	return (
		<div>
			<Header></Header>
			{/* <Settings></Settings> */}
			<h1 className="header2">Welcome Back, {userData().name.first}</h1>k
			<div className="contentSpace">
				<Upcoming userData={userData().device}></Upcoming>
				<Whatson></Whatson>
			</div>
			{/* {!props.ValidToken && <Navigate to="/" replace={true} />} */}
		</div>
	);
};

export default Dashboard;
