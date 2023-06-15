import React from 'react';
import {BranchesBlock, BranchesQuote, BranchesTitle, FavoriteButton} from "./Branches.styled.jsx";
import {
	Card,
	CardContent,
	CardDescription,
	CardsBlock,
	CardTitle,
	Image,
	ImageBlock,
	Wrapper
} from "../../ui/common/Common.styled.jsx";
import product from '../../../assets/images/products/quotely.jpg';
import {branchesCard} from "../../../shared/constants/routes.js";

const Branches = () => {
	return (
		<Wrapper>
			<BranchesBlock>
				<BranchesTitle>Our Projects</BranchesTitle>
				<CardsBlock>
					<Card to={branchesCard}>
						<CardTitle>Card 1</CardTitle>
						<Image src={product}/>
						<CardDescription>Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern
							von Stars und Naturfotos.</CardDescription>
						<FavoriteButton/>
					</Card>
					<Card>
						<CardTitle>Card 1</CardTitle>
						<Image src={product}/>
						<CardDescription>Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern
							von Stars und Naturfotos.</CardDescription>
						<FavoriteButton/>
					</Card>
					<Card>
						<CardTitle>Card 1</CardTitle>
						<Image src={product}/>
						<CardDescription>Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern
							von Stars und Naturfotos.</CardDescription>
						<FavoriteButton/>
					</Card>
					<Card>
						<CardTitle>Card 1</CardTitle>
						<Image src={product}/>
						<CardDescription>Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern
							von Stars und Naturfotos.</CardDescription>
						<FavoriteButton/>
					</Card>
					<Card>
						<CardTitle>Card 1</CardTitle>
						<Image src={product}/>
						<CardDescription>Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern
							von Stars und Naturfotos.</CardDescription>
						<FavoriteButton/>
					</Card>
					<Card>
						<CardTitle>Card 1</CardTitle>
						<Image src={product}/>
						<CardDescription>Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern
							von Stars und Naturfotos.</CardDescription>
						<FavoriteButton/>
					</Card>
				</CardsBlock>
				<BranchesQuote>Opportunities don't happen, you create them. — <span style={{color: 'var(--accent-color)'}}>Chris Grosser</span></BranchesQuote>
			</BranchesBlock>
		</Wrapper>
	);
};

export default Branches;