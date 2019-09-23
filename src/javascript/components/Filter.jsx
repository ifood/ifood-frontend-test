import React, { Component } from "react";
import LimitFilter from "./filters/LimitFilter";
import SelectFilter from "./filters/SelectFilter";
import DateFilter from "./filters/DateFilter";
import NumericFilter from "./filters/NumericFilter";
import TextFilter from "./filters/TextFilter";
import PropTypes from "prop-types";
import _ from "lodash";

export default class Filter extends Component {
  componentDidMount() {
    this.props.getFilters();
  }

  componentDidUpdate(prevProps, prevState) {
    const { accessToken, filters, fetchPlaylists } = this.props;
    const { values: currentFilters } = filters;
    const { values: oldFilters } = prevProps.filters;
    const filtersChanged = !_.isEqual(currentFilters, oldFilters);
    filtersChanged && fetchPlaylists(accessToken, currentFilters);
  }

  render() {
    const { filters, setFilter } = this.props;

    return (
      <div className="filters-container">
        <LimitFilter
          filter={filters.limit}
          limitValue={_.get(filters, "values.limit.value", null)}
          setFilter={setFilter}
          name="limit"
        />
        <SelectFilter
          filter={filters.locale}
          setFilter={setFilter}
          name="locale"
        />
        <SelectFilter
          filter={filters.country}
          setFilter={setFilter}
          name="country"
        />
        <DateFilter
          filter={filters.timestamp}
          setFilter={setFilter}
          value={_.get(filters, "values.timestamp.value", null)}
          name="timestamp"
        />
        <NumericFilter
          filter={filters.offset}
          setFilter={setFilter}
          name="offset"
        />
        <div className="filter-container">
          <div className="filter-name">Nome</div>
          <TextFilter setFilter={setFilter} name="name" />
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.object.isRequired,
  limitValue: PropTypes.number,
  accessToken: PropTypes.string,
  fetchPlaylists: PropTypes.func.isRequired,
  getFilters: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};
