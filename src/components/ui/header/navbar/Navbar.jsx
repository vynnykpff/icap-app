import React, {useEffect, useState} from 'react';
import {IoIosClose, IoIosMenu} from 'react-icons/io';
import {BiMoon, BiSun} from 'react-icons/bi';
import {
	LogoImage,
	MobileNav,
	Nav,
	NavAdditionalList,
	NavItem,
	NavItemAnchor,
	NavItemTheme,
	NavList,
	NavWrapperList,
} from './Navbar.styled.jsx';
import {Container} from '../../layout/Layout.styled.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {about, branches, favorites, home, impressum} from '../../../../shared/constants/routes.js';
import {set} from '../../../../store/theme/theme.slice.js';
import lightDesktopLogo from '../../../../assets/images/desktop-logo/icap-light-logo.png';
import darkDesktopLogo from '../../../../assets/images/desktop-logo/icap-dark-logo.png';
import {AiOutlineHeart} from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const theme = useSelector((state) => state.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	useEffect(() => {
		if (nav) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [nav]);

	const handleChange = () => {
		dispatch(set(theme === 'dark' ? 'light' : 'dark'));
	};

	return (
		<Container>
			<Nav>
				<NavItem to={home}>
					<LogoImage src={theme === 'light' ? lightDesktopLogo : darkDesktopLogo} alt="logo"/>
				</NavItem>
				<NavWrapperList onClick={() => setNav(false)} className={nav ? 'active' : ' '}>
					<NavList>
						<NavItem to={branches}>
							<NavItemAnchor>Lösungen</NavItemAnchor>
						</NavItem>
						<NavItem to={about}>
							<NavItemAnchor>Über uns</NavItemAnchor>
						</NavItem>
						<NavItem to={impressum}>
							<NavItemAnchor>Impressum</NavItemAnchor>
						</NavItem>
					</NavList>
					<NavAdditionalList>
						<NavItem to={favorites}>
							<AiOutlineHeart/>
						</NavItem>
						<NavItemTheme
							onClick={() => {
								handleChange();
							}}
						>
							{theme === 'light' ? (
								<BiMoon style={{color: 'var(--text-color)'}}/>
							) : (
								<BiSun style={{color: 'var(--text-color)'}}/>
							)}
						</NavItemTheme>
					</NavAdditionalList>
				</NavWrapperList>

				<MobileNav onClick={() => setNav(!nav)}>
					{nav ? <IoIosClose style={{color: 'var(--text-color)'}} size={45}/> :
						<IoIosMenu style={{color: 'var(--text-color)'}} size={35}/>}
				</MobileNav>
			</Nav>
		</Container>
	);
};

export default Navbar;
