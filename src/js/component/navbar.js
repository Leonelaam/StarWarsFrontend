import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-primary">
			<Link to="/">
				<a className="navbar-brand">
					<img
						src="https://e7.pngegg.com/pngimages/191/778/png-clipart-logo-star-wars-brand-star-wars-logo-text-logo.png"
						width="50"
						height="50"
						className="d-inline-block align-top"
						alt=""
						style={{ border: "solid 1px black", borderRadius: "50px" }}
					/>
				</a>
			</Link>

			<Link to="/" className="badge badge-info" style={{ fontSize: "30px" }}>
				Home
			</Link>

			<div className="dropdown dropleft">
				<button
					className="btn btn-secondary dropdown-toggle bg-info"
					style={{ fontSize: "25px" }}
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favoritos.map((item, index) => {
						let path = null;
						if (item.url.includes("people")) {
							path = `/person_profile/${item.uid}`;
						} else if (item.url.includes("planets")) {
							path = `/planet_profile/${item.uid}`;
						} else if (item.url.includes("starships")) {
							path = `/vehicle_profile/${item.uid}`;
						}

						return (
							<div className="d-flex justify-content-center align-items-center" key={index}>
								<Link to={path} className="dropdown-item">
									{item.name}
								</Link>
								<i
									onClick={() => {
										actions.eliminar(item);
									}}
									className="fas fa-trash mr-2"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
