import React from 'react';
import {Title, Wrapper} from "../../ui/common/Common.styled.jsx";
import {Card, CardImage, CardsBlock, CardTitle} from "../../ui/cards/Cards.styled.jsx";
import db from "../../../data/team.json";
import styles from './About.module.css';

const About = () => {
	return (
		<Wrapper>
			<Title>About us</Title>
			<CardsBlock>
				{
					db.map(member => (
							<Card className={'team-card'} key={member.id}>
								<CardTitle>{member.name}</CardTitle>
								<CardImage src={member.image}/>
								<div className={styles['member-position']}>{member.position}</div>
							</Card>
						)
					)
				}
			</CardsBlock>
		</Wrapper>
	);
};

export default About;