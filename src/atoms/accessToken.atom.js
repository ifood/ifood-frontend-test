import { atom } from 'recoil';

export const accessToken = atom({
  key: 'accessToken',
  default: {
    value: '',
    expires: null,
    tokenType: '',
  },
});
