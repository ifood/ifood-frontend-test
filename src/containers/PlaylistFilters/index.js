import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getFilters } from "services/api";
import { Select } from "baseui/select";
import { DatePicker } from "baseui/datepicker";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { Skeleton } from "baseui/skeleton";
import { getFilterType, getInitialState, PAGE_SIZE } from "./helper";

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
      const searchTimer = setTimeout(() => {
        onChange(values);
      }, 700);
      return () => {
        clearTimeout(searchTimer);
      };
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
            orientation="vertical"
            id={filter.id}
            aria-label="TODO"
            clearable
            formatString={filter.validation.pattern.replace("T", " ")}
            timeSelectStart
            value={values[filter.id]}
            onChange={(params) => {
              if (params.date != values[filter.id]) {
                setValues((prev) => ({ ...prev, [filter.id]: params.date }));
              }
            }}
          />
        </FormControl>
      );
    }

    if (type === "number") {
      const minValue =
        typeof filter.validation.min === "number" ? filter.validation.min : 1;

      let value = values[filter.id];
      let valueMultiplier = 1;
      let valuePenalty = 0;
      if (
        filter.id === "offset" &&
        (values[filter.id] !== undefined || values[filter.id] !== null)
      ) {
        valueMultiplier = PAGE_SIZE;
        valuePenalty = PAGE_SIZE;
        value = (values[filter.id] + valueMultiplier) / valueMultiplier;
      }

      return (
        <FormControl key={filter.id} label={() => filter.name}>
          <Input
            id={filter.id}
            max={filter.validation.max}
            min={minValue}
            type="number"
            placeholder={filter.name}
            value={value}
            onChange={(e) => {
              if (e && e.target && e.target.value) {
                const nextValue =
                  e.target.value * valueMultiplier - valuePenalty;
                setValues((prev) => ({
                  ...prev,
                  [filter.id]: nextValue,
                }));
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

  return (
    <div className="playlist-filters">
      {filters.map(renderFilter)}
      {JSON.stringify(values)}
    </div>
  );
}

PlaylistFilters.propTypes = {
  onChange: PropTypes.func,
};

PlaylistFilters.defaultProps = {
  onChange: () => {},
};

export default PlaylistFilters;
