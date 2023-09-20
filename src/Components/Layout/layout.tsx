/** @format */

import * as React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Currentlocation from "../CurrentLocation/CurrentLayout";
import TenDays from "../10days/TenDaysLayout";

import axios from "axios";
import "../../App.css";
import { useState } from "react";

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = () => {
	const [data, setData] = useState();
	const [forCast, setForCast] = useState(null);
	const [country, setCountery] = useState<string[]>(["Kolkata"]);

	function getWeatherData(city: string) {
		console.log("City props : ", city);
		if (!city) return;
		else {
			if (!country.includes(city)) {
				setCountery((prev) => [...prev, city]);
			}

			const apiUrl = `https://api.weatherapi.com/v1/current.json?key=a98a94a9ca204e809cd50811231209&q=${city}&aqi=yes`;
			const apiUrl1 = `https://api.weatherapi.com/v1/forecast.json?key=a98a94a9ca204e809cd50811231209&q=${city}&days=7&aqi=yes&alerts=yes`;

			const getData = async () => {
				Promise.all([axios.get(apiUrl), axios.get(apiUrl1)]).then((res) => {
					setData(res[0].data);
					setForCast(res[1].data.forecast);
				});
			};
			getData();
		}
	}

	return (
		<>
			<div className="bgc">
				<div className="navbar">
					<Navbar onclick1={getWeatherData} />
				</div>
				<div className="header">
					<Header country={country} onclick2={getWeatherData} />
				</div>
				<div
					className="currentLocation"
					style={{
						height: "170px",
					}}>
					<Currentlocation cdata={data} />
				</div>
				<div className="1odays">
					<TenDays data={forCast} />
				</div>
			</div>
		</>
	);
};

export default Layout;
