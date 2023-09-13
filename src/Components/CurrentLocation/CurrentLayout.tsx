/** @format */
import "./Currentlocation.css";
import CurrentWeather from "./CurrentWeather";
import Map from "./map";
import SunMoon from "./SunMoon";
export default function Currentlocation(props: any) {
	return (
		<>
			<div
				className="currentLoc"
				style={{
					width: "100%",
					height: "40px",
					backgroundColor: "grey",
				}}>
				<h6>Baraut, Up</h6>
			</div>
			<div
				className="Cparent"
				style={{
					width: "100%",
					height: "200px",
					backgroundColor: "cyan",
					display: "flex",
					justifyContent: "space-around",
					alignItems: "flex-end",
				}}>
				<CurrentWeather cdata={props.cdata} />
				<Map />
				<SunMoon />
			</div>
		</>
	);
}
