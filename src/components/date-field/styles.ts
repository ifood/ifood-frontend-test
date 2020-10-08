import styled from 'styled-components';
import colors from 'common/colors';

export const DateField = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  input {
    height: 26px;
    border: 2px solid ${colors.GRAY_LIGHT};
    border-radius: 4px;
    padding-left: 10px;
    width: calc(99.4% - 10px);
  }
`;
