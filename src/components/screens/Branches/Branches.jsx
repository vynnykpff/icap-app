import {BranchesBlock, BranchesQuote, BranchesTitle} from "./Branches.styled.jsx";
import {Wrapper} from "../../ui/common/Common.styled.jsx";
import Cards from "../../ui/Cards/Cards.jsx";

const Branches = () => {
	return (
		<Wrapper>
			<BranchesBlock>
				<BranchesTitle>Our Projects</BranchesTitle>
				<Cards/>
				<BranchesQuote>
					Opportunities don't happen, you create them. — <span
					style={{color: "var(--accent-color)"}}>Chris Grosser</span>
				</BranchesQuote>
			</BranchesBlock>
		</Wrapper>
	);
};

export default Branches;
