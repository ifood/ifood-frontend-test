/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Skeleton } from 'antd';

const LoadingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
`;

const Card = styled(Skeleton.Image)`
  border-radius: 10px;
  margin: 15px 15px;
  width: 320px !important;
  height: 400px !important;
`;

export { LoadingContainer, Card };
