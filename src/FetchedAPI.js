export const FetchedAPI = () => {
	return fetch('https://api.spacexdata.com/v3/launches').then((res) =>
		res.json().catch((err) => {
			console.log(err);
		})
	);
};
