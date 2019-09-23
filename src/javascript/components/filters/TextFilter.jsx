import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    const { name, setFilter } = this.props;
    setFilter(name, value);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

TextFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
