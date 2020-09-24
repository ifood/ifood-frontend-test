import styled from "styled-components";
import { gray } from "../../assets/_colors";

export const Container = styled.div`
  width: ${(props) => (props.width ? props.width : "300px")};
  height: fit-content;
  border: 1px solid #dde2e5;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background-color: white;
`;

export const Title = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${gray.trout};

  > svg {
    transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "initial")};
  }
`;

export const Values = styled.div`
  padding: 5px;
  border-top: 1px solid #e5e8ec;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  flex-direction: column;
  background: white;
  width: ${(props) => (props.width ? props.width : "292px")};
  border-radius: 10px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

export const Item = styled.div`
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;
