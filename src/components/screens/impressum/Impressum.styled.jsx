import styled from "@emotion/styled";
import {List} from "antd";
import {baseBoxShadow, baseTransition} from "../../../shared/constants/variables.js";

const ListItemWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ListItem = styled(List.Item)`
  color: var(--text-color) !important;
  background: var(--card-color);
  border-radius: 10px;
  box-shadow: ${baseBoxShadow};
  width: 60%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.2px;
  transition: ${baseTransition};

  &:hover {
    opacity: 0.7;
	  transition: ${baseTransition};
  }
`;

export {ListItemWrapper, ListItem};
