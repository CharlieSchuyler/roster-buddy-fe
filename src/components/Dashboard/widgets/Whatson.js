import React from "react";

import "../../../style/whatson.css";

const Whatson = (props) => {
	return (
		<div className="whatson">
			<h1> Whats on {JSON.stringify(props.userData)}</h1>
		</div>
	);
};

export default Whatson;
