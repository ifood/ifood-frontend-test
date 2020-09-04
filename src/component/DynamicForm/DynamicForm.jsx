import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import DynamicField from '../DynamicField';

class DynamicForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      innerData: props.data,
    };
  }

  handleChange = ({ field, value }) => {
    this.setState((state) => {
      const innerData = { ...state.innerData };
      if (value == null || value === '') {
        delete innerData[field];
      } else {
        innerData[field] = value;
      }

      return {
        innerData,
      };
    });
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { innerData } = this.state;
    if (onSubmit != null) {
      onSubmit(innerData);
    }
  };

  render() {
    const { id, metadata } = this.props;
    const { innerData } = this.state;
    if (metadata == null) {
      return null;
    }
    return (
      <Form id={id} onSubmit={this.handleSubmit}>
        {metadata.map((item) => (
          <DynamicField
            key={item.id}
            metadata={item}
            value={innerData?.[item.id]}
            onChange={this.handleChange}
          />
        ))}
      </Form>
    );
  }
}

DynamicForm.propTypes = {
  id: PropTypes.string,
  metadata: PropTypes.array,
  data: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default DynamicForm;
