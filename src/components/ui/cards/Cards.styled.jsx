import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {baseBoxShadow} from "../../../shared/constants/variables.js";
import {tablet} from "../../../shared/constants/mediaQueries.js";

const CardsBlock = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 40px;
`;

const Card = styled(NavLink)`
  background: var(--card-color);
	border: 2px solid var(--accent-color);
	width: 350px;
	height: 500px;
	border-radius: 20px;
  display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: var(--text-color);
  box-shadow: ${baseBoxShadow};
	
	&.team-card {
		height: 420px;
	}

  @media (max-width: ${tablet}) {
	  text-align: center;
    width: 300px;
	  font-size: 16px;
  }
	
`;

const CardTitle = styled.h4`
	font-size: 25px;
	margin: 0;
	padding: 15px 5px;
`;

const CardDescription = styled.p`
  display: flex;
	align-items: center;
	height: 150px;
	text-align: center;
	padding: 15px 20px;
	margin: 0;
  border-bottom: 2px solid var(--accent-color);
	letter-spacing: 1.2px;
	font-weight: 600;
`;

const CardImage = styled.img`
	width: 100%;
	height: 240px;
	object-fit: cover;
  border-top: 2px solid var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
`;

export {Card, CardDescription, CardsBlock, CardTitle, CardImage}




