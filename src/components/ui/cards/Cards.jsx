import React, {useEffect} from 'react';
import db from "../../../data/products.json";
import {TbHeartMinus, TbHeartPlus} from "react-icons/tb";
import {useDispatch, useSelector} from "react-redux";
import {initializeStatusCards, toggleCardStatus} from "../../../store/status-card/statusCard.slice.js";
import {Card, CardDescription, CardImage, CardsBlock, CardTitle} from "./Cards.styled.jsx";
import {Button} from "../common/Common.styled.jsx";

const Cards = () => {
	const statusCards = useSelector((store) => store.statusCard.statusCards);
	const dispatch = useDispatch();

	useEffect(() => {
		const prevFavorites = JSON.parse(window.localStorage.getItem("Favorites")) || [];
		const statusCards = {};
		prevFavorites.forEach((favorite) => {
			statusCards[favorite.id] = {status: true};
		});
		dispatch(initializeStatusCards(statusCards));
	}, [dispatch]);

	const toggleStatusCard = (id) => {
		const prevFavorites = JSON.parse(window.localStorage.getItem("Favorites")) || [];
		const index = prevFavorites.findIndex((favorite) => favorite.id === id);
		if (index !== -1) {
			prevFavorites.splice(index, 1);
			window.localStorage.setItem("Favorites", JSON.stringify(prevFavorites));
			dispatch(toggleCardStatus({cardId: id, status: false}));
		} else {
			const product = db.products.find((product) => product.id === id);
			if (product) {
				prevFavorites.push(product);
				window.localStorage.setItem("Favorites", JSON.stringify(prevFavorites));
				dispatch(toggleCardStatus({cardId: id, status: true}));
			}
		}
	};

	const handleClick = ({product, e}) => {
		e.preventDefault();
		toggleStatusCard(product.id);
	};

	return (
		<CardsBlock>
			{db.products.map((product) => (
				<Card key={product.id} to={`${product.url}`}>
					<CardTitle>{product.name}</CardTitle>
					<CardImage src={product.image}/>
					<CardDescription>{product.description}</CardDescription>
					<Button
						className={statusCards[product.id] && statusCards[product.id].status ? "addStatus" : "removeStatus"}
						onClick={(e) => handleClick({product, e})}
					>
						{statusCards[product.id] && statusCards[product.id].status ? <TbHeartMinus/> : <TbHeartPlus/>}
					</Button>
				</Card>
			))}
		</CardsBlock>
	);
};

export default Cards;