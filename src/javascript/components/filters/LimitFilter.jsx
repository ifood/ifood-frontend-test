import React, { Component } from "react";
import InputRange from "react-input-range";
import _ from "lodash";
import PropTypes from "prop-types";

export default class LimitFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const { name, setFilter } = this.props;
    setFilter(name, { value });
  }

  render() {
    const { filter: limitFilter } = this.props;
    if (!limitFilter) {
      return null;
    }

    const min = _.get(limitFilter, "validation.min", null);
    const max = _.get(limitFilter, "validation.max", null);
    const isFilterLoaded = min && max;

    return (
      <div className="filter-container" id="limit-filter-container">
        <div className="filter-name">
          {(limitFilter && limitFilter.name) || ""}
        </div>
        <InputRange
          maxValue={max}
          minValue={min}
          disabled={!isFilterLoaded}
          value={this.props.limitValue || min}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

LimitFilter.propTypes = {
  filter: PropTypes.object,
  limitValue: PropTypes.number,
  setFilter: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
