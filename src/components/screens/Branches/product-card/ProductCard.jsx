import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import productCard from '../../../../data/productsCard.json';
import {
	DescriptionBlock,
	ProductCardAbout,
	ProductCardBlock,
	ProductCardImage,
	ProductCardTitle
} from "./ProductCard.styled.jsx";

const ProductCard = () => {
	const {id} = useParams();
	const [productInfo, setProductInfo] = useState()

	useEffect(() => {
		productCard[id].map(product => setProductInfo(product));
	}, [id]);

	return (
		<>
			{
				productInfo && <ProductCardBlock>
					<ProductCardImage src={productInfo.image} alt=""/>
					<DescriptionBlock>
						<ProductCardTitle>{productInfo.name}</ProductCardTitle>
						<ProductCardAbout>{productInfo.description}</ProductCardAbout>
					</DescriptionBlock>
				</ProductCardBlock>
			}
		</>
	);
};

export default ProductCard;