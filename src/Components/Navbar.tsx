/** @format */

import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { weather } from "./CurrentLocation/WeatherNodes";

export default function Navbar(props: any) {
	// const [data, setData] = useState<weather>();
	const [country, setCountery] = useState("Kolkata");

	const handleChange = (event: any) => {
		setCountery(event.target.value);
	};
	const displayData = () => {
		props.onclick1(country);
	};
	useEffect(() => {
		props.onclick1(country);
	}, []);

	return (
		<nav
			className="navbar navbar-light bg-light justify-content-between"
			style={{ width: "100%" }}>
			<a className="navbar-brand">Weather Application</a>
			<input
				className="form-control mr-sm-2"
				type="text"
				placeholder="Search"
				// aria-label="Search"
				onChange={handleChange}
			/>
			<button
				className="btn btn-outline-success my-2 my-sm-0"
				type="button"
				onClick={displayData}>
				Search
			</button>
		</nav>
	);
}
