import React, {useEffect, useState} from 'react';
import {IoIosClose, IoIosMenu} from "react-icons/io";
import {BiMoon, BiPhoneCall, BiSun} from "react-icons/bi";
import {
	LogoImage,
	MobileNav,
	Nav,
	NavAdditionalList,
	NavItem,
	NavItemAnchor,
	NavItemTheme,
	NavList
} from "./Navbar.styled.jsx";
import {Container} from "../../layout/Layout.styled.jsx";
import {useDispatch, useSelector} from "react-redux";
import {about, branches, contacts, favorites, home, impressum} from "../../../../shared/constants/routes.js";
import {set} from "../../../../store/theme/theme.slice.js";
import lightDesktopLogo from '../../../../assets/images/desktop-logo/icap-light-logo.png';
import darkDesktopLogo from '../../../../assets/images/desktop-logo/icap-dark-logo.png';

import darkMobileLogo from '../../../../assets/images/mobile-logo/icap-mobile-dark-logo.png';
import lightMobileLogo from '../../../../assets/images/mobile-logo/icap-mobile-light-logo.png';
import {AiOutlineHeart} from "react-icons/ai";


const Navbar = () => {
	const [nav, setNav] = useState(false);
	const theme = useSelector(state => state.theme);

	const dispatch = useDispatch();

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const handleChange = () => {
		dispatch(set(theme === 'dark' ? 'light' : 'dark'))
	};
	return (
		<Container>
			<Nav>
				<NavItem to={home}>
					<LogoImage src={theme === 'light' ? lightDesktopLogo : darkDesktopLogo} alt="logo"/>
				</NavItem>
				<NavList>
					<NavItem to={branches}><NavItemAnchor>Lösungen</NavItemAnchor></NavItem>
					<NavItem to={about}><NavItemAnchor>Über uns</NavItemAnchor></NavItem>
					<NavItem to={impressum}><NavItemAnchor>Impressum</NavItemAnchor></NavItem>
				</NavList>
				<NavAdditionalList>
					<NavItem to={contacts}><BiPhoneCall/></NavItem>
					<NavItem to={favorites}><AiOutlineHeart/></NavItem>
					<NavItemTheme onClick={() => {
						handleChange()
					}}>
						{theme === 'light' ? <BiMoon style={{color: "var(--text-color)"}}/> : <BiSun style={{color: "var(--text-color)"}}/>}
					</NavItemTheme>
				</NavAdditionalList>
				<MobileNav onClick={() => setNav(!nav)}>
					{nav ? (
						<IoIosClose size={45}/>
					) : (
						<IoIosMenu size={35}/>
					)}
				</MobileNav>
			</Nav>
		</Container>
	);
};

export default Navbar;