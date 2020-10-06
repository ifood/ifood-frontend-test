import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import PlaylistFilter from './PlaylistFilter';

const mockChangeFilters = jest.fn();
const mockSearch = jest.fn();
const mockInput = jest.fn();

const mockFilters: any = [{
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

const initialData = {
  filters: mockFilters,
  loading: false,
  onChangeFilters: mockChangeFilters,
  onChangeInputFilters: mockInput,
  onSearch: mockSearch,
}

describe('Playlist Filter', () => {
  test('Simple render', () => {
    const { container } = render(<PlaylistFilter {...initialData} />);
    expect(container.querySelector('.playlist-filter')).toBeInTheDocument();
  });

  test('Simple render with loader', () => {
    const { container } = render(
      <PlaylistFilter
        filters={[]}
        loading={true}
        onChangeFilters={mockChangeFilters}
        onChangeInputFilters={mockInput}
        onSearch={mockSearch}
      />);
    expect(container.querySelector('.loader')).toBeInTheDocument();
  });

  test('Search by name', async () => {
    const { container, getByTestId } = render(<PlaylistFilter {...initialData} />);
    expect(container.querySelector('.playlist-filter')).toBeInTheDocument();

    await act(async () => {
      await fireEvent.change(getByTestId('search'), {
        target: { value: 'my playlist' },
      });
    });

      expect(mockSearch).toHaveBeenCalled();
    });

    test('Change filter', async () => {
      const { container, getByTestId } = render(<PlaylistFilter {...initialData} />);
      expect(container.querySelector('.playlist-filter')).toBeInTheDocument();

      await act(async () => {
        await fireEvent.change(getByTestId('input-limit'), {
          target: { value: '2' },
        });
      });

      expect(mockInput).toHaveBeenCalled();
  });

  test('Change filter select', async () => {
    const { container, getByTestId } = render(<PlaylistFilter {...initialData} />);
    expect(container.querySelector('.playlist-filter')).toBeInTheDocument();

    await act(async () => {
      await fireEvent.change(getByTestId('select-country'), {
        target: { value: 'brasil' },
      });
    });

    expect(mockChangeFilters).toHaveBeenCalled();
  });
});
