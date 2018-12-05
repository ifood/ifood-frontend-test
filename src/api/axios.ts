import axios, { CancelTokenSource } from 'axios';

/**
 * Returns a cancellation token to use in axios calls.
 * To cancel an axios call, use the the method cancel
 * from the return object
 */
export function generateCancellationToken(): CancelTokenSource {
  return axios.CancelToken.source();
}
