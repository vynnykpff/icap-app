import React from 'react';
import {BranchesBlock, BranchesQuote, BranchesTitle, FavoriteButton} from "./Branches.styled.jsx";
import {Card, CardDescription, CardsBlock, CardTitle, Image, Wrapper} from "../../ui/common/Common.styled.jsx";
import db from '../../../data/products.json';
import {useParams} from "react-router-dom";

const Branches = () => {
	const {id} = useParams();

	return (
		<Wrapper>
			<BranchesBlock>
				<BranchesTitle>Our Projects</BranchesTitle>
				<CardsBlock>
					{
						db.products.map(product => (
							<Card key={product.id} to={`${product.url}`}>
								<CardTitle>{product.name}</CardTitle>
								<Image src={product.image}/>
								<CardDescription>{product.description}</CardDescription>
								<FavoriteButton/>
							</Card>
						))
					}
				</CardsBlock>
				<BranchesQuote>Opportunities don't happen, you create them. — <span style={{color: 'var(--accent-color)'}}>Chris Grosser</span></BranchesQuote>
			</BranchesBlock>
		</Wrapper>
	);
};

export default Branches;