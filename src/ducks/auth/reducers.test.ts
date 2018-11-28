import * as actions from './actions';
import reducer, { initialState } from './reducers';
import * as selectors from './selectors';

describe('Test sign in', () => {
  it('should get initial state', () => {
    expect.assertions(1);
    const state = reducer(undefined, actions.clearAuthToken());
    expect(state).toEqual(initialState);
  });
  it('should return same state when receive unknown action', () => {
    expect.assertions(1);
    const token: string = 'mytoken';
    const state = reducer(initialState, actions.setAuthToken(token));
    const nextState = reducer(state, { type: 'UNKNOWN_ACTION' } as any);
    expect(state).toEqual(nextState);
  });
  it('should sign in and store token', () => {
    expect.assertions(2);
    const token: string = 'mytoken';
    const state = reducer(initialState, actions.setAuthToken(token));
    expect(state.token).toBe(token);

    const isSignedIn = selectors.isSignedIn({ auth: state });
    expect(isSignedIn).toBeTruthy();
  });
  it('should sign out and clear token', () => {
    expect.assertions(2);
    const token: string = 'mytoken';
    let state = reducer(initialState, actions.setAuthToken(token));
    state = reducer(state, actions.clearAuthToken());
    expect(state.token).toBeNull();

    const isSignedIn = selectors.isSignedIn({ auth: state });
    expect(isSignedIn).toBeFalsy();
  });
});
