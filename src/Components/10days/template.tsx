/** @format */

import moment from "moment";

export default function Template(props: any) {
	return (
		<div
			style={{
				height: "100%",
				width: "130px",

				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-around",
				border: "1px solid white",
				borderRadius: "10px",
			}}>
			<span>{moment(props.data.date).format("dddd")}</span>
			<span>
				<img src={props.data.day.condition.icon} alt="" />
			</span>
			<span>{props.data.day.maxtemp_c}</span>
			<span>{props.data.day.mintemp_c}</span>
		</div>
	);
}
