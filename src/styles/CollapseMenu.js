import React from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const StyledCollapse = styled(Collapse)`
  position: relative;
  border: 0px;
  background-color: #fa2d3b !important;
  .ant-collapse-item {
    border: 0px !important;
    .ant-collapse-header {
      height: 3rem;
    }
  }
  .ant-collapse-content {
    border: 0px !important;
  }

  .ant-collapse-item-active {
    .expand-icon {
      transform: rotate(180deg);
      transition: 0.3s ease;
    }
  }
`;
const StyledPanel = styled(Panel)`
  border: 0px;
`;

const ExpandButton = styled.div`
  position: absolute;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  :hover {
    background-color: #ff4f5b;
  }
  span {
    color: white;
    font-size: 1rem;
  }
`;

const ExpandIcon = styled(CaretDownOutlined)`
  border-radius: 100%;
  padding: 2px 2px 0px 2px;
  margin-left: 4px;
  :hover {
    background-color: #ff4f5b;
  }
`;

export default function CollapseMenu({ children = () => {} }) {
  return (
    <StyledCollapse
      forceRender
      expandIcon={() => (
        <ExpandButton>
          <span>Filtros</span>
          <ExpandIcon className="expand-icon" />
        </ExpandButton>
      )}
    >
      <StyledPanel>{children}</StyledPanel>
    </StyledCollapse>
  );
}
