import { IFilterConfig } from '../../api/filter';
import * as actions from './actions';
import reducer, { initialState } from './reducers';
import * as selectors from './selectors';

const configExample: IFilterConfig = [
  {
    id: 'locale',
    name: 'Locale',
    values: [
      {
        name: 'en_AU',
        value: 'en_AU',
      },
      {
        name: 'de_DE ',
        value: 'de_DE',
      },
    ],
  },
  {
    id: 'country',
    name: 'País',
    values: [
      {
        name: 'Australia',
        value: 'AU',
      },
      {
        name: 'Alemanhã',
        value: 'DE',
      },
      {
        name: 'Brasil',
        value: 'BR',
      },
    ],
  },
  {
    id: 'timestamp',
    name: 'Data e Horário',
    validation: {
      entityType: 'DATE_TIME',
      pattern: 'yyyy-MM-ddTHH:mm:ss',
      primitiveType: 'STRING',
    },
  },
  {
    id: 'limit',
    name: 'Quantidade',
    validation: {
      max: 50,
      min: 1,
      primitiveType: 'INTEGER',
    },
  },
  {
    id: 'offset',
    name: 'Página',
    validation: {
      primitiveType: 'INTEGER',
    },
  },
];

describe('Test fetch config', () => {
  it('should get initial state', () => {
    expect.assertions(1);
    const state = reducer(undefined, actions.fetchFilterConfig([]));
    expect(state).toEqual(initialState);
  });
  it('should return same state when receive unknown action', () => {
    expect.assertions(1);
    const token: string = 'mytoken';
    const state = reducer(
      initialState,
      actions.fetchFilterConfig(configExample),
    );
    const nextState = reducer(state, { type: 'UNKNOWN_ACTION' } as any);
    expect(state).toEqual(nextState);
  });
  it('should set state correctly', () => {
    expect.assertions(5);
    const state = reducer(
      initialState,
      actions.fetchFilterConfig(configExample),
    );
    expect(selectors.getCountryList({ filter: state })).toEqual(
      configExample[1].values,
    );
    expect(selectors.getLocaleList({ filter: state })).toEqual(
      configExample[0].values,
    );
    expect(selectors.getTimestamp({ filter: state })).toEqual(
      configExample[2].validation && configExample[2].validation.pattern,
    );
    expect(selectors.getLimitBoundaries({ filter: state }).min).toBe(
      configExample[3].validation && configExample[3].validation.min,
    );
    expect(selectors.getLimitBoundaries({ filter: state }).max).toBe(
      configExample[3].validation && configExample[3].validation.max,
    );
  });
});
