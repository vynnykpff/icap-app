import styled from "@emotion/styled";
import {tablet} from "../../../../shared/constants/mediaQueries.js";

const ProductCardBlock = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-color);
	column-gap: 80px;
  margin: 40px 0;

  @media (max-width: ${tablet}) {
	  flex-direction: column;
	  text-align: center;
	  margin: 40px auto;
	  max-width: 400px;
  }
`;

const ProductCardImage = styled.img`
  max-width: 350px;
	max-height: 300px;
	object-fit: cover;
  border-radius: 20px;
  border: 2px solid var(--accent-color);
`;

const DescriptionBlock = styled.div`
  max-width: 700px;
`;

const ProductCardTitle = styled.h4`
  font-size: 25px;
  letter-spacing: 1.5px;
  font-weight: 700;

  @media (max-width: ${tablet}) {
	  text-align: center;
	  font-size: 22px;
  }
`;

const ProductCardAbout = styled.p`
  font-size: 18px;
  letter-spacing: 1.2px;

  @media (max-width: ${tablet}) {
    font-size: 16px;
  }
`;

export {ProductCardBlock, ProductCardImage, DescriptionBlock, ProductCardTitle, ProductCardAbout};

