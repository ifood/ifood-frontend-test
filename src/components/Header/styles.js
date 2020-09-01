import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (max-width: 330px) {
    padding: 1rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 12%;
`;

export const Image = styled.img`
  width: 4rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  color: #fff;
`;

export const FilterButton = styled.img`
  cursor: pointer;
  width: 40px;
  padding: 0.5rem;
  background-color: ${(props) => (props.active ? "#222934" : "#455770")};

  :hover {
    background-color: #222934;
  }
`;
