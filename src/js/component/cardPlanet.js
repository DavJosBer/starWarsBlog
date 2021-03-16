import React from "react";
import "../../styles/home.scss";

export const CardPlanet = () => {
	return (
		<>
			<div className="card">
				<img
					src="https://culturawarsie.files.wordpress.com/2020/05/tuskens4.jpg?w=400&h=200&crop=1"
					alt=""
					className="card-img-top"
				/>
				<div className="card-body">
					<h3 className="card-title">Title</h3>
					<p className="card-text">Population:</p>
					<p className="card-text">Terrain:</p>
					<div className="d-flex justify-content-between align-items-center">
						<button className="btn btn-info">Learn More!</button>
						<button className="btn btn-warning">
							<i className="far fa-heart text-white" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
