import React from "react";

import Field from "components/Field";
import DateField from "components/DateField";

export const getFilterField = (item, handleInput, dateFunction, dataStart) => {
  const { id, name } = item;

  switch (id) {
    case "locale":
      return (
        <Field
          as="select"
          onChange={handleInput}
          inputName={name}
          options={item.values}
        />
      );

    case "country":
      return (
        <Field
          as="select"
          onChange={handleInput}
          inputName={name}
          options={item.values}
        />
      );

    case "timestamp":
      return (
        <DateField onCalendarChange={dateFunction} dataStart={dataStart} />
      );

    case "limit":
      return <Field type="number" onChange={handleInput} inputName={name} />;

    case "offset":
      return <Field type="number" onChange={handleInput} inputName={name} />;

    default:
      return false;
  }
};
