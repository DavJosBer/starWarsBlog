import React from "react";
import "../../styles/home.scss";

export const CardCharacter = () => {
	return (
		<>
			<div className="card">
				<img
					src="https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/301686/301686_400x200.jpg"
					alt=""
					className="card-img-top"
				/>
				<div className="card-body">
					<h3 className="card-title">Title</h3>
					<p className="card-text">Gender:</p>
					<p className="card-text">Hair-Color:</p>
					<p className="card-text">Eyes-Color:</p>
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
