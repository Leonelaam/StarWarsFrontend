import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="col-md-4">
				<div className="card">
					<img
						src="https://images.unsplash.com/photo-1576074622232-fbbeb7c27cba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjI1fHxzdGFyJTIwd2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
						width="450"
						height="200"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<div className=" d-flex justify-content-between">
							<Link to={"/vehicle_profile/" + props.uid}>
								<button className="btn btn-info">Learn More</button>
							</Link>
							<i
								onClick={() => {
									actions.favoritos(props);
								}}
								className={props.liked ? "far fa-heart seleccionado" : "far fa-heart"}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
