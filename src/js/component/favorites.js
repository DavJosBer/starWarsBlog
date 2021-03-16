import React from "react";
import { Link } from "react-router-dom";

export const Favorites = () => {
	return (
		<>
			<div className="dropdown">
				<button
					className="btn btn-info dropdown-toggle d-flex justify-content-between align-items-center"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<span className="text-white disabled mx-2">0</span>
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item">Action</a>
				</div>
			</div>
		</>
	);
};
