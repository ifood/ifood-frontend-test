import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getFilters } from "services/api";
import { Select } from "baseui/select";
import { DatePicker } from "baseui/datepicker";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { Skeleton } from "baseui/skeleton";
import { getFilterType, getInitialState } from "./helper";

function PlaylistFilters({ onChange }) {
  const [filters, setFilters] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [values, setValues] = React.useState({});

  const loadFilters = async () => {
    try {
      setLoading(true);
      const { data: filtersData } = await getFilters();
      if (Array.isArray(filtersData.filters)) {
        setValues(getInitialState(filtersData.filters));
        setFilters(filtersData.filters);
      }
    } catch (e) {
      console.log(e);
      // TODO: Show error message on screen
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFilters();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      onChange(values);
    }
  }, [values]);

  const renderFilter = (filter) => {
    const { type, default: defaultValue } = getFilterType(filter);

    if (type === "select") {
      const options = filter.values.map(({ value, name }) => ({
        id: value,
        label: name,
      }));
      return (
        <FormControl key={filter.id} label={() => filter.name}>
          <Select
            id={filter.id}
            aria-label="TODO"
            placeholder={filter.name}
            options={options}
            value={values[filter.id]}
            onChange={(params) => {
              setValues((prev) => ({ ...prev, [filter.id]: params.value }));
            }}
          />
        </FormControl>
      );
    }

    if (type === "datetime") {
      return (
        <FormControl key={filter.id} label={() => filter.name}>
          <DatePicker
            id={filter.id}
            aria-label="TODO"
            clearable
            formatString={filter.validation.pattern.replace("T", " ")}
            timeSelectStart
            value={values[filter.id]}
            onChange={(params) => {
              setValues((prev) => ({ ...prev, [filter.id]: params.date }));
            }}
          />
        </FormControl>
      );
    }

    if (type === "number") {
      return (
        <FormControl key={filter.id} label={() => filter.name}>
          <Input
            id={filter.id}
            max={filter.validation.max}
            min={filter.validation.min || defaultValue}
            type="number"
            placeholder={filter.name}
            value={values[filter.id] || defaultValue}
            onChange={(e) => {
              if (e && e.target && e.target.value) {
                const { value } = e.target;
                setValues((prev) => ({ ...prev, [filter.id]: value }));
              }
            }}
            clearOnEscape
          />
        </FormControl>
      );
    }
  };

  if (isLoading) {
    const estimatedHeight = "440px";
    return (
      <Skeleton
        animation
        rows={5}
        height={estimatedHeight}
        width="100%"
        overrides={{
          Row: {
            style: ({ $theme }) => {
              return {
                height: "44px",
                marginTop: "34px",
              };
            },
          },
        }}
      />
    );
  }

  return <div className="playlist-filters">{filters.map(renderFilter)}</div>;
}

PlaylistFilters.propTypes = {
  onChange: PropTypes.func,
};

PlaylistFilters.defaultProps = {
  onChange: () => {},
};

export default PlaylistFilters;
