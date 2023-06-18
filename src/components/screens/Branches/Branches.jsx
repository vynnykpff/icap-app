import {BranchesQuote} from "./Branches.styled.jsx";
import {Title, Wrapper} from "../../ui/common/Common.styled.jsx";
import Cards from "../../ui/Cards/Cards.jsx";

const Branches = () => {
	return (
		<Wrapper>
				<Title>Our Projects</Title>
				<Cards/>
				<BranchesQuote>
					Opportunities don't happen, you create them. — <span
					style={{color: "var(--accent-color)"}}>Chris Grosser</span>
				</BranchesQuote>
		</Wrapper>
	);
};

export default Branches;
