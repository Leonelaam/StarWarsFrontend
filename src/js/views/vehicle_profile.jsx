import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const VehiclesProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [detallesVehiculos, setDetallesVehiculos] = useState(null);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/starships/" + params.id)
			.then(response => response.json())
			.then(data => {
				setDetallesVehiculos(data.result.properties);
			});
	}, []);

	return (
		<div className="container">
			<br />
			<div className="row justify-content-md-center">
				<div className="col-8">
					<img
						src="https://images.unsplash.com/photo-1578374173705-08648798df55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhciUyMHdhcnMlMjB2ZWhpY2xlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						className="img-fluid"
						alt="..."
						width="700"
						height="300"
						style={{ border: "solid 3px black", borderRadius: "50px" }}
					/>
				</div>
				<div className="col-4">
					<h1>{detallesVehiculos !== null ? detallesVehiculos.name : ""}</h1>
					<ul>
						<li>Model: {detallesVehiculos !== null ? detallesVehiculos.model : ""}</li>
						<li>Starship class: {detallesVehiculos !== null ? detallesVehiculos.starship_class : ""}</li>
						<li>Manufacturer: {detallesVehiculos !== null ? detallesVehiculos.manufacturer : ""}</li>
						<li>Cost in credits: {detallesVehiculos !== null ? detallesVehiculos.cost_in_credits : ""}</li>
						<li>Length: {detallesVehiculos !== null ? detallesVehiculos.length : ""}</li>
						<li>Crew: {detallesVehiculos !== null ? detallesVehiculos.crew : ""}</li>
						<li>Passengers: {detallesVehiculos !== null ? detallesVehiculos.passengers : ""}</li>
						<li>
							Max atmosphering speed:{" "}
							{detallesVehiculos !== null ? detallesVehiculos.max_atmosphering_speed : ""}
						</li>
						<li>
							Hyperdrive rating: {detallesVehiculos !== null ? detallesVehiculos.hyperdrive_rating : ""}
						</li>
						<li>MGLT: {detallesVehiculos !== null ? detallesVehiculos.MGLT : ""}</li>
						<li>Cargo capacity: {detallesVehiculos !== null ? detallesVehiculos.cargo_capacity : ""}</li>
						<li>Consumables: {detallesVehiculos !== null ? detallesVehiculos.consumables : ""}</li>
						<li>Pilots: {detallesVehiculos !== null ? detallesVehiculos.pilots : ""}</li>
						<li>Created: {detallesVehiculos !== null ? detallesVehiculos.created : ""}</li>
						<li>Edited: {detallesVehiculos !== null ? detallesVehiculos.edited : ""}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
