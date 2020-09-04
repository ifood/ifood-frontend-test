import { Input } from 'semantic-ui-react';
import styled from 'styled-components';

const Search = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ModalTriggerWrapper = styled.div`
  width: 55px;
  flex-shrink: 0;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const InputSearch = styled(Input)`
  flex-grow: 1;
`;

export { Search, ModalTriggerWrapper, InputSearch };
