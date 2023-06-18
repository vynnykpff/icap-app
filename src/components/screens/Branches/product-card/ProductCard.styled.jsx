import styled from "@emotion/styled";

const ProductCardBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--text-color);
  margin: 40px 0;
`;

const ProductCardImage = styled.img`
  width: 350px;
	height: 300px;
	object-fit: cover;
  border-radius: 20px;
  border: 2px solid var(--accent-color);
`;

const DescriptionBlock = styled.div`
  width: 700px;
`;

const ProductCardTitle = styled.h4`
  font-size: 25px;
  letter-spacing: 1.5px;
  font-weight: 700;
`;

const ProductCardAbout = styled.p`
  font-size: 18px;
  letter-spacing: 1.2px;
`;

export {ProductCardBlock, ProductCardImage, DescriptionBlock, ProductCardTitle, ProductCardAbout};

