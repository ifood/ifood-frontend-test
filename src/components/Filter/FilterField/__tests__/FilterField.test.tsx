import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterField } from '../FilterField';
import { AppProvider } from '../../../../contexts/AppContext';
import { FilterField as FilterFieldInterface } from '../../../../hooks/useFilterFields';

const filterFieldDatetime: FilterFieldInterface = {
  id: 'timestamp',
  name: 'Data e Horário',
  type: 'datetime',
};

const filterFieldSelect: FilterFieldInterface = {
  id: 'country',
  name: 'País',
  type: 'select',
  options: [
    { value: 'BR', name: 'Brasil' },
    { value: 'US', name: 'EUA' },
  ],
};

const filterFieldInteger: FilterFieldInterface = {
  id: 'limit',
  name: 'Quantidade',
  type: 'integer',
  validation: { min: 1, max: 50 },
};

const filterFieldText: FilterFieldInterface = {
  id: 'name',
  name: 'Nome',
  type: 'text',
};

describe('FilterField', () => {
  test('matches the snapshot', () => {
    const { baseElement } = render(
      <div>
        <FilterField
          filterField={filterFieldDatetime}
          value={null}
          error={undefined}
          onChange={jest.fn()}
        />
        <FilterField
          filterField={filterFieldSelect}
          value=""
          error={undefined}
          onChange={jest.fn()}
        />
        <FilterField
          filterField={filterFieldInteger}
          value=""
          error={undefined}
          onChange={jest.fn()}
        />
        <FilterField
          filterField={filterFieldText}
          value=""
          error={undefined}
          onChange={jest.fn()}
        />
      </div>,
      {
        wrapper: AppProvider,
      }
    );
    expect(baseElement).toMatchSnapshot();
  });

  test('renders the datetime filter field', () => {
    render(
      <FilterField
        filterField={filterFieldDatetime}
        value={null}
        error={undefined}
        onChange={jest.fn()}
      />,
      { wrapper: AppProvider }
    );

    expect(screen.getByLabelText(/data e horário/i)).toBeInTheDocument();
  });

  test('renders the select filter field', () => {
    render(
      <FilterField
        filterField={filterFieldSelect}
        value=""
        error={undefined}
        onChange={jest.fn()}
      />,
      { wrapper: AppProvider }
    );

    expect(screen.getByLabelText(/país/i)).toBeInTheDocument();
  });

  test('renders the integer filter field', () => {
    render(
      <FilterField
        filterField={filterFieldInteger}
        value=""
        error={undefined}
        onChange={jest.fn()}
      />,
      { wrapper: AppProvider }
    );

    expect(screen.getByLabelText(/quantidade/i)).toBeInTheDocument();
  });

  test('renders the text filter field', () => {
    render(
      <FilterField filterField={filterFieldText} value="" error={undefined} onChange={jest.fn()} />,
      { wrapper: AppProvider }
    );

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
  });

  test('renders the text filter field with error', () => {
    render(
      <FilterField
        filterField={filterFieldText}
        value=""
        error="mensagem de erro"
        onChange={jest.fn()}
      />,
      { wrapper: AppProvider }
    );

    expect(screen.getByText(/mensagem de erro/i)).toBeInTheDocument();
  });

  test('changes the datetime filter field', () => {
    const time = new Date('2020-10-21T12:30:00.000Z');
    jest.useFakeTimers('modern').setSystemTime(time.getTime());

    const onChange = jest.fn();
    render(
      <FilterField
        filterField={filterFieldDatetime}
        value={null}
        error={undefined}
        onChange={onChange}
      />,
      { wrapper: AppProvider }
    );

    userEvent.click(screen.getByLabelText(/data e horário/i));
    expect(screen.getByRole('dialog', { name: /date time picker/i })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(onChange).toHaveBeenCalledWith(time.toISOString());

    jest.useFakeTimers('modern').clearAllTimers();
  });

  test('changes the select filter field', () => {
    const onChange = jest.fn();
    render(
      <FilterField
        filterField={filterFieldSelect}
        value=""
        error={undefined}
        onChange={onChange}
      />,
      { wrapper: AppProvider }
    );

    userEvent.click(screen.getByLabelText(/país/i));
    expect(screen.getAllByRole('option')).toHaveLength(3);
    expect(screen.getByRole('option', { name: /nenhum/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /brasil/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /eua/i })).toBeInTheDocument();

    userEvent.click(screen.getByRole('option', { name: /brasil/i }));
    expect(onChange).toHaveBeenCalledWith('BR');
  });

  test('changes the integer filter field', () => {
    const onChange = jest.fn();
    render(
      <FilterField
        filterField={filterFieldInteger}
        value=""
        error={undefined}
        onChange={onChange}
      />,
      { wrapper: AppProvider }
    );

    const field = screen.getByLabelText(/quantidade/i);

    userEvent.type(field, '1');
    userEvent.type(field, '.');
    userEvent.type(field, ',');
    userEvent.type(field, 'a');
    userEvent.type(field, '2');
    expect(onChange).toHaveBeenCalledWith('1');
    expect(onChange).not.toHaveBeenCalledWith('.');
    expect(onChange).not.toHaveBeenCalledWith(',');
    expect(onChange).not.toHaveBeenCalledWith('a');
    expect(onChange).toHaveBeenCalledWith('2');
  });

  test('changes the text filter field', () => {
    const onChange = jest.fn();
    render(
      <FilterField filterField={filterFieldText} value="" error={undefined} onChange={onChange} />,
      { wrapper: AppProvider }
    );

    const field = screen.getByLabelText(/nome/i);

    userEvent.type(field, 'a');
    userEvent.type(field, '1');
    expect(onChange).toHaveBeenCalledWith('a');
    expect(onChange).toHaveBeenCalledWith('1');
  });
});
