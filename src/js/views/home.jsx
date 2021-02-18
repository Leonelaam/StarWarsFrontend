import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

import { PersonCard } from "../component/person_card.jsx";
import { PlanetCard } from "../component/planet_card.jsx";
import { VehiclesCard } from "../component/vehicles_card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<br />
			{/* Aqui van las tarjetas de los personajes */}
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-danger">Characters</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.peoples &&
							store.peoples.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});
								return <PersonCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPeople(store.peoples.previous);
						}}
						type="button"
						className="btn btn-info miBoton">
						Previous
					</button>
				</div>

				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPeople(store.peoples.next);
						}}
						type="button"
						className="btn btn-info">
						Next
					</button>
				</div>
			</div>
			<br />
			{/* Aqui van las tarjetas de los planetas */}
			<br />
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-danger">Planets</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.planets &&
							store.planets.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});
								return <PlanetCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPlanets(store.planets.previous);
						}}
						type="button"
						className="btn btn-info miBoton">
						Previous
					</button>
				</div>

				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPlanets(store.planets.next);
						}}
						type="button"
						className="btn btn-info">
						Next
					</button>
				</div>
			</div>

			<br />

			{/* Aqui van las tarjetas de los vehiculos */}
			<br />
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-danger">Vehicles</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.vehicles &&
							store.vehicles.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});

								return <VehiclesCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getVehicles(store.vehicles.previous);
						}}
						type="button"
						className="btn btn-info miBoton">
						Previous
					</button>
				</div>

				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getVehicles(store.vehicles.next);
						}}
						type="button"
						className="btn btn-info">
						Next
					</button>
				</div>
			</div>

			<br />
		</div>
	);
};
