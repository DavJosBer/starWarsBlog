import React from "react";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";

export const Home = () => {
	return (
		<>
			<div className="container">
				<div className="mt-4 py-3">
					<h1 className="text-white" style={{ textShadow: "0 0 8px #ffc107" }}>
						Characters
					</h1>
				</div>
				<div className="row flex-nowrap py-2" style={{ overflowX: "auto" }}>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardCharacter />
					</div>
				</div>

				<div className="mt-4 py-3">
					<h1 className="text-white" style={{ textShadow: "0 0 8px #ffc107" }}>
						Planets
					</h1>
				</div>
				<div className="row flex-nowrap py-2" style={{ overflowX: "auto" }}>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
					<div className="col-4" style={{ display: "inline-block", float: "none" }}>
						<CardPlanet />
					</div>
				</div>
			</div>
		</>
	);
};
