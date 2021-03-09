const getState = ({ getStore, getActions, setStore, setRedirect }) => {
	return {
		store: {
			peoples: null,
			planets: null,
			vehicles: null,
			favoritos: [],
			actual_user: "Ingrese a",
			actual_user_2: "su cuenta",
			token: null,
			redirect_logout: false,
			user_id: null
		},
		actions: {
			setHeaders: () => {
				const token = getStore().token;
				let headers;
				if (token) {
					headers = {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`
					};
				} else {
					headers = {
						"Content-Type": "application/json"
					};
				}
				return headers;
			},
			getPeople: url => {
				// console.log(getActions().setHeaders() + "Esto estoy viendo que es lo que trae");
				fetch(url, {
					method: "GET", // or 'PUT'
					//body: JSON.stringify(data), // data can be `string` or {object}!
					headers: getActions().setHeaders()
				})
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
				let alreadyFav = false;
				let favArr = getStore().favoritos;

				if (favArr.length === 0) {
					setStore({ favoritos: [...favArr, fav] });
					getActions().postNewFav(getStore().user_id, fav.uid, fav.info_type);
				} else {
					favArr.forEach(element => {
						if (element.uid === fav.uid) {
							alreadyFav = true;
						}
					});
					if (!alreadyFav) {
						setStore({ favoritos: [...favArr, fav] });
						getActions().postNewFav(getStore().user_id, fav.uid, fav.info_type);
					}
				}
				//setStore({ favoritos: [...getStore().favoritos, fav] });
			},
			postNewFav: (user_id, fav_uid, fav_type) => {
				let body_data = {};
				if (fav_type === "character") {
					body_data = { character_uid: fav_uid };
				} else if (fav_type === "planet") {
					body_data = { planet_uid: fav_uid };
				} else if (fav_type === "vehicle") {
					body_data = { vehicle_uid: fav_uid };
				}
				fetch(`https://3000-pink-newt-f050nwj6.ws-us03.gitpod.io/user/${user_id}/favorite`, {
					method: "POST", // or 'PUT'
					body: JSON.stringify(body_data), // data can be `string` or {object}!
					headers: getActions().setHeaders()
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			eliminar: elementoEliminar => {
				setStore({
					favoritos: getStore().favoritos.filter(fav => {
						return fav !== elementoEliminar;
					})
				});
			},
			login: () => {
				setStore({
					actual_user: sessionStorage.getItem("actual_user"),
					actual_user_2: sessionStorage.getItem("actual_user_2"),
					token: sessionStorage.getItem("u_token"),
					user_id: sessionStorage.getItem("user_id"),
					redirect_logout: false
				});
			},
			logOut: () => {
				setStore({
					actual_user: "Ingrese a",
					actual_user_2: "su cuenta",
					redirect_logout: true,
					token: null
				});
				sessionStorage.removeItem("u_token");
				sessionStorage.removeItem("actual_user");
				sessionStorage.removeItem("actual_user_2");
				sessionStorage.removeItem("user_id");
			}
		}
	};
};

export default getState;
