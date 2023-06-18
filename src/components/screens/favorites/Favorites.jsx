import React, {useEffect, useState} from "react";
import {Button, Title, Wrapper} from "../../ui/common/Common.styled.jsx";
import {Card, CardDescription, CardImage, CardsBlock, CardTitle} from "../../ui/cards/Cards.styled.jsx";
import {branches} from "../../../shared/constants/routes.js";
import {IoMdCloseCircleOutline} from "react-icons/io";

const Favorites = () => {
	const [favorites, setFavorites] = useState(null);
	const [removeCard, setRemoveCard] = useState(null);

	useEffect(() => {
		setFavorites(JSON.parse(window.localStorage.getItem('Favorites')));
		setRemoveCard(false);
	}, [removeCard]);

	const handleClick = ({e, favorite}) => {
		e.preventDefault();
		const prevFavorites = JSON.parse(window.localStorage.getItem("Favorites")) || [];
		const removeFavorites = prevFavorites.filter(prevFavorite => prevFavorite.id !== favorite.id);
		window.localStorage.setItem('Favorites', JSON.stringify(removeFavorites));
		setRemoveCard(true);
	};

	return (
		<Wrapper>
			<Title>Favorites</Title>
			<CardsBlock>
				{favorites?.length ?
					favorites.map(favorite => <Card key={favorite.id} to={`/${branches}/${favorite.url}`}>
						<CardTitle>{favorite.name}</CardTitle>
						<CardImage src={favorite.image}/>
						<CardDescription>{favorite.description}</CardDescription>
						<Button onClick={(e) => handleClick({e, favorite})}><IoMdCloseCircleOutline/></Button>
					</Card>)
					: <div>You have not favorites cards</div>
				}
			</CardsBlock>
		</Wrapper>
	);
};

export default Favorites;