import styled from 'styled-components';

const Title = styled.h1`
  font-size: 14px;
`;

const Subtitle = styled.label`
  font-size: 12px;
  margin: 8px 0;
`;

const Group = styled.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: 1fr ;
  row-gap: 0;

  @media (min-width:760px){
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 920px) {
    gap: 24px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const SubGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.hr`
  border: .1px solid #e6e6e6;
  margin: 32px 0;
`;

const FeatureTitle = styled.h3`
  margin: 16px 0;
`;

export {
  Title,
  Subtitle,
  Group,
  SubGroup,
  Line,
  FeatureTitle,
};
