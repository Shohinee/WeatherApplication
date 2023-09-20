/** @format */

import HourlyTemp from "../HourlyTemp";
import { Tab, Tabs } from "react-bootstrap";
import moment from "moment";
import "../../App.css";

export default function TenDays(props: any) {
	return (
		<>
			<div
				className="tnds"
				style={{
					height: "110px",
					display: "block",
					marginTop: "30px",
				}}>
				<Tabs
					defaultActiveKey="home"
					transition={false}
					id="noanim-tab-example"
					className="mb-3">
					{props.data
						? props.data.forecastday.map((item1: any, index: number) => (
								<Tab
									key={index}
									eventKey={`event-${index}`}
									title={
										<div
											style={{
												height: "100%",
												width: "130px",
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "space-around",
												border: "1px solid white",
												borderRadius: "10px",
												background: "transparent",
											}}>
											<span>{moment(item1.date).format("dddd")}</span>
											<span>
												<img src={item1.day.condition.icon} alt="" />
											</span>
											<span>{item1.day.maxtemp_c}</span>
											<span>{item1.day.mintemp_c}</span>
										</div>
									}>
									<div
										style={{
											display: "flex",
											gap: "5px",
											flexWrap: "wrap",
											padding: "10px",
										}}>
										{item1.hour.map((item: any, index: any) => (
											<HourlyTemp data={item} key={index} />
										))}
									</div>
								</Tab>
						  ))
						: null}
				</Tabs>
			</div>
		</>
	);
}
