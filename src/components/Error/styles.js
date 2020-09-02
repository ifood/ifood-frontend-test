import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 4.4rem;
  padding-bottom: 2rem;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 2rem;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => (props.color ? props.color : "#333943")};
  font-size: 2rem;
`;
