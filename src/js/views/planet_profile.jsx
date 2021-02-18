import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const PlanetProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [detallesPlaneta, setDetallesPlaneta] = useState(null);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/" + params.id)
			.then(response => response.json())
			.then(data => {
				setDetallesPlaneta(data.result.properties);
			});
	}, []);

	return (
		<div className="container">
			<br />
			<div className="row justify-content-md-center">
				<div className="col-8">
					<img
						src="https://images.unsplash.com/photo-1501523321-8ecb927b4be6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fHN0YXIlMjB3YXJzJTIwcGxhbmV0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						className="img-fluid"
						alt="..."
						width="700"
						height="300"
						style={{ border: "solid 3px black", borderRadius: "50px" }}
					/>
				</div>
				<div className="col-4">
					<h1>{detallesPlaneta !== null ? detallesPlaneta.name : ""}</h1>
					<ul>
						<li>Diameter: {detallesPlaneta !== null ? detallesPlaneta.diameter : ""}</li>
						<li>Rotation period: {detallesPlaneta !== null ? detallesPlaneta.rotation_period : ""}</li>
						<li>Orbital period: {detallesPlaneta !== null ? detallesPlaneta.orbital_period : ""}</li>
						<li>Gravity: {detallesPlaneta !== null ? detallesPlaneta.gravity : ""}</li>
						<li>Population: {detallesPlaneta !== null ? detallesPlaneta.population : ""}</li>
						<li>Climate: {detallesPlaneta !== null ? detallesPlaneta.climate : ""}</li>
						<li>Terrain: {detallesPlaneta !== null ? detallesPlaneta.terrain : ""}</li>
						<li>Surface water: {detallesPlaneta !== null ? detallesPlaneta.surface_water : ""}</li>
						<li>Created: {detallesPlaneta !== null ? detallesPlaneta.created : ""}</li>
						<li>Edited: {detallesPlaneta !== null ? detallesPlaneta.edited : ""} </li>
					</ul>
				</div>
			</div>
		</div>
	);
};
