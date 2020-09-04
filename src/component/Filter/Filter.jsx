import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import { useIntl } from 'react-intl';
import FilterModal from '../FilterModal';
import TagList from '../TagList';
import { Search, InputSearch, ModalTriggerWrapper } from './Filter.styled';
import { getFieldFormatter } from '../DynamicField/FieldMetadata';

function Filter({ metadata, filter, onFilter, onTextChange }) {
  const [modalOpen, setModalOpen] = useState(false);
  const intl = useIntl();

  function handleFilter(newFilter) {
    if (onFilter != null) {
      onFilter(newFilter);
    }
  }

  function handleDeleteTag(field) {
    const newFilter = { ...filter };
    delete newFilter[field];
    handleFilter(newFilter);
  }

  function handleTextChange(e) {
    if (onTextChange != null) {
      onTextChange(e?.target?.value);
    }
  }

  const tagFormatter = useCallback(
    ({ id, field, value }) => {
      const fieldMetadata = metadata?.find((item) => item?.id === field);
      if (fieldMetadata == null) {
        return { id, field, value };
      }
      let formatedValue = value;
      const formatter = getFieldFormatter(fieldMetadata);
      if (formatter != null) {
        formatedValue = formatter({ fieldMetadata, value });
      }
      return { id, field: fieldMetadata.name, value: formatedValue };
    },
    [metadata]
  );

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  const tags = useMemo(
    function convertFilterObjectToList() {
      return filter == null
        ? null
        : Object.keys(filter).map((key) => {
            return tagFormatter({
              id: key,
              field: key,
              value: filter[key],
            });
          });
    },
    [filter, tagFormatter]
  );

  return (
    <>
      <Search>
        <InputSearch icon placeholder={intl.formatMessage({ id: 'search' })}>
          <input onChange={handleTextChange} />
          <Icon name="search" />
        </InputSearch>
        {metadata != null && (
          <ModalTriggerWrapper>
            <Button circular basic icon="filter" onClick={handleOpenModal} />
            <FilterModal
              filter={filter}
              metadata={metadata}
              open={modalOpen}
              onSubmit={handleFilter}
              onClose={handleCloseModal}
            />
          </ModalTriggerWrapper>
        )}
      </Search>
      <TagList
        title={intl.formatMessage({ id: 'filters' })}
        items={tags}
        onDeleteTag={handleDeleteTag}
        formatter={tagFormatter}
      />
    </>
  );
}

Filter.propTypes = {
  metadata: PropTypes.array,
  filter: PropTypes.object,
  onFilter: PropTypes.func,
  onTextChange: PropTypes.func,
};

export default React.memo(Filter);
