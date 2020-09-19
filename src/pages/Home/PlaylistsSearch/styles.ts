import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import styled from 'styled-components';

const FilterButton = styled(IconButton)``;

const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0 8px;
  height: 56px;

  border-bottom: 1px solid rgba(0, 0, 0, .1);

  @media(min-width: 960px) {
    padding: 0 16px;

    ${FilterButton}{
      display: none;
    }
  }
`;

const Input = styled(InputBase)`
  flex: 1;
  margin: 0 8px;
`;

export { Container, FilterButton, Input };
