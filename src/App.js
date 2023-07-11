import { useEffect, useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// components

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/accounts/Login";
import Signup from "./components/accounts/Signup";

import checkAccess from "./script/checkAccess";
// css
import "./style/app.css";
import "./style/upload.css"

// react router

function App() {
	const [ValidToken, setValidToken] = useState();

	useEffect(() => {
		const interval = setInterval(async () => {
			const result = await checkAccess();
			setValidToken(result.error);
		}, 15000);

		checkAccess().then(result => {
			setValidToken(result.error);
		});

		return () => {
			clearInterval(interval);
		};
	}, []);


	return (
		<div className="App">
			{/* <Header></Header> */}
			<BrowserRouter>
				<Routes>
					<Route path="/dashboard" index element={<Dashboard ValidToken={ValidToken} />} />
					<Route path="/" index element={<Login ValidToken={ValidToken} Navigate={Navigate} />} />
					<Route path="/login" element={<Login ValidToken={ValidToken} Navigate={Navigate} />} />
					<Route path="/signup" index element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
