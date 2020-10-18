/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

const InputContainer = styled.div`
  display: flex;
`;
const InputStyled = styled(Input)`
  width: 200px;
`;

export default function Page({ ...props }) {
  return (
    <InputContainer>
      <InputStyled
        placeholder="Buscar"
        suffix={<SearchOutlined />}
        {...props}
      />
    </InputContainer>
  );
}
