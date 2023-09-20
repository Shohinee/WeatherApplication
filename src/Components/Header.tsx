/** @format */

export default function Header(props: any) {
	return (
		<div>
			<nav
				className="navbar navbar-expand-lg navbar-light "
				style={{ width: "100%", position: "unset" }}>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					{props.country
						? props.country.reverse().map((item: any, index: any) => (
								<div
									key={index}
									style={{
										height: "100%",
										width: "100px",
										color: "white",
									}}
									className="nav"
									onClick={() => {
										props.onclick2(props.country[index]);
									}}>
									{item}
								</div>
						  ))
						: null}
				</div>
			</nav>
		</div>
	);
}
