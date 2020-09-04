import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import DynamicForm from '../DynamicForm';

function FilterModal({ open, filter, metadata, onSubmit, onClose }) {
  function handleClose() {
    if (onClose != null) {
      onClose();
    }
  }

  function handleSubmit(data) {
    if (onSubmit != null) {
      onSubmit(data);
    }
    handleClose();
  }

  return (
    <Modal size="tiny" onClose={handleClose} open={open} centered={false}>
      <Modal.Header>
        <FormattedMessage id="filter" />
      </Modal.Header>
      <Modal.Content>
        <DynamicForm
          id="filterForm"
          data={filter}
          metadata={metadata}
          onSubmit={handleSubmit}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button id="modalFilter-cancel" color="black" onClick={handleClose}>
          <FormattedMessage id="cancel" />
        </Button>
        <Button type="submit" form="filterForm" color="red">
          <FormattedMessage id="filter.submit" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

FilterModal.propTypes = {
  open: PropTypes.bool,
  filter: PropTypes.object,
  metadata: PropTypes.array,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

export default FilterModal;
