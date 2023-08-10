import React from "react";

import "../../../style/upcoming.css";
import moment from "moment";

const Upcoming = (props) => {
	function convertDateToText(dateString) {
		const formattedDate = moment(dateString, "DD/MM").format("Do MMMM");
		return formattedDate;
	}
	function convertTimeTo12HourFormat(timeString) {
		const [hour, minute] = timeString.match(/.{1,2}/g);
		const date = new Date();
		date.setHours(hour);
		date.setMinutes(minute);

		const formattedTime = date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
		return formattedTime;
	}
	function createList() {
		console.log(props);
		if (props.flightData) {
			return (
				<div className="upcoming">
					{props.flightData[0].Individual.data.isRostered.map((item, index) => (
						<div className="flight-details">
							<div className="Flight">Code : {item.code === "HRA SPAN" ? "Home Reserve" : `QF ${item.code}`}</div>
							<div className="dates">{convertDateToText(`${item.date.day}/${item.date.month}`)}</div>
							<div className="time">Sign on : {convertTimeTo12HourFormat(`${item.times.son}`)}</div>
							<div className="time">Sign off : {convertTimeTo12HourFormat(`${item.times.soff}`)}</div>
							<div className="role">Role : {item.role}</div>
						</div>
					))}

					{props.flightData[1].Individual.data.isRostered.map((item, index) => (
						<div className="flight-details" key={index}>
							<div className="Flight">Code : {item.code === "HRA SPAN" ? "Home Reserve" : `QFA${item.code}`}</div>
							<div className="dates">{convertDateToText(`${item.date.day}/${item.date.month}`)}</div>
							<div className="time">Sign on : {convertTimeTo12HourFormat(`${item.times.son}`)}</div>
							<div className="time">Sign off : {convertTimeTo12HourFormat(`${item.times.soff}`)}</div>
							<div className="role">Role : {item.role}</div>
						</div>
					))}
				</div>
			);
		}
	}

	return createList();
};

export default Upcoming;

{
	/* <div>
			<div className="departure">
				<div className="airport">airport name</div>
				<div className="date">
					<div className="date">{props.flightData.data.isRostered[x].day}/{props.flightData.data.isRostered[x].month}</div>
					<div className="time">{props.flightData.data.isRostered[x].times.son}</div>
				</div>
			</div>
			<img src="/flight.svg" alt="" />
			<div className="arrival">
				<div className="airport">airport name</div>
				<div className="date">
					<div className="date">{props.flightData.data.isRostered[x].day}/{props.flightData.data.isRostered[x].month}</div>
					<div className="time">{props.flightData.data.isRostered[x].times.soff}</div>
				</div>
			</div>
		</div> */
}
