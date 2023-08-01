import React, { useState } from "react";
import axios from "axios";

import "../../style/accounts/login.css";
// modules
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		axios({ method: "post", url: "http://rbserver.charlieschuyler.com/account/login", data: { email: email, password: password } })
			.then((res) => {
				console.log(res);
				localStorage.setItem("accessToken", ingres.data.accessToken);
				localStorage.setItem("refreshToken", res.data.refreshToken);
				window.location = "/dashboard";

			})
			.catch((err) => {
				console.log(err);
			});
		// Redirect to another page after successful login
	};

	return (
		<div className="Login">
			{props.ValidToken && <props.Navigate to="/dashboard" replace={true} />}
			<div className="inputfields">
				<div className="header">
					<b>Welcome To RosterBuddy</b>
					<p>Log in to continue</p>
				</div>
				<form id="login-form" onSubmit={handleSubmit}>
					<div className="email">
						<h2>Email</h2>
						<input type="text" name="Email" onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="password">
						<h2>Password</h2>
						<input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
					</div>
					<input type="submit" value="Submit" onClick={props.toggleAuth} />
					<h2 className="existingAccount" onClick={props.toggleSignup}>
						Don't have an account?
					</h2>
				</form>
			</div>

		</div>
	);
};

export default Login;
