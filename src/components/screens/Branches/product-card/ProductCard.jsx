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
import {Button} from "antd";

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
						{
							productInfo?.store.length ? <Button target={"_blank"} href={productInfo.store}>Read more</Button> : null
						}
					</DescriptionBlock>
				</ProductCardBlock>
			}
		</>
	);
};

export default ProductCard;