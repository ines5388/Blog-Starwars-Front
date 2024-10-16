const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets:[],
			details:{},
			favorites:[]
		},
		actions: {
			getCharacters: () => {
				fetch(`https://www.swapi.tech/api/people`)
				.then(response => response.json())
				.then(data => setStore({characters: data.results}))
				.then(error => console.log(error))
			},
			getVehicles: () => {
				fetch(`https://www.swapi.tech/api/vehicles`)
				.then(response => response.json())
				.then(data => setStore({vehicles: data.results}))
				.then(error => console.log(error))
			},
			getPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets`)
				.then(response => response.json())
				.then(data => setStore({planets: data.results}))
				.then(error => console.log(error))
			},
			getDetails: (category, uid) => {
				fetch(`https://www.swapi.tech/api/${category}/${uid}`)
				.then(response => response.json())
				.then(data => setStore({
					details: {
							...data.result.properties,
							description: data.result.description
						}}))
				.then(error => console.log(error))
			},
			addFavorite: (name) => {
				let newListFavorites = getStore().favorites.concat(name);
				setStore({favorites: newListFavorites})
			},
			removeFavorite: (name) => {
				let newListFavorites = getStore().favorites.filter((elem) => elem !== name);
				setStore({favorites: newListFavorites})
			}
		}
	};
};

export default getState;
