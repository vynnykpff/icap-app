import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

const Wrapper = styled.div`
	margin: 40px 0;
`;



const CardsBlock = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 40px;
`;

const Card = styled(NavLink)`
	background-color: #444;
	width: 350px;
	height: 500px;
	border-radius: 20px;
	border: 2px solid #ff6600;
  display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: var(--text-color);
`;

const CardTitle = styled.h4`
	font-size: 25px;
	margin: 0;
	padding: 15px 0;
`;

const Image = styled.img`
	width: 100%;
	height: 240px;
	object-fit: cover;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`;

const CardDescription = styled.p`
  display: flex;
	align-items: center;
	height: 150px;
	text-align: center;
	padding: 15px 20px;
	margin: 0;
  border-bottom: 2px solid #ccc;
	letter-spacing: 1.2px;
`;


export {Wrapper, Card, CardTitle, CardsBlock, Image, CardDescription};