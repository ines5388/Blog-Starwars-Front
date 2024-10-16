import React,{useContext} from "react";
import {Context} from "../store/appContext.js"
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store,actions} = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<Link to="/">
						<img className="ms-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/100px-Star_wars2.svg.png" alt="Star Wars" />
				</Link>
				<div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle bg-primary text-white rounded btn-lg" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="rounded-circle bg-secondary m-1">{store.favorites.length}</span>
					</a>
					<ul className="dropdown-menu">
						{store.favorites.length === 0 ? <li className="text-center">(empty)</li>
						: store.favorites.map((elem, index) =>
						<li key={index}><a className="dropdown-item">{elem}</a><button onClick={() => actions.removeFavorite(elem)} className="btn p-0 px-1">
						<i className="fas fa-trash"></i>
					</button>
						</li>
						)}
					</ul>
					</li>
				</ul>
				</div>
			</div>
		</nav>
	)
};

