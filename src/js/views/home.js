import React, {useEffect, useContext} from "react";
import {Context} from "../store/appContext.js"
import Card from "../component/card.jsx";

export const Home = () => {
	const {store, actions} = useContext(Context);

	useEffect (() => {
		actions.getCharacters();
		actions.getVehicles();
		actions.getPlanets();
		
	},[])

	return(
		<>
			<h3 className="text-danger ms-5 my-2">Characters</h3>
			<div className="d-flex">
				{store.characters.map((elem, index) => 
					<Card key={index} title={elem.name} uid={elem.uid} category="characters" />
				)}
			</div>
			<h3 className="text-danger ms-5 my-2">Vehicles</h3>
			<div className="d-flex">
				{store.vehicles.map((elem, index) => 
					<Card key={index} title={elem.name} uid={elem.uid} category="vehicles" />
				)}
			</div>
			<h3 className="text-danger ms-5 my-2">Planets</h3>
			<div className="d-flex">
				{store.planets.map((elem, index) => 
					<Card key={index} title={elem.name} uid={elem.uid} category="planets" />
				)}
			</div>
		</>
	)
}
