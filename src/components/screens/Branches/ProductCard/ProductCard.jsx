import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import productCard from '../../../../data/productsCard.json';

const ProductCard = () => {
	const {id} = useParams();
	const [productInfo, setProductInfo] = useState()

	useEffect(() => {
		productCard[id].map(product => setProductInfo(product));
	}, [id]);

	return (
		<>
			{
				productInfo && <div style={{display: 'flex', color: '#fff', justifyContent: 'space-between'}}>
					<img width={300} src={productInfo.image} alt=""/>
					<div>
						<h3>{productInfo.name}</h3>
						<p>{productInfo.description}</p>
					</div>
				</div>
			}
		</>
	);
};

export default ProductCard;