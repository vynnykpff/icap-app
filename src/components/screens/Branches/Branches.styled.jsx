import styled from "@emotion/styled";
import {tablet} from "../../../shared/constants/mediaQueries.js";

const BranchesQuote = styled.p`
	text-align: center;
	margin-top: 40px;
	font-size: 22px;

  @media (max-width: ${tablet}) {
    font-size: 18px;
  }
	
`;

export {BranchesQuote};



