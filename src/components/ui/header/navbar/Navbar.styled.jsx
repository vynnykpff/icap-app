import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {fontSizeLink} from "../../../../shared/constants/variables.js";
import {tablet} from "../../../../shared/constants/mediaQueries.js";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`

const NavWrapperList = styled.span`
  display: flex;
	column-gap: 60px;

  @media (max-width: ${tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 50px;
    position: fixed;
    left: -100%;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: var(--background-color);
    z-index: 10;
    transition: left 0.5s;

    &.active {
      left: 0;
    }
`;

const MobileNav = styled.div`
  display: block;
  z-index: 10;
  @media (min-width: 769px) {
    display: none;
  }
`;

const LogoImage = styled.img`
	width: 130px;
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 60px;

  @media (max-width: ${tablet}) {
    flex-direction: column;
	  align-items: center;
	  row-gap: 60px;
`;

const NavAdditionalList = styled.div`
  display: flex;
  column-gap: 20px;
`;

const NavItem = styled(NavLink)`
  display: flex;
  color: var(--text-color);
  text-decoration: none;
  font-size: ${fontSizeLink};
  transition: color 0.3s ease;

  &.active {
    text-decoration: none;
    transition: color 0.3s ease;
    color: var(--accent-color);
  }
	
	&.shoppingCart {
		position: relative;
	}
`;

const NavItemAnchor = styled.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: -5px;
    left: 0;
    border-radius: 10px;
    background-color: var(--text-color);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scale(1);
    transform-origin: bottom left;
  }
`

const NavItemTheme = styled.span`
  color: #fff;
  font-size: ${fontSizeLink};
  cursor: pointer;
`;


export {Nav, MobileNav, LogoImage, NavList, NavAdditionalList, NavItemAnchor, NavItem, NavItemTheme, NavWrapperList};