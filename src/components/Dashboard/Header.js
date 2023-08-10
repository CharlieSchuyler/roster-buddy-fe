import React from "react";

// import css
import "../../style/header.css";

const Header = () => {
	function logout() {
		localStorage.removeItem("accessToken")
	}
	return (
		<div className="header-main">
			<div className="branding">
				<div className="logo"></div>
				<h1>RosterBuddy</h1>
			</div>
			<div className="navigation">
				<ul>
					<a href="./dashboard">
						<li className="active">Dashboard</li>
					</a>
					<a href="./">
						<li onClick={logout()}>Logout</li>
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Header;
