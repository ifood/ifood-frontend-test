type IAuth = {
  accessToken: string;
  tokenType: string;
  expiresIn: string;
  now?: string | Date;
};
export default IAuth;
