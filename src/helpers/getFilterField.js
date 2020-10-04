import React from "react";

import Field from "components/Field";

export const getFilterField = (item, func) => {
  const { id, name } = item;

  switch (id) {
    case "locale":
      return (
        <Field
          as="select"
          onChange={func}
          inputName={name}
          options={item.values}
        />
      );

    case "country":
      return (
        <Field
          as="select"
          onChange={func}
          inputName={name}
          options={item.values}
        />
      );

    case "timestamp":
      break;

    case "limit":
      return <Field type="number" onChange={func} inputName={name} />;

    case "offset":
      return <Field type="number" onChange={func} inputName={name} />;

    default:
      return false;
  }
};
