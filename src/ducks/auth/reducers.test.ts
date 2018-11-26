import * as actions from './actions';
import reducer, { initialState } from './reducers';

describe('Test sign in', () => {
  it('should get initial state', () => {
    const state = reducer(undefined, actions.clearAuthToken());
    expect(state).toEqual(initialState);
  });
  it('should return same state when receive unknown action', () => {
    const token: string = 'mytoken';
    const state = reducer(initialState, actions.setAuthToken(token));
    const nextState = reducer(state, { type: 'UNKNOWN_ACTION' } as any);
    expect(state).toEqual(nextState);
  });
  it('should sign in and store token', () => {
    const token: string = 'mytoken';
    const state = reducer(initialState, actions.setAuthToken(token));
    expect(state.token).toBe(token);
  });
  it('should sign out and clear token', () => {
    const token: string = 'mytoken';
    let state = reducer(initialState, actions.setAuthToken(token));
    state = reducer(state, actions.clearAuthToken());
    expect(state.token).toBeNull();
  });
});
