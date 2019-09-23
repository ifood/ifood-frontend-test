import React, { Component } from "react";
import InputNumber from "rc-input-number";
import PropTypes from "prop-types";

export default class NumericFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const { name, setFilter } = this.props;
    setFilter(name, { value });
  }

  render() {
    const { filter: numericFilter } = this.props;
    if (!numericFilter) {
      return null;
    }

    return (
      <div className="filter-container">
        <div className="filter-name">
          {(numericFilter && numericFilter.name) || ""}
        </div>
        <div>
          <InputNumber onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

NumericFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  filter: PropTypes.object,
};
