export const fetchedAPI = () => {
	return fetch('https://api.spacexdata.com/v3/launches').then((res) =>
		res.json()
	);
};
