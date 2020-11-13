import React, { useState, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import {
  selectFilters,
  selectAllFilters,
  selectHasErrorFilters,
  selectIsFetchingFilters,
} from '../../../redux/reducer/FilterReducer'
import { FilterButton } from '../../Atom/FilterButton'
import { AdvancedFilter } from '../AdvancedFilter'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { createInitialValues } from '../../../utils/formHelper'
import { createYupSchema } from '../../../utils/formValidationHelper'
import { SearchBar } from '../../Molecule/SearchBar'
import Loading from '../../Atom/Loading'
import { StyledFilter } from './styles'
import cx from 'classnames'

const Filter = ({
  onSearchBarChange,
  onFiltersChange,
  onPageError,
  className,
}) => {
  const [showMoreFilters, setShowMoreFilters] = useState(false)
  const filtersState = useSelector(selectFilters)
  const isFetchingFilters = useSelector(selectIsFetchingFilters)
  const filters = useSelector(selectAllFilters)
  const hasErrorFilter = useSelector(selectHasErrorFilters)

  const toggleMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters)
  }

  const validationSchema = useMemo(() => createYupSchema(filters), [filters])

  const initialValues = useMemo(() => {
    const advanced = createInitialValues([...filters])
    return { advanced: advanced, searchBar: '' }
  }, [filters])

  const handleClickAway = () => {
    if (showMoreFilters) {
      setShowMoreFilters(false)
    }
  }

  const renderFilterButton = () => {
    if (isFetchingFilters) return <Loading className="loader" />

    if (filters.length > 0 && !hasErrorFilter) {
      return <FilterButton onClick={toggleMoreFilters} />
    }
  }

  useEffect(() => {
    if (onPageError === true) {
      setShowMoreFilters(false)
    }
  }, [onPageError])

  const AdvancedFilterClassName = cx({ hide: !showMoreFilters })

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <StyledFilter component="header" className={className}>
        <Container maxWidth="lg">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange
            enableReinitialize
          >
            {(formikProps) => {
              return (
                <Box className="filter__form" component="form">
                  <Box className="main-filter">
                    <Typography
                      className="brand"
                      component="h2"
                      color="primary"
                    >
                      Spotifood
                    </Typography>
                    <SearchBar
                      formikProps={formikProps}
                      onSearchBarChange={onSearchBarChange}
                    />
                    {renderFilterButton()}
                  </Box>
                  <AdvancedFilter
                    className={AdvancedFilterClassName}
                    formikProps={formikProps}
                    onValuesChange={onFiltersChange}
                    {...filtersState}
                  />
                </Box>
              )
            }}
          </Formik>
        </Container>
      </StyledFilter>
    </ClickAwayListener>
  )
}

Filter.propTypes = {
  onSearchBarChange: PropTypes.func,
  onFiltersChange: PropTypes.func,
  onPageError: PropTypes.bool,
  className: PropTypes.string,
}

Filter.defaultProps = {
  className: '',
}

export default Filter
