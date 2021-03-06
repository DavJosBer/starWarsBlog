import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "../js/store/appContext";

import { Home } from "./views/home";
import { CardInfo } from "../js/views/characterInfo";
import { PlanetInfo } from "../js/views/planetInfo";
import injectContext from "./store/appContext";

import { Link, useParams } from "react-router-dom";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column bg-dark">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/characters/:charactid">
						<CardInfo />
					</Route>
					<Route exact path="/planets/:planetid">
						<PlanetInfo />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
