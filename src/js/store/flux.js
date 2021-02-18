const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: null,

			planets: null,

			vehicles: null,

			favoritos: []
		},
		actions: {
			getPeople: url => {
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({ peoples: data });
					});
			},
			getPlanets: url => {
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data });
					});
			},
			getVehicles: url => {
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({ vehicles: data });
					});
			},
			getDetallesPersonas: id => {
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(response => response.json())
					.then(data => {
						return data.result.properties;
					});
			},
			getDetallesPlanetas: id => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(response => response.json())
					.then(data => {
						return data.result.properties;
					});
			},
			getDetallesVehiculos: id => {
				fetch("https://www.swapi.tech/api/starships/" + id)
					.then(response => response.json())
					.then(data => {
						return data.result.properties;
					});
			},
			favoritos: fav => {
				setStore({ favoritos: [...getStore().favoritos, fav] });
			},
			eliminar: elementoEliminar => {
				setStore({
					favoritos: getStore().favoritos.filter(fav => {
						return fav !== elementoEliminar;
					})
				});
			}
		}
	};
};

export default getState;
