import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { objectOf } from "prop-types";
import { Redirect } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	// console.log(store.actual_user_2);

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

			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle bg-danger"
					style={{ fontSize: "25px" }}
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Usuario: {store.actual_user && `${store.actual_user} ${store.actual_user_2}`}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<div
						className="dropdown-item"
						onClick={() => {
							actions.logOut();
						}}>
						Logout
					</div>
				</div>
				{store.redirect_logout ? <Redirect to="/" /> : null}
			</div>

			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle bg-danger"
					style={{ fontSize: "25px" }}
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Menu
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<Link to="/" className="dropdown-item">
						Home
					</Link>
					<Link to="/login" className="dropdown-item">
						Login
					</Link>
					<Link to="/register" className="dropdown-item">
						Registrarse
					</Link>
				</div>
			</div>

			<div className="dropdown dropleft">
				<button
					className="btn btn-secondary dropdown-toggle bg-danger"
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
