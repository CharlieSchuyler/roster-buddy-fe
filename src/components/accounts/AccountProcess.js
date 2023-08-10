import React, { useState, useEffect } from "react";
import "../../style/accounts/main.css";

import Signup from "./Signup";
import Login from "./Login";
import RosterUpload from "./RosterUpload";
import { useNavigate } from "react-router-dom";

import checkAccess from "../../script/checkAccess";

const AccountProcess = (props) => {
	const navigate = useNavigate();
	const [activeComponent, setActiveComponent] = useState({ signup: true, authorized: false });
	useEffect(() => {
		const interval = setInterval(async () => {
			if (checkAccess()) {
				navigate("/dashboard")
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [])


	// checks react state to check the state of signup and authorized to redirect the user to the correct component
	function toggleSignup() {
		console.log(activeComponent);
		setActiveComponent({ signup: !activeComponent.signup, authorized: activeComponent.authorized });
		console.log(activeComponent);
	}

	function toggleAuth() {
		// authenticate details
		setActiveComponent({ signup: activeComponent.signup, authorized: !activeComponent.authorized });

	}
	const setComponent = () => {
		if (!activeComponent.authorized) {
			if (activeComponent.signup === true) return <Signup toggleSignup={toggleSignup}></Signup>;
			else return <Login toggleSignup={toggleSignup} toggleAuth={toggleAuth}></Login>;
		} else {
			return <RosterUpload toggleAuth={toggleAuth}></RosterUpload>;
		}
	};

	return (
		<div className="ap">
			<div className="fields">{setComponent()}</div>
			<div className="background"></div>
		</div>
	);
};

export default AccountProcess;
