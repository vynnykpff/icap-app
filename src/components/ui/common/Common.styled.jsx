import styled from "@emotion/styled";
import {baseTransition} from "../../../shared/constants/variables.js";
import {tablet} from "../../../shared/constants/mediaQueries.js";

const Wrapper = styled.div`
  margin: 40px 0;
  color: var(--text-color);
`;

const Title = styled.h3`
  margin: 0 0 40px 0;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;

  @media (max-width: ${tablet}) {
	  font-size: 25px;
  }
	
`;

const Button = styled.span`
  font-size: 25px;
  font-weight: 700;
  margin: 20px 0;
  color: var(--text-color);
	transition: ${baseTransition};
	
  &.addStatus {
    color: var(--accent-color);
    transition: ${baseTransition};
  }

	&:hover {
		color: var(--accent-color);
    transition: ${baseTransition};
	}
`;

export {Wrapper, Title, Button};