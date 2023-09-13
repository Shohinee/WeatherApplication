/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { weather } from "./WeatherNodes";

export default function CurrentWeather(props: any) {
	const [data, setData] = useState<weather | null>();

	// Displying Time

	let time = new Date().toLocaleTimeString();
	const [ctime, setCtime] = useState(time);
	const updateTime = () => {
		time = new Date().toLocaleTimeString();
		setCtime(time);
	};
	setInterval(updateTime, 1000);

	useEffect(() => {
		setData(() => props.cdata);
	});

	return (
		<div
			style={{
				height: "100%",
				width: "40%",
				backgroundColor: `blue`,
				display: "block",
			}}>
			<div className="seeDiffWeather">
				<p className="p">
					<span>Current weather</span>
					<br />
					<span className="time">{ctime}</span>
				</p>
				<button className="seediff">Seeing different weather?</button>
			</div>
			<br />
			<div
				className="temparature"
				style={{ display: "flex", justifyContent: "space-around" }}>
				<img src={data?.current.condition.icon} alt="" />
				<p className="air">{data?.current.temp_c}&deg;</p>
				<p className="air">{data?.current.condition.text}</p>
				<p className="air">{data?.location.name}</p>
			</div>
			<div
				className="shortinfo"
				style={{
					display: "flex",
					justifyContent: "space-around",
					marginTop: "16px",
				}}>
				<div className="air">
					<li>Air quality</li>
					<p>{data?.current.air_quality.o3}</p>
				</div>
				<div className="air">
					<li>wind</li>
					<p>{data?.current.wind_kph}km/h</p>
				</div>
				<div className="air">
					<li>Humidity</li>
					<p>{data?.current.humidity}%</p>
				</div>
				<div className="air">
					<li>Visibility</li>
					<p>{data?.current.vis_km}km</p>
				</div>
				<div className="air">
					<li>Pressure</li>
					<p>{data?.current.pressure_mb}mb</p>
				</div>
				<div className="air">
					<li>Dew point</li>
					<p>{data?.current.cloud}&deg;</p>
				</div>
			</div>
		</div>
	);
}
