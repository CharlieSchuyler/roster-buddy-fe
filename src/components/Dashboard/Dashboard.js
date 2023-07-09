import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

// components
import Header from "./Header";

const Dashboard = (props) => {
	const [userdata, setUserdata] = useState({});

	return (
		<div>
			<Header></Header>
			{!props.ValidToken && <Navigate to="/login" replace={true} />}
		</div>
	);
};

export default Dashboard;
