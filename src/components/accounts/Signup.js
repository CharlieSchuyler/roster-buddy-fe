import React, { useState } from "react";

// css
import "../../style/accounts/login.css";

// modules
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		axios({ method: "post", url: "http://rbserver.charlieschuyler.com/account/signup", data: { email: email, password: password, fname: fname, lname: lname } })
			.then((response) => {
				console.log(response);
				// navigate("/dashboard");
			})
			.catch((err) => {
				console.log(err);
			});
		// Redirect to another page after successful login
	};

	return (
		<div className="Signup">
			<div className="inputfields">
				<div className="header">
					<b>Welcome To RosterBuddy</b>
					<p>Sign up to continue</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="name">
						<label className="fname nameInner">
							<h2>First name</h2>
							<input required type="text" name="fname" id="fname" onChange={(e) => setFname(e.target.value)} />
						</label>
						<label className="last nameInner">
							<h2>Last name</h2>
							<input required type="text" name="lname" id="lname" onChange={(e) => setLname(e.target.value)} />
						</label>
					</div>

					<label className="email">
						<h2>Email</h2>
						<input required type="text" name="Email" id="email" onChange={(e) => setEmail(e.target.value)} />
					</label>
					<label className="password">
						<h2>Password</h2>
						<input required type="password" name="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
					</label>
					<input type="submit" value="Submit" />
					<h2 className="existingAccount">
						<Link to="/login">Already have an account?</Link>
					</h2>
				</form>
			</div>
			<div className="background"></div>
		</div>
	);
};

export default Signup;
