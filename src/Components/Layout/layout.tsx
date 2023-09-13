/** @format */

import * as React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Currentlocation from "../CurrentLocation/CurrentLayout";
import TenDays from "../10days/TenDaysLayout";
import Hourly from "../Hourly";
import axios from "axios";
import { weather } from "../CurrentLocation/WeatherNodes";
import { useState } from "react";

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = () => {
	const [data, setData] = useState();
	function getWeatherData(city: string) {
		// console.log(city);
		if (!city) return;
		else {
			// const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=yes&alerts=yes`;
			const apiUrl = `https://api.weatherapi.com/v1/current.json?key=a98a94a9ca204e809cd50811231209&q=${city}&aqi=yes`;
			// const apiUrl = `https://api.weatherapi.com/v1/search.json?key=a98a94a9ca204e809cd50811231209&q=${city}`;

			axios
				.get(apiUrl)
				.then((res) => {
					setData(res.data);
				})
				// .then((res) => console.log(res.data))
				.catch((error: any) => console.log(error));
		}
	}

	return (
		<>
			<div className="navbar">
				<Navbar onclick1={getWeatherData} />
			</div>
			<div className="header">
				<Header />
			</div>
			<div
				className="currentLocation"
				style={{
					height: "242px",
					border: "1px solid black",
				}}>
				<Currentlocation cdata={data} />
			</div>
			<div className="1odays">
				<TenDays />
			</div>
			<div className="hourly">
				<Hourly />
			</div>
		</>
	);
};

export default Layout;
