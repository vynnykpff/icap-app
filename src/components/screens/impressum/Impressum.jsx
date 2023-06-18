import React from 'react';
import {Title, Wrapper} from '../../ui/common/Common.styled.jsx';
import {List} from 'antd';
import {ListItem, ListItemWrapper} from "./Impressum.styled.jsx";

const Impressum = () => {
	const data = [
		'Angaben gemäß § 5 TMG',
		'ICAP Group GmbH',
		'Krummlandstraße, 22',
		'74081 Heilbronn',
		'Handelsregister: HRB 783823',
		'Registergericht: Amtsgericht Stuttgart',
		'Vertreten durch: Volker Hütter',
	];

	const renderItem = (item) => {
		return (
			<ListItemWrapper>
				<ListItem>{item}</ListItem>
			</ListItemWrapper>
		);
	};

	return (
		<Wrapper>
			<Title>Impressum - Legal Notice</Title>
			<List
				dataSource={data}
				renderItem={renderItem}
			/>
		</Wrapper>
	);
};

export default Impressum;
