import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home.jsx";
import { PlanetProfile } from "./views/planet_profile.jsx";
import { PersonProfile } from "./views/person_profile.jsx";
import { VehiclesProfile } from "./views/vehicle_profile.jsx";
import { Register } from "./views/register.jsx";
import { Login } from "./views/login.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/person_profile/:id">
						<PersonProfile />
					</Route>
					<Route exact path="/planet_profile/:id">
						<PlanetProfile />
					</Route>
					<Route exact path="/vehicle_profile/:id">
						<VehiclesProfile />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
