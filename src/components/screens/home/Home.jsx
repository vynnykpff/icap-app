import {Title, Wrapper} from "../../ui/common/Common.styled.jsx";
import {List} from "antd";
import React from "react";
import {ListItem, ListItemWrapper} from "../impressum/Impressum.styled.jsx";
import styles from './Home.module.css';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

	const data = {
		services: [
			'IOS & Android App-Entwicklung',
			'Info-Webseiten',
			'Web-Solutions',
			'74081 Heilbronn',
			'Datenbanken & Cloud Erstellung/Management',
			'Einrichtung von Workstations',
			'Datenschutz & Compliance',
		],
		icons: [
			'https://cdn.discordapp.com/attachments/1118989514489217054/1120036824677621810/webIcon.png',
			'https://cdn.discordapp.com/attachments/1118989514489217054/1120035935296438272/databaselogo.png',
			'https://cdn.discordapp.com/attachments/1118989514489217054/1120035935518740560/quotelyIcon.png',
			'https://cdn.discordapp.com/attachments/1118989514489217054/1120035935787159632/appleIcon.png',
			'https://cdn.discordapp.com/attachments/1118989514489217054/1120035936055607377/androidIcon.png',
			'https://cdn.discordapp.com/attachments/1118989514489217054/1120035936311464066/crmIcon.png',
		]
	}

	const renderItem = (item) => {
		return (
			<ListItemWrapper>
				<ListItem>{item}</ListItem>
			</ListItemWrapper>
		);
	};

	return (
		<Wrapper>
			<Title>
				Wir bringen Unternehmen
				ins digitale Zeitalter!
			</Title>

			<div className={styles['icons-block']}>
				{
					data.icons.map(icon => <img key={uuidv4()} className={styles.icon} src={icon} alt="icon"/>)
				}
			</div>

			<List
				dataSource={data.services}
				renderItem={renderItem}
			/>

		</Wrapper>
	);
};

export default Home;