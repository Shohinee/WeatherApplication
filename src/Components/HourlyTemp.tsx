/** @format */

export default function HourlyTemp({ data }: any) {
	return (
		<div
			style={{
				height: "160px",
				width: "120px",
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "row",
				justifyContent: "space-around",
				border: "1px solid white",
				borderRadius: "10px",
			}}>
			<span>
				<img src={data.condition.icon} alt="" />
			</span>

			<span>{data.temp_c}</span>
			<span>{data.condition.text}</span>
			<span>{data.cloud}</span>
			<span>{data.wind_kph}</span>
		</div>
	);
}
