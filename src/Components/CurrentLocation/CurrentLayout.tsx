/** @format */
import "./Currentlocation.css";
import CurrentWeather from "./CurrentWeather";

export default function Currentlocation(props: any) {
	return (
		<>
			<div
				className="Cparent"
				style={{
					width: "100%",
					height: "200px",
					display: "flex",
					justifyContent: "space-around",
					alignItems: "flex-end",
				}}>
				<CurrentWeather cdata={props.cdata} />
			</div>
		</>
	);
}
