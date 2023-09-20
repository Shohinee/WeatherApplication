/** @format */

import HourlyTemp from "./HourlyTemp";

export default function Hourly(props: any) {
	return (
		<div
			style={{
				height: "200px",
				display: "flex",
				justifyContent: "space-evenly",
			}}>
			{props.data.forecastday[0].hour
				? props.data.forecastday[0].hour.map((item: any, index: any) => (
						<HourlyTemp key={index} data={item} />
				  ))
				: null}
		</div>
	);
}
