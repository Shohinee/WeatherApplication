/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Forth from "./Forth";
import Fifth from "./Fifth";
import Sisth from "./Sixth";
import Seventh from "./Seventh";

export default function TenDays() {
	return (
		<>
			<div
				className="currentLoc"
				style={{
					width: "100%",
					height: "40px",
					backgroundColor: "grey",
				}}>
				<h6>10 DAY FORECAST</h6>

				{/* <NavLink to={"/"}>SEE MONTHLY FORECAST</NavLink> */}
			</div>
			<div
				style={{
					height: "110px",
					backgroundColor: "#737830",
					display: "flex",
					justifyContent: "space-around",
				}}>
				<First />
				<Second />
				<Third />
				<Forth />
				<Fifth />
				<Sisth />
				<Seventh />
			</div>
		</>
	);
}
