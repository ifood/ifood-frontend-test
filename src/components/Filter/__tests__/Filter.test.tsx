import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';
import { Filter } from '../Filter';
import { AppProvider } from '../../../contexts/AppContext';
import { useFilterFields, FilterField } from '../../../hooks/useFilterFields';

jest.mock('../../../hooks/useFilterFields');
const useFilterFieldsMocked = mocked(useFilterFields, true);

const filterFields: FilterField[] = [
  {
    id: 'locale',
    name: 'Locale',
    type: 'select',
    options: [
      { value: 'pt_BR', name: 'pt_BR' },
      { value: 'en_US', name: 'en_US' },
    ],
  },
  {
    id: 'country',
    name: 'País',
    type: 'select',
    options: [
      { value: 'BR', name: 'Brasil' },
      { value: 'US', name: 'EUA' },
    ],
  },
  {
    id: 'timestamp',
    name: 'Data e Horário',
    type: 'datetime',
  },
  {
    id: 'limit',
    name: 'Quantidade',
    type: 'integer',
    validation: { min: 1, max: 50 },
  },
  {
    id: 'offset',
    name: 'Página',
    type: 'integer',
  },
];

describe('Filter', () => {
  beforeEach(() => {
    useFilterFieldsMocked.mockClear();
  });

  test('matches the snapshot', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields,
      isLoading: false,
      isSuccess: true,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    const { baseElement } = render(<Filter onFilter={jest.fn()} onSearch={jest.fn()} />, {
      wrapper: AppProvider,
    });
    expect(baseElement).toMatchSnapshot();
  });

  test('renders the filter', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields: undefined,
      isLoading: true,
      isSuccess: false,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    render(<Filter onFilter={jest.fn()} onSearch={jest.fn()} />, { wrapper: AppProvider });

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filtros/i })).toBeInTheDocument();
  });

  test('clicks on the "Filtros" button when loading filter fields', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields: undefined,
      isLoading: true,
      isSuccess: false,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    render(<Filter onFilter={jest.fn()} onSearch={jest.fn()} />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /filtros/i }));
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('clicks on the "Filtros" button when there is an error', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields: undefined,
      isLoading: false,
      isSuccess: false,
      isError: true,
      validateFilterField: jest.fn(),
    }));

    render(<Filter onFilter={jest.fn()} onSearch={jest.fn()} />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /filtros/i }));
    expect(screen.getByText(/não foi possível carregar os filtros./i)).toBeInTheDocument();
  });

  test('clicks on the "Filtros" button when there is no filter fields', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields: undefined,
      isLoading: false,
      isSuccess: true,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    render(<Filter onFilter={jest.fn()} onSearch={jest.fn()} />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /filtros/i }));
    expect(screen.getByText(/nenhum filtro encontrado./i)).toBeInTheDocument();
  });

  test('clicks on the "Filtros" button when there is filter fields', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields,
      isLoading: false,
      isSuccess: true,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    render(<Filter onFilter={jest.fn()} onSearch={jest.fn()} />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /filtros/i }));
    expect(screen.getByRole('button', { name: /locale/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /país/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /data e horário/i })).toBeInTheDocument();
    expect(screen.getByRole('spinbutton', { name: /quantidade/i })).toBeInTheDocument();
    expect(screen.getByRole('spinbutton', { name: /página/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /limpar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filtrar/i })).toBeInTheDocument();
  });

  test('clicks on the "Limpar" button', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields,
      isLoading: false,
      isSuccess: true,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    const onFilter = jest.fn();
    render(<Filter onFilter={onFilter} onSearch={jest.fn()} />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /filtros/i }));
    userEvent.click(screen.getByRole('button', { name: /limpar/i }));
    expect(onFilter).toHaveBeenCalledWith({});
  });

  test('clicks on the "Filtrar" button when filter fields have no value (cleared)', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields,
      isLoading: false,
      isSuccess: true,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    const onFilter = jest.fn();
    render(<Filter onFilter={onFilter} onSearch={jest.fn()} />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /filtros/i }));
    userEvent.click(screen.getByRole('button', { name: /filtrar/i }));
    expect(onFilter).toHaveBeenCalledWith({});
  });

  test('clicks on the "Filtrar" button when filter fields have value', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields,
      isLoading: false,
      isSuccess: true,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    const onFilter = jest.fn();
    render(<Filter onFilter={onFilter} onSearch={jest.fn()} />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /filtros/i }));
    userEvent.type(screen.getByRole('spinbutton', { name: /quantidade/i }), '10');
    userEvent.type(screen.getByRole('spinbutton', { name: /página/i }), '2');
    userEvent.click(screen.getByRole('button', { name: /filtrar/i }));
    expect(onFilter).toHaveBeenCalledWith({ limit: '10', offset: '2' });
  });

  test('disables the "Filtrar" button when filter fields have invalid value', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields,
      isLoading: false,
      isSuccess: true,
      isError: false,
      validateFilterField: jest.fn().mockReturnValue('erro quantidade'),
    }));

    render(<Filter onFilter={jest.fn()} onSearch={jest.fn()} />, { wrapper: AppProvider });

    userEvent.click(screen.getByRole('button', { name: /filtros/i }));
    userEvent.type(screen.getByRole('spinbutton', { name: /quantidade/i }), '51');
    expect(screen.getByText(/erro quantidade/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filtrar/i })).toBeDisabled();
  });

  test('searches playlists', () => {
    useFilterFieldsMocked.mockImplementation(() => ({
      filterFields,
      isLoading: false,
      isSuccess: true,
      isError: false,
      validateFilterField: jest.fn(),
    }));

    const onSearch = jest.fn();
    render(<Filter onFilter={jest.fn()} onSearch={onSearch} />, { wrapper: AppProvider });

    userEvent.type(screen.getByRole('textbox'), 'search text');
    expect(onSearch).toHaveBeenCalledWith('search text');
  });
});
