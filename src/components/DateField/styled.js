import styled from "styled-components";

import * as datePickerStyles from "react-datepicker/dist/react-datepicker.css";

import * as T from "constants/styles/typography";
import * as C from "constants/styles/colors";
import { SPACINGS } from "constants/styles/spacings";

export const DateField = styled.div`
  ${datePickerStyles};

  .react-datepicker-wrapper {
    width: 100%;
  }

  input {
    border-top: 1px solid ${C.GREY_LIGHTER};
    border-left: 1px solid ${C.GREY_LIGHTER};
    border-right: 1px solid ${C.GREY_LIGHTER};
    border-bottom: 2px solid ${C.PRIMARY_COLOR};
    padding: ${SPACINGS.xs} ${SPACINGS.sm};
    outline: none;
    color: ${C.GREY};
    font-size: ${T.SIZES.sm};
    font-family: ${T.PRIMARY_FONT};
    width: 100%;
    border-radius: 5px;
  }
`;
