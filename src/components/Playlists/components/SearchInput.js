/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const InputContainer = styled.div`
  display: flex;
`;
const InputStyled = styled(Input)`
  width: 200px;
`;

export default function SearchInput({ onChange, ...props }) {
  return (
    <InputContainer aria-label="spotifood-playlists-header-search-input-container">
      <InputStyled
        placeholder="Buscar"
        suffix={<SearchOutlined />}
        aria-label="spotifood-playlists-header-search-input"
        onChange={onChange}
        {...props}
      />
    </InputContainer>
  );
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
