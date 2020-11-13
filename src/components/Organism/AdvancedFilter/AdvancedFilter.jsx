import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { isEmpty, has } from 'lodash'
import Typography from '@material-ui/core/Typography'
import Loading from '../../Atom/Loading'
import { createFormField } from '../../../utils/formHelper'
import { useDebounce } from '../../../utils/debounce'
import { DEBOUNCE_CHANGE_FIELDS_TIME } from '../../../utils/constants'
import { StyledAdvancedFilter } from './styles'

const AdvancedFilter = ({
  formikProps,
  filters,
  isFetching,
  error,
  onValuesChange,
  className,
}) => {
  const debouncedFilters = useDebounce(
    formikProps.values?.advanced,
    DEBOUNCE_CHANGE_FIELDS_TIME
  )

  useEffect(() => {
    const { values, errors } = formikProps
    const hasErrors = has(errors, 'advanced')

    onValuesChange({ values: values.advanced, hasErrors })
  }, [debouncedFilters])

  const renderFilters = () => {
    if (isFetching) {
      return (
        <Box paddingTop={2}>
          <Loading />
        </Box>
      )
    }

    if (!isEmpty(error)) {
      return (
        <Typography className="advanced-filter__error" color="textPrimary">
          Houve um erro ao carregar os filtros
        </Typography>
      )
    }

    return filters.length === 0 ? (
      <Typography className="advanced-filter__empty" color="textPrimary">
        Não existem filtros avançados
      </Typography>
    ) : (
      <Grid
        container
        spacing={2}
        wrap="wrap"
        className="advanced-filter__filters-container"
      >
        {filters.map((f) => (
          <Grid
            item
            md={3}
            sm={4}
            xs={12}
            key={`grid-${f.id}`}
            className="advanced-filter__filter"
          >
            {createFormField({ fieldData: f, formikProps })}
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <StyledAdvancedFilter className={className}>
      <Typography
        element="h2"
        color="textPrimary"
        className="advanced-filter__title"
      >
        Filtros avançados
      </Typography>
      {renderFilters()}
    </StyledAdvancedFilter>
  )
}

AdvancedFilter.propTypes = {
  onValuesChange: PropTypes.func,
  formikProps: PropTypes.object.isRequired,
  filters: PropTypes.array,
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  className: PropTypes.string,
}

AdvancedFilter.defaultProps = {
  filters: [],
  className: '',
  onValuesChange: () => {},
}

export default AdvancedFilter
