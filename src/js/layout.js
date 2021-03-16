import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const fetchUrl = "https://www.swapi.tech/api/planets/1";
	useEffect(() => {
		async function Planets() {
			let result = await fetch(fetchUrl, {
				method: "GET"
			})
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(err => console.log(err));
			console.log(result);
		}
		Planets();
	}, []);
	return (
		<div className="d-flex flex-column bg-dark">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
