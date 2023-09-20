/** @format */

import { useEffect, useState } from "react";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Location } from "./currentLocation";
import "../App.css";
export default function Navbar(props: any) {
	const [data, setData] = useState<Location[] | []>([]);
	const [country, setCountery] = useState("Kolkata");

	const getLocation = (query: string) => {
		if (query !== "") {
			fetch(
				"https://api.weatherapi.com/v1/search.json?key=a98a94a9ca204e809cd50811231209&q=" +
					query
			)
				.then((response) => response.text())
				.then((result) => {
					let data: Location[] = JSON.parse(result);
					setData(data);
				})
				.catch((error) => console.log("The Error is : ", error));
		}
	};
	const handleSelect = (items: any) => {
		setCountery(items.name);
	};

	const displayData = () => {
		props.onclick1(country);
	};
	const handleSearch = (string: string) => {
		getLocation(string);
	};
	function formatresult(item: any) {
		return (
			<>
				<span style={{ display: "block", textAlign: "left", color: "black" }}>
					{item.name} {item.country}
				</span>
			</>
		);
	}

	useEffect(() => {
		props.onclick1(country);
	}, []);

	return (
		<nav
			className="navbar navbar-light  justify-content-between"
			style={{ width: "100%", position: "unset" }}>
			<a className="navbar-brand" style={{ color: "whitesmoke" }}>
				Weather Application
			</a>

			<div className="searchComp" style={{ width: "400px" }}>
				<ReactSearchAutocomplete
					className="search-bar"
					items={data}
					fuseOptions={{ keys: ["name", "region", "country", "url"] }}
					onSearch={handleSearch}
					onSelect={handleSelect}
					formatResult={formatresult}
					placeholder="Search Location"
					inputDebounce={1000}
				/>
			</div>
			<button
				className="btn btn-outline-success my-2 my-sm-0"
				type="button"
				onClick={displayData}>
				Search
			</button>
		</nav>
	);
}
