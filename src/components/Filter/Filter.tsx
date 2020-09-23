import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import { FilterField as FilterFieldComponent } from './FilterField/FilterField';
import { useFilterFields, FilterField } from '../../hooks/useFilterFields';
import { useStyles } from './Filter.jss';

const getFilterFieldInitialValue = (filterField: FilterField) => {
  return filterField.type === 'datetime' ? null : '';
};

interface Filter {
  filterField: FilterField;
  value: string | null;
  error?: string;
}

interface FilterProps {
  onFilter: (filters: Record<string, string>) => void;
  onSearch: (search: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilter, onSearch }) => {
  const classes = useStyles();
  const [filters, setFilters] = useState<Filter[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const { filterFields, isLoading, isSuccess, isError, validateFilterField } = useFilterFields();

  const hasError = filters.some((filter) => filter.error);

  useEffect(() => {
    if (filterFields) {
      setFilters(
        filterFields.map((filterField) => ({
          filterField,
          value: getFilterFieldInitialValue(filterField),
          error: undefined,
        }))
      );
    } else {
      setFilters([]);
    }
  }, [filterFields]);

  const clearFilters = () => {
    setFilters((state) =>
      state.map((filter) => ({
        ...filter,
        value: getFilterFieldInitialValue(filter.filterField),
        error: undefined,
      }))
    );
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  const handleChangeFilter = (id: string, value: string | null) => {
    setFilters((state) =>
      state.map((filter) => {
        if (filter.filterField.id === id) {
          return {
            ...filter,
            value,
            error: validateFilterField(id, value),
          };
        }
        return { ...filter };
      })
    );
  };

  const handleClearFilters = () => {
    clearFilters();
    onFilter({});
  };

  const handleApplyFilters = () => {
    onFilter(
      filters.reduce((filterValues: Record<string, string>, filter) => {
        if (filter.value) {
          filterValues[filter.filterField.id] = filter.value;
        }
        return filterValues;
      }, {})
    );
  };

  return (
    <Paper className={classes.container}>
      <div className={classes.search}>
        <TextField
          variant="outlined"
          placeholder="Buscar playlists..."
          size="small"
          onChange={handleChangeSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
        <Button color="primary" startIcon={<FilterListIcon />} onClick={toggleExpanded}>
          Filtros
        </Button>
      </div>

      <Collapse in={isExpanded} timeout="auto">
        {isLoading && (
          <div className={classes.indicator}>
            <CircularProgress color="primary" />
          </div>
        )}

        {isError && (
          <div className={classes.indicator}>
            <Typography>Não foi possível carregar os filtros.</Typography>
          </div>
        )}

        {isSuccess && filters.length === 0 && (
          <div className={classes.indicator}>
            <Typography>Nenhum filtro encontrado.</Typography>
          </div>
        )}

        {isSuccess && filters.length > 0 && (
          <Grid className={classes.filters} container spacing={2}>
            {filters.map((filter) => (
              <Grid item xs={12} sm={4} md={3} key={filter.filterField.id}>
                <FilterFieldComponent
                  filterField={filter.filterField}
                  value={filter.value}
                  error={filter.error}
                  onChange={(value) => handleChangeFilter(filter.filterField.id, value)}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={4} md={3}>
              <div className={classes.actions}>
                <Button color="primary" variant="outlined" onClick={handleClearFilters}>
                  Limpar
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  disableElevation
                  disabled={hasError}
                  onClick={handleApplyFilters}
                >
                  Filtrar
                </Button>
              </div>
            </Grid>
          </Grid>
        )}
      </Collapse>
    </Paper>
  );
};
