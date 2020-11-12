/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
const checkParams = params => {
  for (const propName in params) {
    if (params[propName] === null || params[propName] === undefined) {
      delete params[propName];
    }
  }
  return params;
};

export default checkParams;
