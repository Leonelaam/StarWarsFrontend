import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const PersonProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [detallesPersona, setDetallesPersona] = useState(null);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.id)
			.then(response => response.json())
			.then(data => {
				setDetallesPersona(data.result.properties);
			});
	}, []);

	return (
		<div className="container">
			<br />
			<div className="row justify-content-md-center">
				<div className="col-8">
					<img
						src="https://images.unsplash.com/photo-1599002762948-19068b069803?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhciUyMHdhcnMlMjBwZXJzb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						className="img-fluid"
						alt="..."
						width="600"
						height="300"
						style={{ border: "solid 3px black", borderRadius: "50px" }}
					/>
				</div>
				<div className="col-4">
					<h1>{detallesPersona !== null ? detallesPersona.name : ""}</h1>
					<ul>
						<li>Height: {detallesPersona !== null ? detallesPersona.height : ""}</li>
						<li>Mass: {detallesPersona !== null ? detallesPersona.mass : ""}</li>
						<li>Hair color: {detallesPersona !== null ? detallesPersona.hair_color : ""}</li>
						<li>Skin color: {detallesPersona !== null ? detallesPersona.skin_color : ""}</li>
						<li>Eye color: {detallesPersona !== null ? detallesPersona.eye_color : ""}</li>
						<li>Birth year: {detallesPersona !== null ? detallesPersona.birth_year : ""}</li>
						<li>Gender: {detallesPersona !== null ? detallesPersona.gender : ""}</li>
						<li>Created: {detallesPersona !== null ? detallesPersona.created : ""}</li>
						<li>Edited: {detallesPersona !== null ? detallesPersona.edited : ""}</li>
					</ul>
				</div>
			</div>
			<br />
		</div>
	);
};
