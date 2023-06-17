import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Favorites = () => {
	const {favoritesArray} = useSelector(state => state.favorites)
	const [favorites, setFavorites] = useState(null);

	useEffect(() => {
		setFavorites(JSON.parse(window.localStorage.getItem('Favorites')));
	}, [])

	return (
		<div>
			<h2>Favorites</h2>
			<ul>
			{favorites &&
				favorites.map(favorite => <li key={favorite.id}>{favorite.name}</li>)
			}
			</ul>

		</div>
	);
};

export default Favorites;