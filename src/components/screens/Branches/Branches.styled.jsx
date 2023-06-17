import styled from "@emotion/styled";
import {AiOutlineHeart} from "react-icons/ai";
import {NavLink} from "react-router-dom";

const BranchesTitle = styled.h3`
	margin: 0 0 40px 0;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1.5px;
	text-align: center;
`;

const BranchesBlock = styled.div`
  color: var(--text-color);
`;

const FavoriteButton = styled.span`
  font-size: 25px;
  font-weight: 700;
  margin: 20px 0;
	color: var(--text-color);
	
	&.addStatus {
		color: #bbe903;
	}
`;

const BranchesQuote = styled.p`
	text-align: center;
	margin-top: 40px;
	font-size: 22px;
`;

export {BranchesTitle, BranchesBlock, FavoriteButton, BranchesQuote};



