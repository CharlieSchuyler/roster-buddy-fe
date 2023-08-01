import React from "react";

import "../../../style/upcoming.css";

const Upcoming = (props) => {
	return (
		<div className="upcoming">
			<div>
				<div className="departure">
					<div className="airport">Melbourne</div>
					<div className="date">
						<div className="date">22/5</div>
						<div className="time">22:55</div>
					</div>
				</div>
				<img src="/flight.svg" alt="" />
				<div className="arrival">
					<div className="airport">Sydney</div>
					<div className="date">
						<div className="date">23/5</div>
						<div className="time">00:20</div>
					</div>
				</div>
			</div>
			<div className="seperator"></div>
			<div>
				<div className="departure">
					<div className="airport">Adelaide</div>
					<div className="date">
						<div className="date">22/5</div>
						<div className="time">22:55</div>
					</div>
				</div>
				<img src="/flight.svg" alt="" />
				<div className="arrival">
					<div className="airport">Perth</div>
					<div className="date">
						<div className="date">23/5</div>
						<div className="time">00:20</div>
					</div>
				</div>
			</div>
			<div className="seperator"></div>
			<div>
				<div className="departure">
					<div className="airport">Brisbane</div>
					<div className="date">
						<div className="date">22/5</div>
						<div className="time">22:55</div>
					</div>
				</div>
				<img src="/flight.svg" alt="" />
				<div className="arrival">
					<div className="airport">Cairns</div>
					<div className="date">
						<div className="date">23/5</div>
						<div className="time">00:20</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Upcoming;

{
	/* <div>
			<div className="departure">
				<div className="airport">{props.flightData.departure.name}</div>
				<div className="date">
					<div className="date">{props.flightData.departure.date}</div>
					<div className="time">{props.flightData.departure.time}</div>
				</div>
			</div>
			<img src="/flight.svg" alt="" />
			<div className="arrival">
				<div className="airport">{props.flightData.arrival.name}</div>
				<div className="date">
					<div className="date">{props.flightData.arrival.date}</div>
					<div className="time">{props.flightData.arrival.time}</div>
				</div>
			</div>
		</div> */
}
