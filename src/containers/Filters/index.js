import React from "react";

import Field from "components/Field";

import * as S from "./styled";

const Filters = () => {
  return (
    <S.Filters>
      <S.FiltersTitle>Browse in our playlists</S.FiltersTitle>

      <S.FiltersBox>
        <S.FiltersFull>
          <Field placeholder="Search by name" />
        </S.FiltersFull>

        <S.FiltersHalf>
          <Field as="select">
            <option value="" defaultValue disabled>
              Locale
            </option>
            <option>Option</option>
            <option>Option</option>
          </Field>
        </S.FiltersHalf>

        <S.FiltersHalf>
          <Field as="select">
            <option value="" defaultValue disabled>
              Country
            </option>
            <option>Option</option>
            <option>Option</option>
          </Field>
        </S.FiltersHalf>

        <S.FiltersHalf>
          <Field placeholder="Quantity" type="number" />
        </S.FiltersHalf>

        <S.FiltersHalf>
          <Field placeholder="Page" type="number" />
        </S.FiltersHalf>

        <S.FiltersFull>
          <Field placeholder="Texto" type="date" />
        </S.FiltersFull>
      </S.FiltersBox>
    </S.Filters>
  );
};

export default Filters;
