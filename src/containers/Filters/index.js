import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useIntl, FormattedMessage } from 'react-intl';

import FilterField from '../../components/FilterField';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Wrapper } from './styles';
import messages from './messages';

import { getFilters } from '../../services/filter';
import { UPDATE } from '../../stores/reducers/filters';
import { useStateValue } from '../../stores';
import { getFiltersIntl } from '../../utils/filters';

const Filters = () => {
  const intl = useIntl();
  const [{ filters }, dispatch] = useStateValue();
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        setLoading(true);
        const response = await getFilters();
        setFields(getFiltersIntl(response, messages));
      } catch (error) {
        toast.error(intl.formatMessage(messages.errors.unknown));
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, [intl]);

  const handleFieldChange = ({ field, value }) => {
    const values = {};
    values[field] = value;
    dispatch({
      type: UPDATE,
      value: { ...filters, ...values },
    });
  };

  return (
    <div className="container">
      <Wrapper>
        <p>
          <strong>
            <FormattedMessage {...messages.title} />
          </strong>
        </p>
        <div className="row">
          {loading && (
            <div className="col-12 d-flex justify-content-center">
              <LoadingSpinner />
            </div>
          )}
          {fields &&
            fields.map((field) => (
              <div key={field.id} className="col-lg-4">
                <FilterField
                  field={field}
                  value={filters[field.id]}
                  onChange={handleFieldChange}
                />
              </div>
            ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Filters;
