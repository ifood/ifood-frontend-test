import React from 'react';
import { act, render } from '@testing-library/react';
import axios from 'axios';
import * as filtersService from "../services/filters.service";
import { mocked } from 'ts-jest/utils';
import Swal from 'sweetalert2';
import useFilters from './useFilters';

const getFilters = mocked(filtersService.getFilters);
const mockedAxios = mocked(axios);

const spy = jest.spyOn(Swal, 'fire');

const MockUseCustomHook = () => {
  const { filters, loading } = useFilters();
  return (
    <div>
      <span className="loading">{loading ? 'loading' : ''}</span>
      <ul>
        {filters.map(f => (
          <li key={f.id} >
            {f.name}
          </li>
        ))}
      </ul>
    </div>
  )
};

const mockReturnValue: any = [{
  id: "locale",
  name: "Locale",
  values: [{
    value: "en_AU",
    name: "en_AU"
  },
  {
    value: "de_DE",
    name: "de_DE "
  },
  {
    value: "pt_BR",
    name: "pt_BR"
  },
  {
    value: "fr_FR",
    name: "fr_FR"
  },
  {
    value: "en_US",
    name: "en_US"
  },
  {
    value: "es_AR",
    name: "es_AR"
  }]
},
{
  id: "country",
  name: "País",
  values: [{
    value: "AU",
    name: "Austrália"
  },
  {
    value: "DE",
    name: "Alemanha"
  },
  {
    value: "BR",
    name: "Brasil"
  },
  {
    value: "PT",
    name: "Portugal"
  },
  {
    value: "US",
    name: "EUA"
  },
  {
    value: "RU",
    name: "Rússia"
  }]
},
{
  id: "timestamp",
  name: "Data e Horário",
  validation: {
    primitiveType: "STRING",
    entityType: "DATE_TIME",
    pattern: "yyyy-MM-ddTHH:mm:ss"
  }
},
{
  id: "limit",
  name: "Quantidade",
  validation: {
    primitiveType: "INTEGER",
    min: 1,
    max: 50
  }
},
{
  id: "offset",
  name: "Página",
  validation: {
    primitiveType: "INTEGER"
  }
}]

jest.mock('../services/filters.service');
jest.mock('axios');

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

beforeEach(() => {
  getFilters.mockClear();
  mockedAxios.mockClear();
  spy.mockClear();
});

describe('useFilters hook', () => {
  test('Simple render', async () => {
    getFilters.mockImplementation(() => Promise.resolve(mockReturnValue));
    const { container } = render(<MockUseCustomHook />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector('.loading')).toHaveTextContent('loading');
    await act(async () => new Promise(resolve => setTimeout(resolve, 100)));
    expect(container.querySelector('.loading')).toHaveTextContent('');
    expect(getFilters).toHaveBeenCalledTimes(1);
  });

  test('Render with filters', async () => {
    getFilters.mockImplementation(() => Promise.resolve(mockReturnValue));
    const { container } = render(<MockUseCustomHook />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector('.loading')).toHaveTextContent('loading');
    await act(async () => new Promise(resolve => setTimeout(resolve, 100)));
    expect(container.querySelector('.loading')).toHaveTextContent('');
    expect(container.querySelectorAll('li').length).toBe(5);
  });

  test('Erro to get filters', async () => {
    const error = new Error('Error testing');
    (error as any).response = { status: 400 };
    getFilters.mockImplementation(() => Promise.reject(error));
    const { container } = render(<MockUseCustomHook />);
    expect(container).toBeInTheDocument();
    expect(container.querySelector('.loading')).toHaveTextContent('loading');
    await act(async () => new Promise(resolve => setTimeout(resolve, 100)));
    expect(container.querySelector('.loading')).toHaveTextContent('');
    expect(spy).toHaveBeenCalledWith({ icon: 'error', text: 'Erro ao carregar filtros, tente novamente...' });
  });
});
