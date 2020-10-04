import React from "react";
import PropTypes from "prop-types";

import DatePicker, { setDefaultLocale } from "react-datepicker";

import { ptBR } from "date-fns/locale";

import * as S from "./styled";

setDefaultLocale(ptBR);

const DateField = ({ dataStart, onCalendarChange }) => {
  return (
    <S.DateField>
      <DatePicker
        selected={dataStart}
        onChange={onCalendarChange}
        showTimeSelect
        dateFormat="Pp"
        timeIntervals={15}
        shouldCloseOnSelect
        closeOnScroll
      />
    </S.DateField>
  );
};

DateField.propTypes = {
  onCalendarChange: PropTypes.func.isRequired,
  dataStart: PropTypes.instanceOf(Date).isRequired,
};

export default DateField;
